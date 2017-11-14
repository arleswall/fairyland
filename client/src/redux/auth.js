import axios from "axios";

const userUrl = "http://localhost:8000/admin/"

const LOGON = "LOGON"
const HANDLE_AUTH_ERR = "HANDLE_AUTH_ERR"
const LOGOUT = "LOGOUT"

const auth = {
  user: {
    username: "",
    admin: false,
    _id: ""
  },
  authErrCode: {
    signin: ""
  },
  isAuthenticated: false
}


function logon(success, user) {
  return {
    type: LOGON,
    success,
    user
  }
}

function handleAuthErr(key, errCode) {
  return {
    type: HANDLE_AUTH_ERR,
    key,
    errCode
  }
}

export function logout() {
  localStorage.removeItem("token");
  return {
    type: LOGOUT
  }
}
export function signin(credentials) {
  return (dispatch) => {
    axios.post(userUrl + "login", credentials)
      .then((response) => {
        let {
          token,
          user,
          success
        } = response.data;
        localStorage.setItem("token", token);
        dispatch(logon(success, user));
      })
      .catch((err) => {
        console.error(err);
        dispatch(handleAuthErr("signin", err.response.status))
      });
  }
}
export default function authReducer(prevAuth = auth, action) {
  switch (action.type) {
    case LOGOUT:
      return auth
    case LOGON:
      return {
        ...prevAuth,
        authErrCode: {
          signin: ""
        },
        user: action.user,
        isAuthenticated: action.success
      }
    case HANDLE_AUTH_ERR:
      return {
        ...prevAuth,
        authErrCode: {
          ...prevAuth.authErrCode,
          [action.key]: action.errCode
        }
      }
    default:
      return prevAuth
  }
}