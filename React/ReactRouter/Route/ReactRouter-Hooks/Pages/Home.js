import React from 'react'
import {useHistory} from 'react-router-dom'

function Home() {
    const history  = useHistory();

    const goBack = () => {
        history.goBack();
    }

    const goFor = () => {
        history.goForward();
    }

    return (
        <div>
            Home Page
            <button onClick={goBack}>Go Back</button>
            <button onClick={goFor}>Go Forward</button>
        </div>
    )
}

export default Home
