import React from 'react'

//Controlled Component..
// export default class FormInput extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {value: ''};
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(event){
//         this.setState({value : event.target.value});
//     }

//     handleSubmit(event){
//         alert('A submited value is: '+ this.state.value);
//         event.preventDefault();
//     }

//     render(){
//         return(
//             <form onSubmit ={this.handleSubmit}>
//                 <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 <input type="submit" value="Submit"/>
//             </form>
//         );
//     }
// }

//props,form select tag...
// export default class FormInput extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {value : 'vanila'};
//         this.changed = this.changed.bind(this);
//         this.submited = this.submited.bind(this);
//     }

//     changed(event){
//         this.setState({value : event.target.value});
//     }
//     submited(event){
//         alert(this.state.value);
//         event.preventDefault();
//     }
//     render(){
//         return(
//             <form onSubmit = {this.submited}>
//                 <select value={this.state.value} onChange ={this.changed}>
//                     <option value="milk">milk</option>
//                     <option value="vanila">vanila</option>
//                     <option value="coconut">coconut</option>
//                     <option value="choclate">choclate</option>
//                 </select>
//                 <input type="submit" value='submit'/>
//             </form>
//         );
//     }
// }

//Conditional form Target..
export default class FormInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isGoing : true,
            numberOfGuest : 2,
        };
        this.Changed = this.Changed.bind(this);
    }
    Changed(event){
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value });
     }
    render(){
        return(
            <form>
                <label>
                    Is Gonig:
                    <input type="checkbox" name="isGoing" checked={this.isGoing} onChange = {this.Changed}/>
                </label><br/>
                <label>
                    Number of Guest:
                        <input type="number" name="numberOfGuest" value ={this.numberOfGuest} onChange = {this.Changed}/>
                </label>
            </form>
        );
    }
}