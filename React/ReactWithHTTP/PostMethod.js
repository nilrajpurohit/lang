import React from 'react'
import axios from 'axios'

export default class PostPost extends React.Component{
    constructor(props){
        super(props);
        this.state = {userid : '',
                    title : '',
                    body : ''}
        this.Change = this.Change.bind(this);
        this.Submit = this.Submit.bind(this);
    }
    Submit = (e) =>{
        e.preventDefault();
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    Change = (e) => this.setState({[e.target.name] : e.target.value});
    render(){
        const {userid , title, body} = this.state;
        return(
            <form onSubmit={this.Submit}>
                <input type='text' name='userid' value={userid} onChange={this.Change} /><br/>
                <input type='text' name='title'  value={title}  onChange={this.Change}/><br/>
                <input  type='body' name='body'   value={body} onChange={this.Change}/><br/>
                <input type='submit' name='submit'/>
            </form>
        )
    }
}
