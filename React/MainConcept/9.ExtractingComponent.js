import React from 'react'


//Extracting Component means breakdown the big component into multi subcomponents..
class BookHeader extends React.Component{
    render(){
        return(
        <h3>{this.props.bookHead}</h3>
        );
    }
}

class BookImg extends React.Component{
    render(){
        return(
            <img src={this.props.bookImg} />
        );
    }
}

class BookBody extends React.Component{
    render(){
        return(
        <p>{this.props.bookBody}</p>
        );
    }
}

class BookPrice extends React.Component{
    render(){
        return(
        <span>${this.props.priceInDollar}</span>
        );
    }
}

export default class Book extends React.Component{
    render(){
        return(
            <div>
                <BookHeader bookHead="React"/>
                <BookImg bookImg={this.props.img}/>
                <BookBody bookBody='Welcome to the React.  
                                    React is an javascript frontend framework.
                                    React is an Small Scale library framework'/>
                <BookPrice priceInDollar ={18.59}/>
            </div>
        );
    }
}