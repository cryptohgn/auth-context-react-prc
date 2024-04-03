import { createContext, useState } from "react";
import users from "../../data/users.json"


export const UserContext = createContext();

export const initialUser = ()=>{

    const [state, setState] = useState(users)

    const addUser = (newUser) => {
        setState(
            { ...state, newUser }
        )
    }

return {...state, addUser}

}
