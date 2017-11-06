import axios from "axios";

const cupcakesURL = "http://localhost:8000/cupcake/"



export function addItem(cupcake){
  const update = {quantity: {regular: cupcake.quantity.regular + 1}}
  return (dispatch)=>{
    axios.put(cupcakesURL+cupcake._id, update).then((response)=>{
      dispatch({
        type: "ADD_ITEM",
        cupcakes: response.data
      });
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}
export function removeItem(cupcake){
  const update = {quantity: {regular: cupcake.quantity.regular - 1}}
  return (dispatch)=>{
    axios.put(cupcakesURL+cupcake._id, update).then((response)=>{
      dispatch({
        type: "REMOVE_ITEM",
        cupcakes: response.data
      });
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}

export function addMini(cupcake){
  const update = {quantity: {mini: cupcake.quantity.mini + 1}}
  return (dispatch)=>{
    axios.put(cupcakesURL+cupcake._id, update).then((response)=>{
      dispatch({
        type: "ADD_MINI",
        cupcakes: response.data
      });
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}
export function removeMini(cupcake){
  const update = {quantity: {mini: cupcake.quantity.mini - 1}}
  return (dispatch)=>{
    axios.put(cupcakesURL+cupcake._id, update).then((response)=>{
      dispatch({
        type: "REMOVE_MINI",
        cupcakes: response.data
      });
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}


