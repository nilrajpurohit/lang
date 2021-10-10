import React, { Component } from 'react'
import { createRef } from 'react'

export default class ForwardRef extends Component {
    constructor(props) {
        super(props)
        this.inputRef = createRef()
        this.Click = this.Click.bind(this)
    }

    Click(){
        this.inputRef.current.focus()
    }
    render() {
        return (
            <>  
                <InputRef ref = {this.inputRef}/> 
                <button onClick = {this.Click}>Focus</button> 
            </>
           
        )
    }
}


const InputRef = React.forwardRef((props,ref) =>{
    return(
        <input type ="text" ref={ref}/>
    )
});