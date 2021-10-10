import React, {useContext} from 'react'
import {CountContext} from './Practice'

const CompoD = () =>{
    const countContext= useContext(CountContext)
    return(
        <div>
            <button onClick = {()=>countContext.dispatch('increment')}>increment</button>
            <button onClick = {()=>countContext.dispatch('decrement')}>decrement</button>
            <button onClick = {()=>countContext.dispatch('reset')}>reset</button>
        </div>
    )
}
export default CompoD