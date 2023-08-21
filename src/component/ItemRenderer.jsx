import React from 'react';

function ItemRenderer({ item }) {
    return (
        <div className="item">
            <h3>Código: {item.codigo}</h3>
            <p>Nome: {item.nome}</p>
        </div>
    );
}

export default ItemRenderer;
