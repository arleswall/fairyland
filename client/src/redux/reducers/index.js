import order from "./order";

let state = {
  currentOrder: []
}

function reducer(prevState=state, action){
  return{
    currentOrder: currentOrder(prevState.currentOrder, action)
  }
}

export default reducer;