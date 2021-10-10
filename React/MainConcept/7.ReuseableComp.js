import React from 'react'

class Reuse extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <h4>My name is {this.props.name}</h4>
        );
    }
}

export default class Example extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Reuse name="Nil"/>
                <Reuse name="Nikul"/>
                <Reuse name="Hemant"/>
            </div>
        );
    }
}