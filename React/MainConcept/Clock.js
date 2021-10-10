import React from 'react'
import ReactDOM from 'react-dom'

//Rendering by function

function Clock(props){
    return(
    <h4>{props.date.toLocaleTimeString()}</h4>
    );
}

export default function Clicking(){
    return(
        ReactDOM.render(
            <Clock date ={new Date()}/>,
            document.getElementById('root')
        )
    );
}

setInterval(Clicking,1000);

//Rendering by class..
// export default class Clock extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {date :new Date()};
//     }
//     componentDidMount(){
//         this.timer = setInterval(
//             ()=>this.clicking(),
//             1000
//         );
//     }
//     componentWillMount(){
//         clearInterval(this.timer);
//     }

//     clicking(){
//         this.setState({date : new Date()});
//     }

//     render(){
//         return(
//         <h4>{this.state.date.toLocaleTimeString()}</h4>
//         );
//     }
// }