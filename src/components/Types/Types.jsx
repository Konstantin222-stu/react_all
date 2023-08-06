import React, { useEffect, useState } from "react";
import "./types.css"

const Types = () => {
    const [select, setSelect] = useState('посты')
    const [count, setCount] = useState(null)

    useEffect(()=>{
        console.log('render')
    })

    useEffect(()=>{
        setSelect('пользователи')
        setCount(0)
    },[])

    useEffect(()=>{
        setCount(count+1)
        return() => {
            setCount(0)
        }
    },[select])



    return(
        <div className="types wrap">
            <div className="types__content">
                <h1 className="types__title">Выбрано: {select}</h1>
                <div className="types__btns">
                    <button onClick={()=>{setSelect('посты')}}>Посты</button>
                    <button onClick={()=>{setSelect('пользователи')}}>Пользователи</button>
                </div>
                <div className="types__change-count">
                    <h1 className="types__title">{count}</h1>
                </div>
            </div>
        </div>
    )
}

export default Types