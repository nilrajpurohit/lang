import React,{useContext} from 'react'
import {channelContext,userContext} from './Data'

const CompB = () =>{
    const channel = useContext(channelContext);
    const user = useContext(userContext);
    return(
    <div>
        <h1>{user}</h1>
        <h1>{channel}</h1>
    </div>
    )
}

export default CompB;