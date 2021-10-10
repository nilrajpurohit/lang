//useMemo for avoid Late Render of other component cause of return value by a function..

import React, { useState, useMemo } from 'react'

const Counter = () =>{
    const [counterOne , setCounterOne] = useState(0)
    const [counterTwo , setCounterTwo] = useState(0)

   
    const isEven = useMemo(() => {
        let i = 0 
        while(i < 2000000000) i++;
        return counterOne % 2 === 0
    },[counterOne])

    return(
        <div>
            <div>
                <button onClick={()=>setCounterOne(counterOne + 1)}>Count One - {counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
           <div>
                <button onClick={()=>setCounterTwo(counterTwo + 1)}>Count Two - {counterTwo}</button>
           </div>
        </div>
    )
}

export default Counter