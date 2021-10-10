//MemoryRouter is work same as BrowserRouter but The MemoryRouter Doesn't show the url path..

import React from 'react';
import { Link, MemoryRouter, Route, Switch } from 'react-router-dom';
import About from '../Pages/About';
import Home from '../Pages/Home';
import Service from '../Pages/Service';

const MemoryRouterCompo = () =>{
    return(
        <MemoryRouter>
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
                    <Route path='/service/:any/:id' exact component={Service} />
                </Switch>
            </div>
        </MemoryRouter>
    );
}

export default MemoryRouterCompo;