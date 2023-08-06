import React, { useEffect, useMemo, useState } from "react";
import "./circlech.css"
function Compute(num) {
    console.log("Расчет")
    // let i = 1
    // while(i<1000000000) i++
    return num * 2
}

const Circlech = () => {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)
    const computed = useMemo(()=>Compute(number),[number])

    const styles = useMemo(()=>({
        backgroundColor: colored ? 'blue' : 'yellow'
    }),[colored])

    useEffect(() => {
        console.log('Цвет изменен');
    },[styles])




    return(
        <div className="circlech wrap">
            <div className="circlech__content">
                <h1 className="circlech__title">Число: {computed}</h1>
                <div className="circlech__circle" style={styles}></div>
                <div className="circlech__btns">
                    <button onClick={()=> setNumber(prev => prev + 1)}>Добавить</button>
                    <button onClick={()=> setNumber(prev => prev - 1)}>Убавить</button>
                    <button onClick={()=> setColored(prev => !prev)}>Изменить цвет</button>
                </div>
            </div>
        </div>
    )
}

export default Circlech