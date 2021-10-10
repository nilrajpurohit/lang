import React from 'react'

const Count = (props) =>{
    console.log(`${props.text}`)
    return(
    <h4>{props.count}</h4>
    )
}

export default React.memo(Count)