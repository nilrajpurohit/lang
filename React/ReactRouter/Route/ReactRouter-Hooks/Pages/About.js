import React from 'react';
import {useLocation , useHistory} from 'react-router-dom';

function About() {
    const location = useLocation();
    const history = useHistory();

    console.log(location);
    console.log(history);

    const goBack = () =>{
        history.goBack();
    }

    const goFor = () => {
        history.goForward();
    }

    return (
        <div>
            <h2>About Page</h2>
            <p>
                Location : {location.pathname} <br/>
                From : {location.state.from}
            </p>  

            <button onClick={goBack}>Go Back</button> 
            <button onClick={goFor}>Go Forward</button> 
        </div>
    );
}

export default About;
