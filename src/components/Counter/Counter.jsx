import React, { useState } from "react";
import './counter.css'

function randomCounter() {
    return Math.trunc(Math.random() * 10)
    
}

const Counter = () =>{
    const [counter, setCounter] = useState(()=>{ return randomCounter()})

    function increment() {
        setCounter(counter + 1)
    }

    function decrement() {
        setCounter(counter - 1)
    }

    function incrementTwo() {
        setCounter(prev => {
            return prev + 1
        })
        setCounter(prev => {
            return prev + 1
        })
    }



    return(
        <div className="counter wrap">
            <div className="counter__content">
                <h1 className="counter__title">Счетчик: {counter}</h1>
                <div className="counter__btns">
                    <button onClick={increment}>Добавить</button>
                    <button onClick={incrementTwo}>Добавить 2х</button>
                    <button onClick={decrement}>Уменьшить</button>
                </div>

            </div>
        </div>
    )
}

export default Counter