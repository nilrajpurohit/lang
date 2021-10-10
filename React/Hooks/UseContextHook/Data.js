import React, { createContext } from 'react'
import CompA from './CompA'

export const userContext = createContext();
export const channelContext = createContext();
export function Data(){
    return(
        <div>
            <userContext.Provider value={'nil'}>
                <channelContext.Provider value={'ReactJS'}>
                        <CompA/>
                </channelContext.Provider>
            </userContext.Provider>
        </div>
    )
}