// This is about useParams() Hook in react-router-dom library..
// The useParams() Hook is use in Service.js File under Pages Folder..
//useParams() is use to accept the parameter which is passed in the url..

//This is about useLocation() Hook in react-router-dom library..
//The useLocation() Hook is use in About.js File under Pages Folder..
//useLocation() is use to send object which contain some data, without showing that data in url..


//This is about useHistory() Hook in react-router-dom library..
//The useHistory() is use in every file under Pages folder..
//The useHistory() is help to goback to the previous url or go forward which i already visited on next..(and other stuffs)


import React from 'react';
import {BrowserRouter , Switch , Route , Link} from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Service from './Pages/Service';
const Main = () =>{
    return(
        <BrowserRouter>
        <div>
            <header>
                <Link to='/'>Home</Link>
                <Link to={
                    {
                        pathname : '/about',
                        state:{
                            from: "root"
                        }
                    }
                }>About</Link>
                <Link to='/services/Nil Rajpurohit/4232'>Service</Link>
            </header>
            <div>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' exact component={About}/>
                    <Route path='/services/:any/:id' exact component={Service} />
                </Switch>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default Main;