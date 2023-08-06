import React, { useEffect, useMemo, useRef, useState } from "react";
import Button from "../UI/Button/Button";
import Time from "./Time";
import './stopwatch.css'
import { timeStopwatch } from "../computed";



const Stopwatch = () =>{
    
    const format = useRef('')
    let UPDATE_INTERVAL = 10;
    const [lap, setLap] = useState([])
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false)
    const timeRef = useRef(null);

    const start = () => {
        timeRef.current = setInterval(() => {
          setTime((prev) =>prev + 1);
        }, UPDATE_INTERVAL);
        setIsActive(true)
    }

    const pause = () =>{
        setIsActive(false)
        clearInterval(timeRef.current)
    }

    const reset = () => {
        setIsActive(false)
        clearInterval(timeRef.current)
        setTime(0)
        setLap([])
    }

    const text = useMemo(()=>{
        if(!time && !isActive) return 'Начать'
        if(!isActive && time) return 'Продолжить'
        return 'Пауза'
    },[isActive])

    const laps = () =>{
        console.log("Круг");
        setLap((prev) => [...prev, timeStopwatch(time,format)])
    }


    return(
        <div className="stopwatch wrap">
            <div className="stopwatch__conten">
                <Time time={timeStopwatch(time,format)}/>
                <div className="stopwatch__btns">
                    <Button onClick={isActive ? pause : start}>{text}</Button>
                    <Button disabled={!isActive && !time} onClick={reset}>Очистить</Button>
                    <Button disabled={!isActive} onClick={laps}>Круг</Button>
                </div>
                <div className="stopwatch__laps">
                {lap.map(i => <div className="stopwatch__lap" key={i}>{i}</div>)}
                </div>
            </div>
        </div>
    )
}

export default Stopwatch