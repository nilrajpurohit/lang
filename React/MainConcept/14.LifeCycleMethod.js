import React from 'react'

export default class MyApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : 0
        };
        this.setNewNumber = this.setNewNumber.bind(this);
    }

    setNewNumber(){
        this.setState({data : this.state.data + 1});
    }

    render(){
        return(
            <div>
                <button onClick={this.setNewNumber}>Increament</button>
                <Counter myNumber ={this.state.data}></Counter>
            </div>
        );
    }
}

class Counter extends React.Component{
    //before Rendering,on both side sever and client side..
    componentWillMount(){
        console.log('Component will mount');
    }
    //after first render only client side..
    componentDidMount(){
        console.log('Component did mount');
    }
    //invoke as soon as the props are updated before another render is called.
    componentWillReceiveProps(newProps){
        console.log('component will recive props');
    }
    //should return true or false.This will determine if the component will be updated or not.
    shouldComponentUpdate(newProps,newState){
        return true;
    }
    //is called just before rendering..
    componentWillUpdate(nextProps,nextState){
        console.log('component will update');
    }
    //is called just after rendering..
    componentDidUpdate(preProps,prevState){
        console.log('component did update');
    }
    //after the component is unmounted from the dom.
    componentWillUnmount(){
        console.log('component will Unmount');
    }

    render(){
        return(
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }

}