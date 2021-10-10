import React from 'react'

class Child extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            //Initializing the method..
            <button onClick={()=> this.props.greetHandler('Child Component')}>Greet</button>
        );
    }
}


//passing props to state..
export default class Greet extends React.Component{
    constructor(props){
        super(props);
        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(greetChild){
        alert(`Welcome ${this.props.name} from ${greetChild}`);
    }

    render(){
        return(
            // Calling a method as a prop..
            <Child greetHandler = {this.greetParent}/>
        );
    }
}