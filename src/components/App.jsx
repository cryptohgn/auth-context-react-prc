import { Route, Routes } from "react-router-dom"
import Home from "./home/Home"
import Login from "./login/Login"
import Nav from "./nav/Nav"
import { useEffect, useState } from "react"
import Profile from "./profile/Profile"
import AuthRoute from "./AuthRoute/AuthRoute"
import { UserContext, initialUser } from "./context/userContext";

function App() {

  const userNameContext = initialUser()

  // recojo los datos del LocalStorage y lo guardo en la variable de usuario, para mantener la sesion abiertA EN  casi que hayan datos guardados
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("userData")));
  

  const changeUser = (value) => {
    setUser(value)
  }

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(user))
  }, [user]) // se ejecuta cada vez que user cambia su valor

  return (
 
      <div>
        <h1>Camper & Camper</h1>
        <UserContext.Provider value={initialUser}>
          <p>{user ? `${user.name}` : null}</p>
          
          <Nav user={user} changeAddUser={changeUser} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login changeUser={changeUser} />} />
            <Route path="/register" element={<Register users={users}/>}/>
            {/* Ruta privada, se necesita estar autenticado para ingresar al perfil del usuario */}
            <Route path="/profile" element={<AuthRoute user={user} component={
              <Profile user={user} />} />} />
          </Routes>
        </UserContext.Provider>
      </div>
  )
}

export default App
