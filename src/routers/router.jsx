import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import '../App.css'
const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
import { HorarioPage } from '../pages/HorariosPage';
import { TamanhoDaTela } from '../pages/TamanhoDaTela';



// import Login from '../pages/Login';
// import Home from '../pages/Home';
// import About from '../pages/About';
// import NotFoundPage from '../pages/NotFoundPage';
function Routers({ dados }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // let usernames = 'u';
  // let passwords = 'p';

  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function isLogged() {

    // const usertoken = localStorage.getItem('usertoken')

    // if (usertoken === undefined || usertoken === null || usertoken === "") {
    // window.location.replace("/")
    // }

    // if (dados === undefined) {
    //   window.location.replace("*");

    //   console.log("Please select", username, password)
    // }

    // console.log("!!!!!!!! ", dados)


    // try {

    //   // const response = await api.post('/tokenverify', { usertoken })

    //   // if (response.status === 200) {

    //   if (dados.username === 'u' && dados.password === 'p') {
    //     console.log("User authenticated:", username);
    //     return false;
    //   } else {
    //     return false
    //   }

    // } catch (error) {
    //   console.log(error)
    // }
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

            <Route path="/tela" element={<TamanhoDaTela />} />
            <Route path="*" element={<NotFoundPage />} />
            {/* <Route
                  // path="/login"
                  // element={isAuthenticated ? <AppRoutes /> : <Navigate to="/" />}
                  // render={(props) => (
                  //   <Login {...props} setIsAuthenticated={setIsAuthenticated} />
                  //   path="/"
                  //   element={<Login setIsAuthenticated={setIsAuthenticated} />}
                  //   // )}
                  // />
                  // <Route
                  //   path="/app"
                  //   element={isAuthenticated ? <AppRoutes /> : <Navigate to="/" />}
                  />
                  <Route
                    path="/"
                    element={<Login />}
                  />
                  <Route
                    path="/app/*" // Usamos * para fazer o matching com quaisquer sub-rotas
                    element={<PrivateRoute isAuthenticated={isAuthenticated} />}
                  /> */}
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}


// function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/app/home" element={<Home />} />
//       <Route path="/app/about" element={<About />} />
//     </Routes>
//   );
// }

// function PrivateRoute() {
//   console.log("Private Route ", isAuthenticated);

//   if (!isAuthenticated) {s
//     return <Navigate to="/" />;
//   }

//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//     </Routes>
//   );
// }


export default Routers
