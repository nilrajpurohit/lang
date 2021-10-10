import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Main =() =>{
    const [post,setPost] = useState({});
    const [id , setId] = useState(1);
    const [idButton , setIdButton] = useState(1);

    const clickHandler = () =>{
        setIdButton(id);
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)
        .then((res)=>{
            console.log(res)
            setPost(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[idButton]);

    return(
        <div>
            <input type='text' value={id} onChange={(e)=>setId(e.target.value)}/>
            <button onClick={clickHandler}>Fetch Post</button>
            <div key={post.id}>{post.title}</div>
        </div>
    );
}

export default Main