import { Navigate } from "react-router-dom";


function AuthRoute({ user, component }) {

    //si el usuario se ha logueado, renderizo el componente  recibido
    if (user) return component;

    // si el usuario no se ha logueado, lo redirecciono  a la pantalla de login
    if (!user) return <Navigate to="/login" />

}

export default AuthRoute