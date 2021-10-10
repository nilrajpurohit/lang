import React,{useState,useContext} from 'react'
import { createContext } from 'react'

export const MoviesContext = createContext();

export const MoviesProvider = (props) =>{
    const [movies,setMovies] = useState([
        {
            name: 'Harry Potter',
            price:'10$',
            id : 1,
        },{
            name : 'The Conjuring',
            price : '15$',
            id : 2,
        },{
            name : 'Transformer',
            price : '8$',
            id : 3,
        },{
            name : 'Spiderman 2',
            price : '19$',
            id : 4,
        }
    ]);

    return(
        <MoviesContext.Provider value ={[movies,setMovies]}>
            {props.children}
        </MoviesContext.Provider>
    );
}
