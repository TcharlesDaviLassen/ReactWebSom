import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css'
import ItemList from '../component/ItemList';
import jsonData from '../jsonData';

function Home() {

    let count = 0;

    return (
        <div>
            <h1>
                HOME
            </h1>

            <h3>Itens do JSON</h3>

            <div style={{ display: 'none' }}>
                {jsonData.map((item, index) => (
                    count = index + 1
                ))}
            </div>


            <h4>Quantidade de registro na página: <span style={{color: "purple"}}>{" " + count}</span></h4>

            <ItemList />

            <Link to="/about" >
                <button style={{ marginTop: '112px' }}>About</button>
            </Link>
        </div>
    );
}

export default Home;
