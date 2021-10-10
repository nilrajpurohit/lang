import React from 'react'
import useCounter from './useCounter'
function CounterOne() {
    const [count , increment ,decrement , reset] = useCounter(0,5)
    return (
        
        <div>
            <p>{count}</p>
            <button onClick = {increment}>increment</button>
            <button onClick = {decrement}>decrement</button>
            <button onClick = {reset}>reset</button>
        </div>
    )
}

export default CounterOne
