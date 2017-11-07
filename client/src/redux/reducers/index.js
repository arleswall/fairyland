import cupcakes from "./cupcakes";
import order from "./cupcakes"

let state = {
  cupcakes: [],
  order:{}
}

function reducer(prevState=state, action){
  return{
    cupcakes: cupcakes(prevState.cupcakes, action),
    order: order(prevState.order, action)
  }
}

export default reducer;