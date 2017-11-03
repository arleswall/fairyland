const issues = function(prevIssues = [], action){
  let newIssues = [...prevIssues];
  console.log(newIssues);
  switch(action.type){
    case "ADD_ISSUE":
      newIssues.unshift(action.issue)
      return newIssues;
    
    case "LOAD_ISSUES":
      return action.issues;
    
    case "DELETE_ISSUE":
      return newIssues.filter((issue)=>{
        return action.id !== issue._id;
      })
    
    case "EDIT_ISSUE":
      return newIssues.map((issue)=>{
        if(action.id === issue._id){
          return action.editedIssue;
        } else {
          return issue
        }
      });
      
    case "LIKES":
      return prevIssues.map(issue => {
        if (issue._id === action.editedIssue._id) {
          return action.editedIssue;
        }
        return issue;
      });
      
    case "DISLIKES":
    return prevIssues.map(issue => {
      if (issue._id === action.editedIssue._id) {
        return action.editedIssue;
      }
      return issue;
    });
      
    default:
      return prevIssues
  }
}

export default issues;