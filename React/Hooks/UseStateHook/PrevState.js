//update state by prevstate value...
import React,{useState} from 'react'

const PrevState = () => {
    const initial = 0;
    const [count , setCount] = useState(initial)
    return(
    <div>
        <h1>{count}</h1>
        <button onClick={()=> setCount(prevState => prevState + 1)}>Increment</button>
        <button onClick={()=> setCount(prevState => prevState - 1)}>Decrement</button>
        <button onClick={()=> setCount(initial)}>Reset</button>
    </div>
    );
}
export default PrevState