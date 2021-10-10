// Prompt is an implicit Component which is use to show alertBox when the condition is true and we go to other url..
//Prompt take two props 1. when 2.message
// 'when' is use to when the alertBox show (it take the bool value, by function or variable its independent)
//'message' is use to show that message into the alertBox

import React, { useState } from 'react';
import { BrowserRouter, Link , Route, Switch ,Prompt } from 'react-router-dom';
import About from '../Pages/About';
import Home from '../Pages/Home';
import Service from '../Pages/Service';

const PromptCompo = () =>{
    const [name , setName] = useState('');
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
                    <Route path='/service/:any/:id' exact component={Service} />
                </Switch>
            </div>
            <div>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <Prompt
                when={!name}
                message="Are you sure you want to leave?" />
        </BrowserRouter>
    );
}

export default PromptCompo;