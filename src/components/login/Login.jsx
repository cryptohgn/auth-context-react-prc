import { useState } from "react";
import users from "../../data/users.json";
import { useNavigate } from "react-router-dom";


const initial_state = {
    email: "",
    password: ""
}
function Login({ changeUser }) {

    const [formData, setFormData] = useState(initial_state);
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleInput = (ev) => {
        const idInput = ev.target.id; //email, password
        const valueInput = ev.target.value;
        //setFormData({ ...formData, [idInput]: valueInput });
        if (idInput === "email") {
            setFormData({ ...formData, email: valueInput })
        }
        else if (idInput === "password") {
            setFormData({ ...formData, password: valueInput })
        }
    }

    const handleClick = (ev) => {
        ev.preventDefault()
        // coger los datos de formData
        // Buscar  si el usuario se encuentra en mis datos --> find
        const userFind = users.find((item) => item.email === formData.email && item.password === formData.password)
        // Si está --> le redirigimos a Home
        if (userFind) {
            changeUser(userFind)
            navigate("/")
        }
        // Sino está  le mandamos un mensaje de usuario o contraseña incorrecta
        else {
            setError("Email o contraseña incorrecto")
        }
    }

    return (
        <div>
            <form action="">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" onChange={handleInput} />
                </div>
                <div>
                    <input type="submit" value="login" onClick={handleClick} />
                </div>
            </form>

            <h3>{error}</h3>
        </div>
    )
}

export default Login