import React, { Component } from 'react'
//axios is an external library, to instll it:(npm install --save axios)..
import axios from 'axios'

export default class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts : [],
            error  : ''
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({posts : response.data})
        })
        .catch(error=>{
            console.log(error)
            this.setState({error : 'Error reterving data'})
        })
    }
    render() {
        const {posts , error} = this.state;
        return (
            <div>
                List of Posts

                {posts.length ? 
                posts.map((post)=> (<div key={post.id}>{post.title}</div>))
                : null}

                {error ? <div>{error}</div> : null}
            </div>
        )
    }
}
