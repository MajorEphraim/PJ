import { createContext, useState  } from "react";

export const SettingsContext = createContext()

export const SettingsProvider = ({children})=>{
    const [firstTime, setFirstTime] = useState(false)

    const updateFirstTime = ()=>{

    }
    return(
        <SettingsContext.Provider value={{firstTime}}>
            {children}
        </SettingsContext.Provider>
    )
}
