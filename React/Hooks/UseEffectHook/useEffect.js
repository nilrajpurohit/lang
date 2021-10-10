import React,{useState,useEffect}from 'react'

const StateEffect = () =>{
    const [count,setCount] = useState(0)
    //useEffect run or call after every single render..
    useEffect(()=>{
        document.title = `Click ${count}`;
    });
    return(
        <div>
            <button onClick={()=>setCount(count + 1)}>Click {count}</button>
        </div>
    );
}

export default StateEffect;