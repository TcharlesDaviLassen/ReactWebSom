import React from 'react';
import jsonData from '../jsonData';

import "./BoxSection.css"


function ItemList() {
    return (
        <div className="box-section">
            {jsonData.map((item, index) => (
                <div key={index} className="box">
                    <h3>Código: {item.codigo}</h3>
                    <p>Nome: {item.nome}</p>
                </div>
            ))}
        </div>
    );
}

export default ItemList;