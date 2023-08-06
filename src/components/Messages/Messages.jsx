import React from "react";
import Message from "./Message";
import Content from "./Content";
import "./messages.css"
import { MessageProvider } from "./contextMessage";

const Messages = () =>{

    return(
        <MessageProvider>
            <div className="messages wrap">
                <div className="message__content">
                    <Message/>
                    <Content/>
                </div>
            </div>
        </MessageProvider>
    )
}

export default Messages