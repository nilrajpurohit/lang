import React from 'react'
import {buyIceCream} from '../redux/icecream/iceCreamAction'
import {useSelector , useDispatch} from 'react-redux'

const IceCreamCompo = () =>{
    const numberOfIceCream = useSelector(state => state.iceCream.numOfIceCream)

    const dispatch = useDispatch()
    return(
        <div>
            <h4>Number of IceCream : {numberOfIceCream} </h4>
            <button onClick={()=>dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
    )
}

export default IceCreamCompo