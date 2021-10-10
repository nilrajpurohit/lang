import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeAction'

const CakeCompo = (props) =>{
    return(
        <div>
            <h4>Number of Cake : {props.numOfCake}</h4>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}


const mapStateToProps = (state) => {
    return{
        numOfCake : state.cake.numOfCake
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buyCake : ()=> dispatch(buyCake())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(CakeCompo)
