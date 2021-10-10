import {createStore , applyMiddleware} from 'redux'
import {combineReducers} from 'redux'
import {cakeReducer} from './cake/cakeReducer'
import {iceCreamReducer} from './icecream/iceCreamReducer'
import {userReducer} from './user/userReducer'
import {createLogger} from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const logger = createLogger()

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer,
    user : userReducer
})

export const store = createStore(rootReducer , composeWithDevTools(applyMiddleware(logger , thunk)))