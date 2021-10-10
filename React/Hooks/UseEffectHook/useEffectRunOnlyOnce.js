import React,{useState,useEffect} from 'react'

const Main = () =>{
    const[x,setX] = useState(0);
    const [y,setY] = useState(0);

    const logMousePosition = e =>{
        console.log('moveEffect run.');
        setX(e.clientX)
        setY(e.clientY)
    }
//using useEffect to declare the event..
//second parameter is an array in useEffect..
//that parameter will decide that on which state change then re-render..
//if the second parameter is an empty array then only once useEffect will run, at the time of intialize..
    useEffect(()=>{
        console.log('useEffect called.');
        window.addEventListener('mousemove',logMousePosition);
    },[])
    return(
        <div>
            X - {x}  <br/> Y - {y}
        </div>
    )
}

export default Main