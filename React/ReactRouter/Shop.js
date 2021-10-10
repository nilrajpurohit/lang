import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function Shop() {
    const [items , setItems] = useState([])

    useEffect(()=>{
        fetchItems()
    })

    const fetchItems = async() =>{
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const items = await data.json()

        setItems(items)
    } 

    return (
        <div>
           <h2>Shop Page</h2>
           <div>
                {items.map((item) => <Link to={`/shop/${item.id}`} key={item.id} ><p>{item.id}  {item.title}</p></Link>)}
           </div>
        </div>
    )
}

export default Shop
