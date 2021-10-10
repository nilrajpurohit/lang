import React, { useState } from 'react'

function useCounter(initiale = 0 , value) {
    const [count ,setCount] = useState(initiale)

    const increment = () => {
        setCount(count + value)
    }

    const decrement = () => {
        setCount(count - value)
    }

    const reset = () => {
        setCount(initiale)
    }

    return [count , increment ,decrement ,reset]
}

export default useCounter
