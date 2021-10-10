import React from 'react'


//RenderProps means to use same functionality in multiple component by passing props as a function...
export class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {counter : 0};
        this.increment = this.increment.bind(this);
    }

    increment(){
        this.setState((prevState)=> ({counter : prevState.counter + 1}));
    }
    render() {
        return (
            <div>
              {this.props.thing(this.state.counter , this.increment)} 
            </div>
        )
    }
}


export class Click extends React.Component{
    render(){
        return(
        <button onClick={this.props.increment}>Click {this.props.count} times</button>
        );
    }
}


export function Hover(props){
    return(
            <div onMouseOver={props.increment}>
                Hover {props.count} Times
            </div>
    );
}