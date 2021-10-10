import React,{useState,useEffect} from 'react'
import axios from 'axios';

const Main = () =>{
    const [post,setPost] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            console.log(res)
            setPost(res.data)
        })
        .catch((error)=>{
            console.log(error);
        }) 
    },[]);
    return(
        <div>
            Posts:
            <ul>{
                post.map(pos=><li key={pos.id}>{pos.title}</li>)}
            </ul>
        </div>
    );
}

export default Main