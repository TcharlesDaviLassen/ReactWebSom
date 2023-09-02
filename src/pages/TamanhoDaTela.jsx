import React, { useState, useEffect } from 'react';

function TamanhoDaTela() {
    
    const [tamanho, setTamanho] = useState({
        largura: window.innerWidth,
        altura: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setTamanho({
                largura: window.innerWidth,
                altura: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        // Limpe o evento de redimensionamento ao desmontar o componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <div>
            <h1>Tamanho da Tela</h1>
            <p>Largura: {tamanho.largura}px</p>
            <p>Altura: {tamanho.altura}px</p>
        </div>
    );
}

export { TamanhoDaTela };
