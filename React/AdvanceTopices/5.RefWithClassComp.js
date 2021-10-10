import React from 'react'


class Input extends React.Component{
    constructor(props){
        super(props);
        //create a property and set the Ref by createReaf...
        this.inpRef = React.createRef()
    }
    focusInp(){
        this.inpRef.current.focus()
    }

    render(){
        return(
            <div>
                <input type="text" ref={this.inpRef}/>
            </div>
        )
    }
}


export default class ClassRef extends React.Component{
    constructor(props){
        super(props);
         //create a property and set the Ref by createReaf...
        this.compoRef = React.createRef()
        this.Click = this.Click.bind(this)
    }
    Click(){
        this.compoRef.current.focusInp()
    }

    render(){
        return(
            <div>
                {/* ref attach to the class Component to call the focusInp() in Input Component  */}
                <Input ref={this.compoRef}/>
                <button onClick={this.Click} >ClickToFocus</button>
            </div>
        )
    }
}
