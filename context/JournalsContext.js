import { createContext, useState  } from "react";

export const JournalsContext = createContext()

export const JournalsProvider = ({children})=>{
    const [journals, setJournals] = useState(true)

    const fetchJournals = ()=>{
        
    }

    return(
        <JournalsContext.Provider value={{journals, fetchJournals}}>
            {children}
        </JournalsContext.Provider>
    )
}
