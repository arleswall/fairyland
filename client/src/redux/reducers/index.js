import cupcakes from "./cupcakes";

let state = {
  cupcakes: [],
  order:{}
}

function reducer(prevState=state, action){
  return{
    cupcakes: cupcakes(prevState.cupcakes, action)
  }
}

export default reducer;