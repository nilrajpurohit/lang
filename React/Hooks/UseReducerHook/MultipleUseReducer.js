//Multiple useReducer is use for avoid complex state managment..
//Its Handle the single state or value by multiple useReducer..

import React, { useReducer } from 'react'

const initiale = 0
const reducer = (state , action) => {
    switch(action){
        case 'increment' : return state + 1
        case 'decrement' : return state - 1
        case 'reset' : return initiale
        default : return state
    }
}

const Counter = () =>{
    const [count , dispatch] = useReducer(reducer , initiale)
    const [countTwo ,dispatchTwo] = useReducer(reducer , initiale)
    return(
        <div>
            <div>
                <p>{count}</p>
                <button onClick = {()=>dispatch('increment')}>increment</button>
                <button onClick = {()=>dispatch('decrement')}>decrement</button>
                <button onClick = {()=>dispatch('reset')}>reset</button>
            </div>

            <div>
                <p>{countTwo}</p>
                <button onClick = {()=>dispatchTwo('increment')}>increment</button>
                <button onClick = {()=>dispatchTwo('decrement')}>decrement</button>
                <button onClick = {()=>dispatchTwo('reset')}>reset</button>
            </div>
        </div>
    ) 
}
export default Counter