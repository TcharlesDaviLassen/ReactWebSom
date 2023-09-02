import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../index.css'
import imageLotus from '../assets/animations/lotusFlower.jpg';
import LoginForm from '../component/LoginForm';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');

    let navigate = useNavigate();
    const quantidadeVal = 6;

    // let dados = new Array();

    // let arr = {};
    // arr.username = username;
    // arr.password = password;
    // dados.push(arr)

    // var expor = dados;

    const handleLogin = () => {


        // Simulate authentication
        if (username === 'u' && password === 'p') {
            // <Routers dados={expor} />
            console.log("Authentication")

            navigate("/horario");
            // window.location.href = '/app/home';

            setIsAuthenticated(true);
        } else {
            if (username === "" || password === "") {
                setError('Nome e senha devem ser preenchidos');
            } else if (username.length <= 3 || password <= quantidadeVal) {
                setError(`Nome ou senha deve conter ao menos ${quantidadeVal} caractere`)
            }
            // else if (password != `^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$`) {
            //     setError(`Senha deve conter carcteres especiais`)
            // }
            else {
                setError('Nome de usuário ou senha incorretos');
            }
        }
    };

    const handleNameUserChange = async (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = async (e) => {
        setPassword(e.target.value);
    };

    // return (
    //     <form>
    //         <div>
    //             <h2>Login</h2>
    //             <div className='div_login'>
    //                 <input
    //                     type="text"
    //                     placeholder="Username"
    //                     value={username}
    //                     onChange={handleNameUserChange}
    //                     // autoComplete="username"

    //                 />
    //                 <div style={{ display: 'flex', position: 'absolute', marginTop: '14px', paddingLeft: '6px' }}>
    //                     <FaRegUser className='login_username' />
    //                 </div>

    //                 <PasswordInput value={password} onChange={handlePasswordChange} />

    //                 <button onClick={handleLogin}>Login</button>
    //                 {error && <div className="error-message">{error}</div>}
    //             </div>
    //         </div>
    //     </form>
    // );

    return (
        <>
            <div><img className="imageFlower" src={imageLotus} alt="Minha Imagem" /></div>

            <LoginForm
                username={username}
                password={password}
                onLogin={handleLogin}
                error={error}
                handleNameUserChange={handleNameUserChange}
                handlePasswordChange={handlePasswordChange}
            />
            {/* {error && <div className="error-message">{error}</div>} */}
        </>
    );
};

export default Login;
