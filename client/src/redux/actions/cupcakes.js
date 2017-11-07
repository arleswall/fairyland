import axios from "axios";

const cupcakesURL = "http://localhost:8000/cupcake/"

export function addItem(cupcake, isReg){
  return {
    type: "ADD_ITEM",
    data: { cupcake, isReg }
  }
}
export function removeItem(cupcake){
  return {
    type: "REMOVE_ITEM",
    cupcake    
  }
}

export function placeOrder(order){
  return (dispatch)=>{
    axios.post(cupcakesURL, order).then((response)=>{
      dispatch({
        type: "PLACE_ORDER",
        order: response.data
      })
    })
    .catch((err)=>{
    console.log(err)
  })
  }
}

