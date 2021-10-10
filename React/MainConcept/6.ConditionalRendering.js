import React from 'react'

export default class ConditionalRender extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.temp >=100 ){
            return <div>The water is boiled</div>
        }else{
            return <div>Water is not boiled</div>
        }
    }
}