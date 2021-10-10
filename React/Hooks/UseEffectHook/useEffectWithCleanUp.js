import React ,{useState,useEffect} from 'react'

const Main = () =>{
    const [display ,setDisplay] = useState(false)
    return(
        <div>
            <button onClick={()=>setDisplay(!display)}>toggle</button>
            {display && <MouseMove/>}
        </div>
    );
}


const MouseMove = () =>{
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

     const logMouse = (e) =>{
         console.log('logMouse run.')
         setX(e.clientX)
         setY(e.clientY)
     }

    useEffect(()=>{
        console.log('useEffect called.')
        window.addEventListener('mousemove',logMouse);
        // this return method to unsubscribe or unmount the event from parent component..
        // if we will not unmount this event then it will become lick of memory..(it will still re-render the component)
        return(()=>{
        window.removeEventListener('mousemove',logMouse)
        })
    },[])

    return(
        <div>
            X - {x}<br/>
            Y - {y}
        </div>
    );
}

export default Main;