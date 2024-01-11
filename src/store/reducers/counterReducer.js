const initialValue = {
  initCouter: 5,
  name:"CFD"
}
const counterReducer = (state = initialValue, action) => {
  // console.log("action",action)
    switch (action.type) {
      case "INCREMENT":
        return {...state,initCouter:state.initCouter + action.payload} ;   //lấy tất cả dữ liệu trong state (ở đây action là 1 object)
      case "DECREMENT":
        return {...state,initCouter:state.initCouter - action.payload} ;
      default:
        return state;
    }
  };
  
  export default counterReducer;