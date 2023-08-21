import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa6";

// import '../index.css'
import './PasswordInput.css'; // Importe o arquivo de estilos

function PasswordInput({ value, onChange }) {
    const [showPassword, setShowPassword] = useState(false);
    // const [password, setPassword] = useState('');

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="password-input-container">
            <input className="login_passwordInput"
                type={showPassword ? 'text' : 'password'}
                // onClick={handleTogglePassword}
                value={value}
                onChange={onChange}
                placeholder="Digite sua senha"
            />
            <FaLock className='login_password'/>
            <button
                className={`password-toggle-button`}
                onClick={handleTogglePassword}
            >{showPassword
                ?
                // <FaEyeSlash style={{ color: '#ff5733' }} />
                <FaEyeSlash />
                :
                <FaEye />}
            </button>
        </div>
    );
}

export default PasswordInput;
