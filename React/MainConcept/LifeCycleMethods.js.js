import React from 'react'


export default class MountA extends React.Component{
//Chcek wich Mount lifecycle method run first..(also with child component).
    constructor(props){
        super(props);
        this.state = {name : 'nil'};
        this.Change = this.Change.bind(this);
        console.log('MountA constructor');
    }
    static getDerivedStateFromProps(props,state){
        console.log('MountA getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate(){
        console.log('MountA shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('MountA getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('MountA componentDidUpdate');
    }

    componentDidMount(){
        console.log('MountA componentDidMount');
    }

    Change(){
        this.setState({name : 'Rajpurohit'});
    }
    render(){
        console.log('MountA render');
        return(
            <>
            <div>Mount A...</div>
            <button onClick={this.Change}>Change</button><br/>
            <MountB/>
        </>
        );
    }
}




class MountB extends React.Component{

    constructor(props){
        super(props);
        this.state = {name : 'nil'};
        console.log('MountB constructor');
    }
    static getDerivedStateFromProps(props,state){
        console.log('MountB getDerivedStateFromProps');
        return null;
    }
    componentDidMount(){
        console.log('MountB componentDidMount');
    }
    shouldComponentUpdate(){
        console.log('MountB shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('MountB getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(){
        console.log('MountB componentDidUpdate');
    }
    render(){
        console.log('MountB render');
        return(
            <>
            Mount B...
        </>
        );
    }
}