import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import './index.css';
import Login from './Pages/Login/login.js';
import Regristo from './Pages/Registrarse/registro.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/registro" element={<Regristo />}/>
    </Routes>    
  </BrowserRouter>
);

