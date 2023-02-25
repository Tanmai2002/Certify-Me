import React from "react"
const UserContext=React.createContext();


let UserProvider=({children})=>{
    return(
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
}
export {UserProvider,UserContext}