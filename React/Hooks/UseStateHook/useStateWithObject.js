import React,{useState}from 'react'

function UseStateObject() {
     const [name,setName] = useState({fname : '', lname : ''});
    return (
        <div>
            <input type='text' value={name.fname} onChange ={(e)=> setName({... name, fname : e.target.value})}/>
            <input type='text' value={name.lname} onChange={(e)=>setName({ ... name, lname : e.target.value})}/><br/>

            <p>First Name : {name.fname}</p>
            <p>Last Name : {name.lname}</p>
        </div>
    )
}

export default UseStateObject
