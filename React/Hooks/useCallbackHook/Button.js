import React from 'react'

const Button = (props) =>{
    console.log(`Button - ${props.text}`)
    return(
    <button onClick = {props.increment}>{props.text}</button>
    )
}

export default React.memo(Button)