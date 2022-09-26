import React from 'react';
import ReactDOM from 'react-dom/client';
import Inicio from './pages/inicio/Inicio';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import './index.css';
import Dashboard from './pages/dashboard/Dashboard';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Inicio />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
  </Routes>
  </BrowserRouter>
);


