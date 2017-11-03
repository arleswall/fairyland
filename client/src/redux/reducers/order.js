const currentOrder = function(prevOrder = [], action){
  let newOrder = [...prevOrder];
  switch(action.type){
    case "ADD_ORDER":
      newOrder.unshift(action.issue)
      return newOrder;
    
    case "LOAD_ORDERS":
      return action.currentOrder;
    
    case "DELETE_ORDER":
      return newOrder.filter((issue)=>{
        return action.id !== issue._id;
      })
    
    case "EDIT_ORDER":
      return newOrder.map((issue)=>{
        if(action.id === issue._id){
          return action.editedIssue;
        } else {
          return issue
        }
      });
      
    case "LIKES":
      return prevOrder.map(issue => {
        if (issue._id === action.editedIssue._id) {
          return action.editedIssue;
        }
        return issue;
      });
      
    case "DISLIKES":
    return prevOrder.map(issue => {
      if (issue._id === action.editedIssue._id) {
        return action.editedIssue;
      }
      return issue;
    });
      
    default:
      return prevOrder
  }
}

export default currentOrder;