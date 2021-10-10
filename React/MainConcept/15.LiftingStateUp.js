import React from 'react'

//Lifting state from Calculate component..
// function Boiling(props){
//     if(props.value >= 100){
//         return <p>The water is boiled</p>;
//     }
//     return <p>The water is not boiled</p>;
// }

// export default class Calculate extends React.Component{
//     constructor(props){
//         super(props);
//         this.Change = this.Change.bind(this);
//         this.state = {temper : ''};
//     }
//     Change(event){
//         this.setState({temper : event.target.value});
//     }
//     render(){
//         const temper = this.state.temper;
//         return(
//             <form>
//                 <legend>
//                     <input type="number" value={temper} onChange = {this.Change}/>
//                     <Boiling value={parseFloat(temper)}/>
//                 </legend>
//             </form>
//         );
//     }
// }


//Adding second input field using single input feild in Component..
const scaleName = {c:'celsius',f:'fahrenheit'};
class Temper extends React.Component{
    constructor(props){
        super(props);
        this.Change = this.Change.bind(this);
        this.state = {temp : ''};
    }
    Change(e){
        this.setState({temp : e.target.value});
    }
    render(){
        const temp = this.state.temp;
        const scale = this.props.scale;
        return(
            <legend>
                Enter temperature in {scaleName[scale]}:<br/>
                <input type="number" value = {temp} onChange ={this.Change}/>
            </legend>
        );
    }
}

export default class Calculate extends React.Component{
    render(){
        return(
            <div>
                <Temper scale = "c"/>
                <Temper scale = "f"/>
            </div>
        );
    }
}
