//Redirect is an implicit Component in react-router-dom
//Redirect is use to redirect to particular Page/Component

//Redirect used below in  Route Component's render props for service.

import React , {useState} from 'react';
import { Link, BrowserRouter, Route, Switch , Redirect} from 'react-router-dom';
import About from '../Pages/About';
import Home from '../Pages/Home';
import Service from '../Pages/Service';

const RedirectCompo = () =>{
    const [isLogIn , setIsLogIn] = useState(false);
    return(
        <BrowserRouter>
            <div>
                <Link to='/'>Home</Link>
                <Link to={
                    {
                        pathname : '/about',
                        state: {
                            from : 'root',
                        }
                    }
                }>About</Link>
                <Link to='/service/NilRajp/42' >Service</Link>
            </div>
            <div>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' exact component={About} />
                    <Route path='/service/:any/:id' exact render={()=>(
                        isLogIn ? (<Service />) : (<Redirect to='/' />)
                    )} />
                </Switch>
            </div>
            <div>
                <button onClick = {()=>setIsLogIn(prevState => !prevState)}>{isLogIn ? 'logOut' : 'logIN'}</button>
            </div>
        </BrowserRouter>
    );
}

export default RedirectCompo;