import React, { useCallback, useMemo, useState } from "react";
import GenerateCircle from "./GenerateCircle";
import "./circle.css"

const Circle = () => {
    const [colored, setColored] = useState(false)
    const [count, setCount] = useState(1)

    const generateCircle =  useCallback(() => {
        return new Array(count).fill('').map((_, i) => `Кружок № ${i}`)
    },[count])

    const styles = useMemo(() =>({
        color: colored ? 'orange' : 'pink'
    }))
    
    return(
        <div className="circle wrap">
            <div className="circle__content">
                <h1 style={styles}>Применение useCallback</h1>
                <button onClick={()=> setColored(!colored)}>Изменить цвет</button>
                <button onClick={()=>setCount(prev => prev + 1)}>Добавить кружок</button>
                <GenerateCircle getCount={generateCircle}/>
            </div>
        </div>
    )
}

export default Circle