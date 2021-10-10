import React from 'react'
import MemoComp from './3.Memo'

// class Parent extends React.Component{
//     render(){
//         console.log('Parent Component');
//         return(
//         <div>{this.props.name}</div>
//         )
//     }
// }

// //Pure Component will not re-Render if the prev state and new state is equal value..
// class PureComp extends React.PureComponent{
//     render(){
//         console.log('Pure Component');
//         return(
//         <div>{this.props.name}</div>
//         )
//     }
// }

// export default class Child extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {name : 'nil'};
//     }
//     componentDidMount(){
//         setInterval(
//             ()=>{
//                 this.setState({name :'nil'});
//             },2000
//         );
//     }
//     render(){
//         console.log('Child Component');
//         return(
//             <div>
//                 <div>{this.state.name}</div>
//                 <Parent name={this.state.name}/>
//                 <PureComp name={this.state.name}/>
//             </div>
//         )
//     }
// }




//Memo component for function component...
export default class MemoParent extends React.Component{
    constructor(props){
        super(props);
        this.state = {name :'nil'};
    }
    componentDidMount(){
        setInterval(()=>this.setState({name : 'nil'}),2000);
    }
    render(){
        console.log('Parent Component');
        return(
            <div>
                <div>{this.state.name}</div>
                {/* This memo Will not render because the prev state value and new state value is same */}
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}