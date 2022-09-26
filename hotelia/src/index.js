import React from 'react';
import ReactDOM from 'react-dom/client';
/*import {BrowserRouter, Navigate, Route,Routes} from 'react-router-dom';*/
import './index.css';
import Login from './Pages/Login/login';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Login/>    
  </React.StrictMode>
);

