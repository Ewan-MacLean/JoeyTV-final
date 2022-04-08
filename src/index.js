import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyNavbar from './components/myNavbar/navbar';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/About/About'


ReactDOM.render(
  <React.StrictMode>
    {/* <Router> */}
      <App />  
      {/* <Switch> */}
        {/* <Route exact path="/" component={App} /> */}
        {/* <Route path="/service" component={Service} /> */}
        {/* <Route path="/about" component={About} />       */}
      {/* </Switch>    */}
    {/* </Router> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
