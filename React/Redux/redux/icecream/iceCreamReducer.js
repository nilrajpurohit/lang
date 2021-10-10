const iceCreamState = {
    numOfIceCream : 20
}

export const iceCreamReducer = (state = iceCreamState , action)=>{
    switch(action.type){
        case 'Buy_IceCream' : return{
            numOfIceCream : state.numOfIceCream - 1
        }
        default : return state
    }
}
