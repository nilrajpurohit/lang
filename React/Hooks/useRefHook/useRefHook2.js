import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
    const [timer , setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(()=>{
            setTimer((prevState) => prevState + 1)
        } , 1000)
    } , [])
    return(
        <div>
            Timer - {timer}
            <br/>
            <button onClick = {()=>clearInterval(intervalRef.current)}>Clear Timer</button>
        </div>
    )
}

export default Timer