import React,{useState} from 'react'

const StateWithArray =() =>{
    const [items,setItems] = useState([])
   const  addItem = () =>{
        setItems([... items , {id : items.length, value: Math.floor(Math.random() * 10)+1}])
    }
    return(
        <div>
            <button onClick={addItem}>Add Number</button>
        <ul>
            {items.map(item => <li id={item.id}>{item.value}</li>)}
        </ul>
        </div>
    );
}

export default StateWithArray;