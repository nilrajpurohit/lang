import React from 'react'

export default class EventHandle extends React.Component{
    constructor(props){
        super(props);
        //intializing the state by name isLog
        this.state = {isLog : false};

        //this is a binding the event function to work.
        this.Change = this.Change.bind(this);
    }

    //initializing function to call when the event will perform..
    Change(){
        this.setState({isLog : !this.state.isLog});
    }

    render(){
        return(
            //calling the function by event onClick..
        <button onClick = {this.Change}>{this.state.isLog ? 'LogOut' : 'LogIn'}</button>
        );
    }
}