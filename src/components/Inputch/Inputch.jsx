import React, { useEffect, useRef, useState } from "react";
import "./inputch.css"

const Inputch = () =>{
    const [value, setValue] = useState('0')
    const inputRef = useRef(null)
    const count = useRef(1)
    const prevValue = useRef('')

    useEffect(() => {
        count.current ++
    })

    useEffect(()=>{
        prevValue.current = value
    },[value])

    const changeColor = () => { inputRef.current.style.color = 'red'}

    return(
        <div className="inputch wrap">
            <div className="inputch__content">
                <h1 className="inputch__title">Рендер компонента: {count.current}</h1>
                <h1 className="inputch__title">Значение input: {value}</h1>
                <h1 className="inputch__title">Значение предыдущего input: {prevValue.current}</h1>
                <input onChange={e=> setValue(e.target.value)} value={value} type="text" ref={inputRef} />
                <button onClick={changeColor}>Изменить цвет</button>
            </div>
        </div>
    )
}

export default Inputch

