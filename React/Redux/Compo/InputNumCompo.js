import React , {useState}from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/cake/cakeAction'

const InputNumCompo = (props) =>{
    const [num , setNum] = useState(1)
    return(
        <div>
            <h4>Number of Cake : {props.numOfCake}</h4>
            <input type='text' value={num} onChange={(e)=>setNum(e.target.value)}/>
            <button onClick={()=>props.buyCake(num)}>Buy Cake</button>
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
        buyCake : (num)=> dispatch(buyCake(num))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(InputNumCompo)
