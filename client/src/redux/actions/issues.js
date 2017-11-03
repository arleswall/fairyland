import axios from "axios";

const issuesURL = "http://localhost:8000/issue/"

export function loadIssues(){
  return(dispatch)=>{
    axios.get(issuesURL).then((response)=>{
      dispatch({
        type: "LOAD_ISSUES",
        issues: response.data
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}

export function addIssue(issue){
  return (dispatch)=>{
    axios.post(issuesURL, issue).then((response)=>{
      dispatch({
        type: "ADD_ISSUE",
        issue: response.data
      })
    })
  }
}

export function deleteIssue(id){
  return (dispatch)=>{
    axios.delete(issuesURL+id).then((response)=>{
      dispatch({
        type: "DELETE_ISSUE",
        id
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}

export function editIssue(id, editedIssue){
  return (dispatch)=>{
    axios.put(issuesURL+id, editedIssue).then((response)=>{
      dispatch({
        type: "EDIT_ISSUE",
        editedIssue: response.data,
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
    axios.put(issuesURL+issue._id, update).then((response)=>{
      dispatch({
        type: "LIKES",
        editedIssue: response.data
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
    axios.put(issuesURL+issue._id, update).then((response)=>{
      dispatch({
        type: "DISLIKES",
        editedIssue: response.data
      });
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}


