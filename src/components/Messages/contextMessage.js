import React, { useContext, useState } from "react";

const ContextMessage = React.createContext()


export const useMessage = () =>{
    return useContext(ContextMessage)
}

export const MessageProvider = ({children}) =>{
    const [message, setMessage] = useState(false)
    const toggle = () => setMessage(prev => !prev)

    return(
        <ContextMessage.Provider value={{
            visible: message,
            toggle
        }}>
            {children}
        </ContextMessage.Provider>
    )
}