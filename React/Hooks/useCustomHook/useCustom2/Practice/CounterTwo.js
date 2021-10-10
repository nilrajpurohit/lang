import React from 'react'
import useCounter from './useCounter'

function CounterTwo() {
    const [count , increment ,decrement , reset] = useCounter(10,10)
    return (
        <div>
            <p>{count}</p>
            <button onClick = {increment}>increment</button>
            <button onClick = {decrement}>decrement</button>
            <button onClick = {reset}>reset</button>
        </div>
    )
}

export default CounterTwo
