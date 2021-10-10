export const buyCake = (num = 1) =>{
    return{
        type : 'Buy_Cake',
        payload : num
    }
}