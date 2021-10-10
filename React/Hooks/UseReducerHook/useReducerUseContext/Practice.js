// useReducer with useContext is use for handle single state with multiple component i.e Global state management..

import React, { createContext , useReducer} from 'react'
import CompoA from './CompoA'
import CompoB from './CompoB'
import CompoC from './CompoC'
export const CountContext = createContext()

const initiale = 0
const reducer = (state , action) => {
    switch(action){
        case 'increment' : return state + 1
        case 'decrement' : return state - 1
        case 'reset' : return initiale
        default : return state
    }
}

export const Example = () =>{
    const [count , dispatch] = useReducer(reducer , initiale)
    return(
    <CountContext.Provider value = {{count : count , dispatch : dispatch}}>
        <h4>{count}</h4>
        <CompoA/>
        <CompoB/>
        <CompoC/>
    </CountContext.Provider>
    )
}