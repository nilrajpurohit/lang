import { render } from '@testing-library/react';
import React from 'react'

//ways to destructing props by function component..
//1st way to destructing props..
// const Greet = (props) => {
//     return(
//         <div>Hello {props.name} as a {props.superHero}</div>
//     );
// }
// export default Greet;


//2nd way..
// const Greet = ({name,superHero}) => {
//     return(
//     <div>Hello {name} as a {superHero}</div>
//     );
// }
// export default Greet;

//3rd way..
// const Greet = (props) =>{
//     const {name,superHero} = props;
//     return(
//     <div>Hello {name} as a {superHero}</div>
//     );
// }
// export default Greet;


//destructing props by using Class component..
export default class Greet extends React.Component{
    constructor(props){
        super(props);
        this.state = { name1 : 'Peter', superHero1 : 'Spiderman' };
    }
    render(){
        //this is a props..
        const { name , superHero } = this.props;
        //same do for the state..
        const { name1 , superHero1 } = this.state;
        return(
        <div>
            {/* this is as a props.. */}
            <div>Welcome { name } as a { superHero }</div>

            {/* this is as a state.. */}
            <div>Welcome { name1 } as a { superHero1 }</div>
        </div>
        );
    }
}