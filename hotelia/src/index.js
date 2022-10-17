import React from 'react';
import ReactDOM from 'react-dom/client';
import Inicio from './pages/inicio/Inicio.js';
import Login from './pages/login/Login.js';
import Dashboard from './pages/dashboard/Dashboard.js';
import Regristo from './pages/registrarse/Registro.js';
import Error from './components/error/Error.js';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Users from './pages/Users.js';

import Edit from './pages/edit.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path='/registro' element={<Regristo />}/>
        <Route path='/error' element={<Error />} />
        <Route path='/user/' element={<Users/>}></Route>
        <Route path='/edit/' element={<Edit/>}></Route>

    </Routes>
  </BrowserRouter>
);


