import { Link, useNavigate } from "react-router-dom"


function Nav({ user, changeUser }) {

    const navigate = useNavigate()

    // cerrar sesion
    const handleClick = () => {
        //devolvemos los datos del usuario a null, 
        changeUser(null)
        //redirecciono al home
        navigate("/")
    }
    return (
        <div>
            <Link to="/"> Home</Link>
            {user ? null : <Link to="/login"> Login </Link>}
            <Link to="/profile"> Mis datos </Link>
            {user ? <button onClick={handleClick}>Cerrar sesion</button> : null}
        </div>
    )
}

export default Nav