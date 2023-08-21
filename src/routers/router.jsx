import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));

import '../App.css'

function Routers() {

    return (
        <Router>
            <Suspense fallback={<div>Carregando...</div>}>
                <Routes>
                    <Route path="/" element={< Login/>} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Suspense>
        </Router>
    );
}

export default Routers
