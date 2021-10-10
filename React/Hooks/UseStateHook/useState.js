import React,{useState} from 'react'

 const Main =()=>{
     //intinalized state and setState variables..
     const [count,setCount] = useState(0);
     return(
        // call setCount function by callback function in update count state..
        //(count is an state variable..)
     <button onClick={()=> setCount(count + 1)}>Click {count} times</button>
     );
 }
 //exporting the main component to App.js..
 export default Main;