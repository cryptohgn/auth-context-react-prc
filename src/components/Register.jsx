
const Register = (users, changeUser) => {

const initialState = [
    {
    id: 0,
    email: "",
    password: "",
    name: ""
    }
]

const [users, setUsers] = useState(initialState)

const handleInput = (ev) => {
    const idInput = ev.target.id; 
    const valueInput = ev.target.value;
   
    if (idInput === "name") {
        setUsers({ ...users, name: valueInput })
    }
    else if (idInput === "email") {
        setUsers({ ...users, email: valueInput })
    }
    else if (idInput === "password") {
        setUsers({ ...users, password: valueInput })
    }
}

const handleClick = (ev) => {
    ev.preventDefault()
    
    const userFind = users.find((user) => user.name === users.name && user.email === users.email && user.password === users.password)
    // Si está --> le redirigimos a Login
    if (userFind) {
        <h3>Usuario ya registrado</h3>
        navigate("/login")
    }
    
    else {
        <h2>Usuerioa guardado</h2>
    }
}

  return (
    <form>
     <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={handleInput} />
    </div>
    <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" onChange={handleInput} />
    </div>
    <div>
        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" onChange={handleInput} />
    </div>
    <div>
        <input type="submit" value="register" onClick={handleClick} />
    </div>
</form>
  )
}

export default Register