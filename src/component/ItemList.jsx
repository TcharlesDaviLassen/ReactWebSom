import React from 'react';
import jsonData from '../jsonData';

import "./BoxSection.css"
import Home from '../pages/Home';


function ItemList() {

    return (
        <div className="box-section">
            {jsonData.map((item, index) => (
                <div key={index} className="box">
                    <h3>{item.codigo}</h3>
                    <p>{item.nome}</p>
                </div>
            ))}
        </div>
    );
}

export default ItemList;