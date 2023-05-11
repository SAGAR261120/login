import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';/* this app means App.js (only app.js will import here by default) first import it here to use. */
import reportWebVitals from './reportWebVitals';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(//render means run this file and show output in simple lang & root means where we have to render so we have to render in HTML file  ReactDOM.createRoot(document.getElementById('root')).
  <React.StrictMode>
  {/* OUTPUT FILES ARE HERE IF I WILL CALL <APP/> COMPONENT 2 TIME SO OUTPUT WILL BE SHOW 2 TIMES. */}
    <App></App>{/*this app means App.js first import it on top to use.*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
