const cupcakes = function(prevOrder = {}, action){
  
let newItemsArr = [...prevOrder.items];
  switch(action.type){    
    case "ADD_ITEM":
    let newTotalCost = action.data.isReg ?
                       prevOrder.totalCost + action.data.cupcake.price.regular :
                       prevOrder.totalCost + action.data.cupcake.price.mini
    
    let cupcakeExistsInOrder = newItemsArr.some(item => item.cupcake === action.data.cupcake._id);
    
    if (!cupcakeExistsInOrder) {
      newItemsArr.push({
        quantity: {regular: 0, mini: 0},
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
  
    
    
    
    
    
    
    
    
    
    // return prevOrder.map(order =>{
    //   if (prevOrder.order.items.quantity.mini > 0 || prevOrder.order.items.quantity.regular > 0){
    //     if(action.isReg) {
    //       order.totalCost += action.cupcake.price.regular;
    //       order.item.quantity.regular++;
    //     } else {
    //       order.totalCost += action.cupcake.price.mini;
    //       order.item.quantity.mini++
    //     }
    //   } else {
    //     if(action.isReg) {
    //       order.items.cupcake;
    //       order.totalCost += action.cupcake.price.regular;
    //       order.item.quantity.regular = 1;
    //     } else {
    //       order.items.cupcake;
    //       order.totalCost += action.cupcake.price.mini;
    //       order.item.quantity.mini = 1
    //     }
    //   }
    // })
    case "REMOVE_ITEM":
    return prevOrder;
    
    case "PLACE_ORDER":
    return prevOrder;
      
    default:
      return prevOrder
  }
}

export default cupcakes;