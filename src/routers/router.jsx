import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import '../App.css'
const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

import { HorarioPage } from '../pages/HorariosPage';
import { TamanhoDaTela } from '../pages/TamanhoDaTela';
import { DescricaoServicoSelecionadoPage } from '../pages/DescricaoServicoSelecionadoPage';


function Routers() {

  async function isLogged() {

  }

  function PrivateRoute({ children }) {
    return isLogged() ? children : window.location.replace('/')
  }

  return (
    <>
      <Router>
        <Suspense fallback={<div>Carregando...</div>}>
          <Routes>

            <Route path="/" element={<Login />} />
            <Route path="/horario" element={<PrivateRoute> <HorarioPage /> </PrivateRoute>} />
            <Route path="/home" element={<PrivateRoute> <Home /> </PrivateRoute>} />
            <Route path="/about" element={<PrivateRoute> <About /> </PrivateRoute>} />
            <Route path="/descriptionsPage" element={<PrivateRoute> <DescricaoServicoSelecionadoPage /> </PrivateRoute>} />

            <Route path="/tela" element={<TamanhoDaTela />} />
            <Route path="*" element={<NotFoundPage />} />

          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default Routers
