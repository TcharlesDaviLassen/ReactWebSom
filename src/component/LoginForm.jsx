import React, { Component, useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import '../index.css'
import PasswordInput from '../contexts/PasswordInput';
import { FaCircleUser, FaEye, FaEyeSlash, FaLock, FaRegUser } from 'react-icons/fa6';

const LoginForm = ({ username, password, onLogin, error, handleNameUserChange, handlePasswordChange }) => {

    // const [showPassword, setShowPassword] = useState(false);

    // const handleTogglePassword = () => {
    //     setShowPassword(!showPassword);
    // };

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         username: '',
    //         password: '',
    //     };
    // }

    // let navigate = useNavigate();
    // const quantidadeVal = 6;

    // handleUsernameChange = (event) => {
    //     this.setState({ username: event.target.value });
    // };

    // handlePasswordChange = (event) => {
    //     this.setState({ password: event.target.value });
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode realizar a lógica de autenticação ou envio de dados
    };


    // return (
    //     <form onSubmit={this.handleSubmit}>
    //         <div>
    //             <label htmlFor="username">Username:</label>
    //             <input
    //                 type="text"
    //                 id="username"
    //                 value={this.state.username}
    //                 onChange={this.handleUsernameChange}
    //             />
    //         </div>
    //         <div>
    //             <label htmlFor="password">Password:</label>
    //             <input
    //                 type="password"
    //                 id="password"
    //                 value={this.state.password}
    //                 onChange={this.handlePasswordChange}
    //             />
    //         </div>
    //         <button type="submit">Login</button>
    //     </form>
    // );

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Login</h2>
                    <div className='div_login'>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={handleNameUserChange}
                            autoComplete="username"
                        />
                        
                        <div style={{ display: 'flex', position: 'absolute', marginTop: '14px', paddingLeft: '6px' }}>
                            <FaRegUser className='login_username' />
                        </div>

                        <PasswordInput value={password} onChange={handlePasswordChange} />

                        <button onClick={onLogin}>Login</button>

                        {error && <div className="error-message">{error}</div>}
                    </div>
                </div>
            </form>
        </>
    );
}

export default memo(LoginForm);
