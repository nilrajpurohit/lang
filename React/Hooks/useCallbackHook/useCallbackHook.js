import React, { useCallback, useState } from 'react'
import Count from './Count'
import Button from './Button'

const Example = () => {
    const [age , setAge] = useState(25)
    const [sal ,setSal] = useState(50000)

    const incrementAge = useCallback(() =>{
        return(
            setAge(age + 1)
        )
    }, [age]) 

    const incrementSal = useCallback(() => {
        return(
            setSal(sal + 1000) 
        )
    },[sal])

    return(
        <div>
            <Count count = {age} text="Age"/>
            <Button increment = {incrementAge} text="Age Button"/>
            <Count count = {sal} text="Salary"/>
            <Button increment = {incrementSal} text="Salary Button"/>
        </div>
    )
}
export default Example