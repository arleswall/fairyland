import axios from "axios";

const cupcakeURL = "http://localhost:8000/cupcake/"

export function loadOrders(){
  return(dispatch)=>{
    axios.get(cupcakeURL).then((response)=>{
      dispatch({
        type: "LOAD_ORDERS",
        issues: response.data
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}

export function addOrder(issue){
  return (dispatch)=>{
    axios.post(cupcakeURL, issue).then((response)=>{
      dispatch({
        type: "ADD_ORDER",
        issue: response.data
      })
    })
  }
}

export function deleteOrder(id){
  return (dispatch)=>{
    axios.delete(cupcakeURL+id).then((response)=>{
      dispatch({
        type: "DELETE_ORDER",
        id
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}

export function editOrder(id, editedOrder){
  return (dispatch)=>{
    axios.put(cupcakeURL+id, editedOrder).then((response)=>{
      dispatch({
        type: "EDIT_ORDER",
        editedOrder: response.data,
        id
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}

export function likes(issue){
  const update = {likes: issue.likes + 1}
  return (dispatch)=>{
    axios.put(cupcakeURL+issue._id, update).then((response)=>{
      dispatch({
        type: "LIKES",
        editedOrder: response.data
      });
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}

export function dislikes(issue){
  const update = {dislikes: issue.dislikes + 1}
  return (dispatch)=>{
    axios.put(cupcakeURL+issue._id, update).then((response)=>{
      dispatch({
        type: "DISLIKES",
        editedOrder: response.data
      });
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}


