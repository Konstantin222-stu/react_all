import React from "react";
import { useMessage } from "./contextMessage";

const Content = () =>{
    const {toggle} = useMessage()
    return(
        <>
            <h1 className="messages__title">Использование useContext</h1>
            <button className="messages__btn" onClick={toggle}>Показать сообщение</button>
        </>
    )
}

export default Content