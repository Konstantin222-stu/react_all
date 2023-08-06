import React from "react";
import { useMessage } from "./contextMessage";

const Message = () =>{
    const message = useMessage()

    if(!message.visible) return null

    return(
        
        <div className="messages__message" onClick={message.toggle}>
            <h1>Сообщение через контекст</h1>
        </div>
    )
}

export default Message