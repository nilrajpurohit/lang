import React from 'react'
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import Home from './ReactRouter/Home'
import Shop from './ReactRouter/Shop'
import About from './ReactRouter/About'
import Nav from './ReactRouter/Nav'
import Post from './ReactRouter/Post'

const App = () =>{
    return(
        <BrowserRouter>
           <Nav />
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/about' exact component={About} />
                <Route path='/shop' exact component={Shop}/>
                <Route path='/shop/:any' component={Post} />
            </Switch>
        </BrowserRouter>
    )
}

export default App