import React from 'react'

// export default class ListMap extends React.Component{
//     render(){
//         const numbers=[1,2,3,4,5];
//         const Items = numbers.map((number)=><li>{number}</li>);
//         return(
//             <ul>{Items}</ul>
//         );
//     }
// }

// ListMap as props..
function ListItems(props){
    const numbers = props.numbers;
const Items = numbers.map((number) => <li>{number}</li>);
return(
<ul>{Items}</ul>
);
}

export default class ListMap extends React.Component{
    render(){
        return(
            <ListItems numbers ={this.props.numbers}/>
        );
    }
}