const dogReducer = (state = null, action) =>{
    switch (action.type) {
        case "UPLOAD_DOG":
            
            return action.payload
    
        default:
            return state
}
}
export default dogReducer;