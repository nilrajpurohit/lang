import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeAction'
import { buyIceCream } from '../redux/icecream/iceCreamAction'

const OwnPropsCompo = (props) =>{
    return(
        <div>
            <h4>Number of Cake : {props.numOfCake}</h4>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}


const mapStateToProps = (state ,ownProps ) => {
    const cakeState = ownProps.cake ? state.cake.numOfCake : state.iceCream.numOfIceCream
    return{
        numOfCake : cakeState
    }
}

const mapDispatchToProps = (dispatch , ownProps) => {
    const buyState = ownProps.cake ? buyCake() : buyIceCream()
    return{
        buyCake : ()=> dispatch(buyState)
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(OwnPropsCompo)
