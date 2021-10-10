import React from 'react'

//by function component..

export default function PassingProps(props){
    return(
        <div>
            <h1>This is '{props.name}' props</h1>
        </div>
    );
}

//by class Component..
// export default class PassingProps extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return(
//         <h1>This is '{this.props.name}' props</h1>
//         );
//     }
// }