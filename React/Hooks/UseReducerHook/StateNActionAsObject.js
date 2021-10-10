import React,{useReducer} from 'react'
import { act } from 'react-dom/test-utils'

const initiale = {
    firstCount : 0,
    secondCount : 10,
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'increment':
            return {... state, firstCount: state.firstCount + action.value}
        case 'decrement':
            return {... state, firstCount: state.firstCount - action.value}
        case 'increment5': 
            return {... state, secondCount: state.secondCount + action.value}
        case 'decrement5':
            return{... state, secondCount: state.secondCount - action.value}
        case 'reset1': 
            return {...state, firstCount: initiale.firstCount}
        case 'reset2': 
            return {... state, secondCount: initiale.secondCount}
        default: 
            return state;
    }
}

const Main = () =>{
    const [count, dispatch] = useReducer(reducer,initiale)
    return(
        <div>
            <div>
                <h3>{count.firstCount}</h3>
                <button onClick={()=>dispatch({type: 'increment',value : 1})}>Increment</button>
                <button onClick={()=>dispatch({type : 'decrement', value: 1})}>Decrement</button>
                <button onClick={()=>dispatch({type: 'reset1'})}>Reset</button>
            <h3>{count.secondCount}</h3>
                <button onClick={()=>dispatch({type: 'increment5', value: 5})}>Increment5</button>
                <button onClick={()=>dispatch({type : 'decrement5', value:5})}>Decrement5</button>
                <button onClick={()=>dispatch({type: 'reset2'})}>Reset</button>
            </div>
        </div>
    )
}

export default Main;