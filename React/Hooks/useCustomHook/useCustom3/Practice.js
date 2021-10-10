import React from 'react'
import useInput from './useInput'

const Example = () => {
    const [valueFirstName , bindFirstName , resetFirstName] = useInput('')
    const [valueLastName , bindLastName , resetLastName] = useInput('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${valueFirstName} ${valueLastName}`)
        resetFirstName()
        resetLastName()
    }

    return(
       <form onSubmit={submitHandler}>
             <input type="text" {...bindFirstName} />
            <input type="text" {...bindLastName}/>
            <input type="submit"/>
       </form>
    )
}

export default Example