import React,{useState,useEffect} from 'react'

const Main = () =>{
    const [count,setCount] = useState(0);
    const [name,setName] = useState('');

    //second parameter is an conditional render or run useEffect Hook init..
    //[count] is an second parameter if count change the state then only the re-render will perform..
    useEffect((prevState)=>{
            console.log('useEffect run..')
            document.title = `click ${count}`
    },[count]
    );

    return(
        <div>
            <input type='text' onChange={(e)=>{setName(e.target.value)}}/>
            <button onClick={()=>setCount(count + 1)}>Click {count} times</button>
        </div>
    );
}
export default Main