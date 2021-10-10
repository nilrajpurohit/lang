const cakeState = {
    numOfCake : 10
}

export const cakeReducer =(state = cakeState, action) => {
    switch(action.type){
        case 'Buy_Cake': return{
            numOfCake : state.numOfCake - action.payload
        }
        default : return state
    }
}

