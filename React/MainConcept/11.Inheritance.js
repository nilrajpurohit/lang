import React from 'react'

//how {props.children} work's like Inheritance..
function FancyBorder(props){
    return(
        <div className = {'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}
// export default function WelcomeDailog(){
//     return(
//         <FancyBorder color='blue'>
//         <h2 className="Dailog-title">Welcome</h2>
//         <p className="Dailog-message">Thank u for visiting</p>
//         </FancyBorder>
//     );
// }

function Dailog(props){
    return(
        <FancyBorder color="red">
            <h1 className="Dailog-title">{props.title}</h1>
        <p className="Dailog-message">{props.message}</p>
        {props.children}
        </FancyBorder>
    );
}

export default class SingUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {login : ''};
        this.Change = this.Change.bind(this);
        this.Submit = this.Submit.bind(this);
    }
    Change(e){
        this.setState({login : e.target.value});
    }
    Submit(e){
        alert(`Welcome aboard, ${this.state.login}`);
    }
    render(){
        return(
            //Inheriting the Component..
            <Dailog title="Mars Explotion Program" message="How should we refer to you?">
            <input type="text" value={this.state.login} onChange = {this.Change}/>
            <button type="Submit" onClick={this.Submit}>Submit</button>
            </Dailog>
        );
    }
}