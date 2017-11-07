import axios from "axios";

const cupcakesURL = "http://localhost:8000/order/"

// Actions
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const PLACE_ORDER = "PLACE_ORDER";

// Action Creators
export function addItem(cupcake, isReg) {
  return {
    type: ADD_ITEM,
    data: {
      cupcake,
      isReg
    }
  }
}

export function removeItem(cupcake) {
  return {
    type: REMOVE_ITEM,
    cupcake
  }
}

export function placeOrder(order) {
  return (dispatch) => {
    axios.post(cupcakesURL, order).then((response) => {
        dispatch({
          type: PLACE_ORDER,
          order: response.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}


// Reducer
const initialOrder = {
  items: []
}

export default function(prevOrder = initialOrder, action) {

  let newItemsArr = [...prevOrder.items];
  switch (action.type) {
    case ADD_ITEM:
      let newTotalCost = action.data.isReg ?
        prevOrder.totalCost + action.data.cupcake.price.regular :
        prevOrder.totalCost + action.data.cupcake.price.mini

      let cupcakeExistsInOrder = newItemsArr.some(item => item.cupcake === action.data.cupcake._id);

      if (!cupcakeExistsInOrder) {
        newItemsArr.push({
          quantity: {
            regular: 0,
            mini: 0
          },
          cupcake: action.data.cupcake._id
        })
      }

      newItemsArr = newItemsArr.map(item => {
        if (item.cupcake === action.data.cupcake._id) {
          action.data.isReg ? item.quantity.regular++ : item.quantity.mini++
        }
        return item;
      });

      return {
        totalCost: newTotalCost,
        items: newItemsArr
      }

    case REMOVE_ITEM:
      return prevOrder;

    case PLACE_ORDER:
      return prevOrder;

    default:
      return prevOrder
  }
}