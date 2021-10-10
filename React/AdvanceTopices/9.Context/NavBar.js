import React, { useContext } from 'react'
import {MoviesContext} from './MoviesContext'


export function NavBar(){
    const [movies,setMovies] = useContext(MoviesContext)
    return(
        <div>
            <h4>user : Nil rajpurohit</h4>
            <h6>Total Movies : {movies.length}</h6>
        </div>
    );
}

 function Movie({name,price}){
     return(
         <div>
            <h5>{name}</h5>
            <p>{price}</p>
         </div>
     )
 }

 export function MoviesList(){
      const [movies,setMovies] = useContext(MoviesContext)
      return(
          <div>
             {movies.map(movie => (
                 <Movie name={movie.name} price={movie.price} />
             ))}
          </div>
      )
 }