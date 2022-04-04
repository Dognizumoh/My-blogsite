import {createContext} from "react"

export const AboutContext = createContext();

function AboutContextProvider({children}){
const about = {
    name:"Ida Folo",
    hobbies:["Movies", "Dancing", "Music"],
    bio:"I am a System Administrator that likes networking. "
    
}

    return(
     <AboutContext.Provider value={{about}}>{children}</AboutContext.Provider>   
    )
}


export default AboutContextProvider