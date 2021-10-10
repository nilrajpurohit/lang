import React from 'react'

export default class RefsDemo extends React.Component{
    render(){
        return(
            <Example/>
        );
    }
}

//Ref are use to Set a refernce of a component...

//1 way to create ref is initial a property by using createRef() method...
// class Example extends React.Component{
//     constructor(props){
//         super(props);
//         //1st createRef..
//         this.Click = this.Click.bind(this)
//         this.inputRef = React.createRef()
//     }
//     componentDidMount(){
//         //It will autofocus the ref attribute in the input jsx tag..
//         this.inputRef.current.focus()
//     }

//     Click(){
//         //take the value from the ref attribute in jsx tag..
//         alert(this.inputRef.current.value);
//     }  
//     render(){
//         return(
//             <>  
//             {/* ref is an predefine attribute for jsx to attech  refs */}
//                 <input type ='text' ref={this.inputRef}/>
//                 <input type ='button' onClick={this.Click} value="click"/>
//             </>
//         );
//     }
// }



//2nd way to create ref using callback ref...
//1st create a property = null..
//2nd then create a method which assign that property by an element..

class Example extends React.Component{
    constructor(props){
        super(props);
        this.cbRef  = null;
        this.setCbRef = (element) => {
            this.cbRef = element
        }
        this.Click = this.Click.bind(this)
    }

    componentDidMount(){
        //callback ref return null if component unmount..
        //so first check the callback ref is empty or not..
        if(this.cbRef){
            //focus method is use to set the element focused for user...
            this.cbRef.focus()
        }
    }

Click(){
    alert(this.cbRef.value)
}

    render(){
        return(
            <>
            {/* this ref gonna take the input element refernce and set to the this.cbRef */}
            <input type ='text' ref={this.setCbRef}/>
            <input type ='button' onClick = {this.Click} value="click"/>
            </>
        )
    }
}