import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TheTitle from "./components/TheTitle";
import Calculator from "./components/Calculator";
ReactDOM.render(
  <React.StrictMode>
      <TheTitle/>
      <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);


