import React,{useRef,useEffect} from 'react'

const FormInput = () => {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }) 
    
    return(
        <input ref={inputRef} type='text'/>
    )
}

export default FormInput