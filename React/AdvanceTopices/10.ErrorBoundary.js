import React, { Component } from 'react'

//Error boundary is an component 
// which wrap around the other Component to check weather the child component is throw an error or not!...

export class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {hasError : false};
    }
    componentDidCatch(error,info){
        console.log(error);
        this.setState({hasError : true});
    }
    render() {
        if(this.state.hasError){
            return <h4>Error Caught!</h4>;
        }
        return this.props.children;
    }
}

//This component will throw error onClick event...
// (but the app will not crash because of error boundary)...

export class MyFirstComp extends Component {
    constructor(props){
        super(props);
        this.state = {error : false};
        this.Click = this.Click.bind(this);
    }

    Click(){
        this.setState({error : true});
    }
    render() {
        if(this.state.error){
            throw new Error('error throw');
        }
        return (
                <button onClick={()=> this.Click()}>Throw Error</button> 
           
        )
    }
}

//Second Component will work after the Error caught because of error boundary..

export class MySecondComp extends Component{
    constructor(props){
        super(props);
        this.state = {error : false};
    }
    render() {
        if(this.state.error){
            throw new Error('error throw');
        }
        return (
                <h5>This Component still work! The app is not crash because of error boundary</h5>
        )
    }

}



