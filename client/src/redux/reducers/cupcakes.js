const cupcakes = function(prevCupcakes = [], action){
  let newCupcakes = [...prevCupcakes];
  console.log(newCupcakes);
  switch(action.type){
      
    case "ADD_ITEM":
      return prevCupcakes.map(cupcake => {
        if (cupcake._id === action.cupcake._id) {
          return action.cupcake;
        }
        return cupcake;
      });
    case "REMOVE_ITEM":
      return prevCupcakes.map(cupcake => {
        if (cupcake._id === action.cupcake._id) {
          return action.cupcake;
        }
        return cupcake;
      });
      
    case "ADD_MINI":
    return prevCupcakes.map(cupcake => {
      if (cupcake._id === action.cupcake._id) {
        return action.cupcake;
      }
      return cupcake;
    });
    case "REMOVE_MINI":
    return prevCupcakes.map(cupcake => {
      if (cupcake._id === action.cupcake._id) {
        return action.cupcake;
      }
      return cupcake;
    });
      
    default:
      return prevCupcakes
  }
}

export default cupcakes;