import React from 'react'
import {Provider} from 'react-redux'
import CakeCompo from './Redux/Compo/CakeCompo'
import UserCompo from './Redux/Compo/UserCompo'
import HookCakeCompo from './Redux/Compo/HookCakeCompo'
import IceCreamCompo from './Redux/Compo/IceCreamCompo'
import InputNumCompo from './Redux/Compo/InputNumCompo'
import OwnPropsCompo from './Redux/Compo/OwnPropsCompo'
import {store} from './Redux/redux/store'

const App = () => {
    return(
        <Provider store={store}>
            <CakeCompo/>
            <HookCakeCompo />
            <IceCreamCompo />
            <InputNumCompo />

            <h1>With Addtion Parameter in mapStateToProps , mapDispatchToProps</h1>
            <OwnPropsCompo cake/>
            <OwnPropsCompo/>
            <h1>Async Action :</h1>
            <UserCompo />
        </Provider>
    )
}

export default App