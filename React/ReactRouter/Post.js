import React , {useState , useEffect}from 'react'

function Post({match}) {

    const [item , setItem] = useState({})

    useEffect(()=>{
        fetchPostById();
    },[])

    const fetchPostById = async() => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.any}`)
        const item = await data.json()
        console.log(item)
        setItem(item)
    }
    return (
        <div>
            <pre>Title : </pre> <p>{item.title}</p>
            <pre>Body : </pre><p>{item.body}</p>
        </div>
    )
}

export default Post
