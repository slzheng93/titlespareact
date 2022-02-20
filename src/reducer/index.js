export const changeResult = (number) =>{
    return {type:"CHANGE_RESULT",payload:number};
}
const initialState = {
    numResult:0
}
// I am creating this reducer for the store. To know 
// how to update the state of the application.
// (based on the action obj we received, we check the type
// property to determine how we should update the app state）
// And we will pass the store as an attribute for the Provider 
// so that the children component will be able to access the 
// application state using connect.
const reducer = (state=initialState, action)=>{
    switch(action.type){
        case "CHANGE_RESULT":{
            return{
                ...state,
                numResult:action.payload
            }
        }
        default:
            return state;
    }
}

export default reducer;