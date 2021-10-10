import React from 'react'
//Importing the HightOrderComponent for take the MouseOver Component as a Parameter...
import HighOrderComponent from './HighOrderComponent'

class MouseOverCounter extends React.Component{
    render(){
        const {counter , increament} = this.props
        return(
        <div onMouseOver = {increament}> MoverOver {counter} Times</div>
        )
    }
}
//exporting MouseOver Component as a parameter...
//If we want the MouseOverCounter increament the counter by 10 then pass another parameter..
// and take that second parameter and use that in NewComponent
export default HighOrderComponent(MouseOverCounter , 10)