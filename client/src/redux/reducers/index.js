import issues from "./issues";

let state = {
  issues: []
}

function reducer(prevState=state, action){
  return{
    issues: issues(prevState.issues, action)
  }
}

export default reducer;