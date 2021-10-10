import React from 'react'

//Importing the HightOrderComponent for take the ClickCounter Component as a Parameter...
import HighOrderComponent from './HighOrderComponent'

class ClickCounter extends React.Component{
    render(){
        const {counter,increament} = this.props
        return(
            //in this this.props.name is an external props from <ClickCounter name='nil' /> in App.js
        <button onClick = {increament}>{this.props.name} Click {counter} Times </button>
        )
    }
}

//exporting the ClickCounter Component but as a parameter...

//If we want the ClickCounter increament the counter by 5 then pass another parameter..
// and take that second parameter and use that in NewComponent
export default HighOrderComponent(ClickCounter,5)