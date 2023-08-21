import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css'
import ItemList from '../component/ItemList';

function Home() {


    return (
        <div>
            <h1>
                HOME
            </h1>

            <h3>Itens do JSON</h3>
            <ItemList />
            <Link to="/about">
                <button>About</button>
            </Link>
        </div>
    );
}

export default Home;
