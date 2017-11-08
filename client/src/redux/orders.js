import axios from "axios";

const cupcakesURL = "http://localhost:8000/order/"

// Actions
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const PLACE_ORDER = "PLACE_ORDER";

// Action Creators
export function addItem(cupcake, size) {
  return {
    type: ADD_ITEM,
    data: {
      cupcake,
      size
    }
  }
}

export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    id
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
  items: [],
  totalCost: 0
}

export default function(prevOrder = initialOrder, action) {

  let newItemsArr = [...prevOrder.items];
  switch (action.type) {
    case ADD_ITEM:
      let newTotalCost = action.data.size === "regular" ?
        prevOrder.totalCost + action.data.cupcake.price.regular :
        prevOrder.totalCost + action.data.cupcake.price.mini

      let cupcakeExistsInOrder = newItemsArr.some(item => item.cupcake === action.data.cupcake._id);

      if (!cupcakeExistsInOrder) {
        newItemsArr.push({
          quantity: {
            regular: 0,
            mini: 0
          },
          cupcake: action.data.cupcake._id,
          cupcakeForOrderDisplay: action.data.cupcake
        })
      }

      newItemsArr = newItemsArr.map(item => {
        if (item.cupcake === action.data.cupcake._id) {
          item.quantity[action.data.size]++
        }
        return item;
      });

      return {
        totalCost: newTotalCost,
        items: newItemsArr
      }

    case REMOVE_ITEM:
    return newItemsArr.filter(item =>{
      return item.cupcake !== action.id;
    })

    case PLACE_ORDER:
      return prevOrder;

    default:
      return prevOrder
  }
}