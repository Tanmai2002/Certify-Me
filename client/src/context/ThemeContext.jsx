import React from "react"
const ThemeContext=React.createContext();
const primaryColor="#0073b1"
const secondaryColor="#000000"
let ThemeProvider=({children})=>{
    return(
        <ThemeContext.Provider value={{}}>
            {children}
        </ThemeContext.Provider>
    )
}
export {ThemeContext,ThemeProvider}