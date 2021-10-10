import React,{useState,useContext} from 'react'
import {MoviesList,NavBar} from './NavBar'
import {MoviesProvider} from './MoviesContext'


export default class Alldetails extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <MoviesProvider>
                <NavBar/>
                <MoviesList/>
            </MoviesProvider>
        );
    }
}