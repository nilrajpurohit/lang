import React from 'react';
import { useParams , useHistory , useRouteMatch} from 'react-router-dom';

const Service = () => {
    const {any , id} = useParams();
    const history = useHistory();
    const params = useRouteMatch();

    console.log(params);
    
    console.log(history);

    const goBack = () => {
        history.goBack();
    }
    const goFor = () => {
        history.goForward();
    }

    return(
       <div>
            <div>
                User : {any} <br/>
                Id : {id}
            </div>
            <div>
                <button onClick={goBack}>Go Back</button>
                <button onClick={goFor}>Go Forward</button>
            </div>
       </div>
    );
}

export default Service;