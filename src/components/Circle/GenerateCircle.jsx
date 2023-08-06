import React, { useEffect, useState } from "react";

const GenerateCircle = ({getCount}) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        console.log('Создан новый кружок')
        const newItems = getCount
        setItems(newItems)
    },[getCount])

    return(
        <div className="circle__generate">
            {items.map(i => <div key={i} className="circle__card"><div className="circle__circle" ></div><span className="circle__title">{i}</span></div>)}
        </div>
    )
}

export default GenerateCircle