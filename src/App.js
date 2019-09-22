import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

axios.interceptors.response.use(function (response) {
  debugger;
  return response;
}, function (err) {
  debugger;
  if (err.response.status && err.response.status === 302) {
    window.open(err.response.header.location)
  }
})

function App() {
  return (
    <div className="App">
      <button onClick={() => {
        axios.post('http://172.17.251.89:9191/Oauth/token')
        .then(res => {
          debugger;
        })
        .catch(err => {
          debugger;
        })
      }}>Login</button>
    </div>
  );
}

export default App;
