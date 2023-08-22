import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));

import '../App.css'

function Routers() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          {/* <Route exact path="/" element={< Login />} /> */}
          <Route
            // path="/login"
            // element={isAuthenticated ? <AppRoutes /> : <Navigate to="/" />}
            // render={(props) => (
            //   <Login {...props} setIsAuthenticated={setIsAuthenticated} />
            path="/"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
            // )}
          />
          <Route
            path="/app"
            element={isAuthenticated ? <AppRoutes /> : <Navigate to="/" />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}


function AppRoutes() {
  return (
    <Routes>
      <Route path="/app/home" element={<Home />} />
      <Route path="/app/about" element={<About />} />
    </Routes>
  );
}

export default Routers
