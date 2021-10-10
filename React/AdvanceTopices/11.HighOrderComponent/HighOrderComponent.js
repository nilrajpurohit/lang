import React from 'react'

//HighOrderComponent taking a Component as a Paramenter...
const HighOrderComponent = (OldComponent , IncreamentBy) => {

    //Create a newComponent for a same Logic build for multiple component..
    class NewComponent extends React.Component{
        constructor(props){
            super(props);
            this.state = {counter : 0};
        }

    //the logic which use by the multiple component...
        increament = () =>{
            this.setState((prevState) => {
                return {counter : prevState.counter + IncreamentBy}
            })
        }

//this gonna return component which taken as a parameter with props init... 
        render(){
            return <OldComponent 
                        counter = {this.state.counter} 
                        increament = {this.increament}
                        // if we want to add some other props then we should use of splitter opertor init
                        {...this.props}
                        //Now we add props externaly 
                    />
        }
    }

    //Returning the NewComponent...
    return NewComponent;
}

//Exporting the HightOrderComponent for take the Parameter init...
export default HighOrderComponent