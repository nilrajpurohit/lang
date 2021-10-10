import React , {useState} from 'react'
import useDocTitle from './useDocTitle' 

function DocTitleTwo() {
    const [count , setCount] = useState(0)

    useDocTitle(count)
    
    return (
        <div>
            <button onClick = {() => setCount(prevState => prevState + 1)}>Count - {count}</button>
        </div>
    )
}

export default DocTitleTwo
