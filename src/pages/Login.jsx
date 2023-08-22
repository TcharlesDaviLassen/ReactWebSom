import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa6";

import '../index.css'
import PasswordInput from '../contexts/PasswordInput';

const Login = ({ setIsAuthenticated }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');

    const quantidadeVal = 6;


    // console.log("Nav ", props)

    const handleLogin = async () => {

        // Simulate authentication
        if (username === 'user' && password === 'pass') {
            setIsAuthenticated(true);

            window.location.href = '/app/home';
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

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div>
            <h2>Login</h2>
            <div className='div_login'>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <div style={{ display: 'flex', position: 'absolute', marginTop: '14px', paddingLeft: '6px' }}>
                    <FaRegUser className='login_username' />
                </div>

                <PasswordInput value={password} onChange={handlePasswordChange} />

                <button onClick={handleLogin}>Login</button>
                {error && <div className="error-message">{error}</div>}


            </div>
        </div>
    );
};

export default Login;
