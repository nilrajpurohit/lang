import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {buyCake} from '../redux/cake/cakeAction'

const HookCakeCompo = (props) => {
    const numberOfCake = useSelector(state => state.cake.numOfCake)
    const dispatch = useDispatch()
    return(
        <div>
            <h4>Number of Cake : {numberOfCake}</h4>
            <button onClick={()=>dispatch(buyCake())}>Buy HookCake</button>
        </div>
    )
}

export default HookCakeCompo