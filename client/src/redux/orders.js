
// Actions
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

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

export function removeItem(cupcake, size) {
  return {
    type: REMOVE_ITEM,
    data: {
      cupcake,
      size
    }
  }
}



// Reducer
const initialOrder = {
  items: [],
  totalCost: 0
}

export default function(prevOrder = initialOrder, action) {

  let newItemsArr = [...prevOrder.items];
  let newTotalCost = prevOrder.totalCost;
  switch (action.type) {
    case ADD_ITEM:
      newTotalCost += action.data.cupcake.price[action.data.size]

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

      newItemsArr = newItemsArr
      .map(item => {
        if (item.cupcake === action.data.cupcake._id && item.quantity[action.data.size] !== 0) {
          item.quantity[action.data.size]--;
          newTotalCost -= action.data.cupcake.price[action.data.size]
        }
        return item;
      })
      .filter(item => item.quantity.regular !== 0 || item.quantity.mini !== 0);

      return {
        totalCost: newTotalCost,
        items: newItemsArr
      }
    default:
      return prevOrder
  }
}