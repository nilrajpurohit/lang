import React from 'react'

export default class StateExample extends React.Component{
    constructor(props){
        super(props);
        this.state ={ name:'This is State declared within constructor '};
    }
    render(){
        return(
            <div>
                {/* to class a state use this object */}
                {this.state.name}
            </div>
        );
    }
}