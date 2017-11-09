import React from "react";
import ReactDOM from "react-dom";
import App from "./main/App";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import reducer from "./redux";
import "./index.css";

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(()=>{
  // console.log(store.getState())
})



ReactDOM.render(<Provider store={store}><Router><App/></Router></Provider>, document.getElementById('root'));