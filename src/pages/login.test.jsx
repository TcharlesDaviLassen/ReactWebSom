import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {expect, describe, it, jest, test} from '@jest/globals'; // Import para estender as expectativas do Jest

import Login from './Login'; // Substitua pelo caminho real para o seu componente


describe('SeuComponente', () => {
    
    it('deve renderizar corretamente', () => {
        const { getByText, getByPlaceholderText } = render(Login);

        // Verifica se elementos estão presentes na renderização
        expect(getByPlaceholderText('Username')).toBeInTheDocument();
        expect(getByText('Login')).toBeInTheDocument();
    });

    it('deve atualizar o estado do username ao digitar', () => {
        const { getByPlaceholderText } = render(Login);
        const usernameInput = getByPlaceholderText('Username');

        fireEvent.change(usernameInput, { target: { value: 'novoUsername' } });

        expect(usernameInput.value).toBe('novoUsername');
    });

    // Continue escrevendo testes para os outros comportamentos interativos
});