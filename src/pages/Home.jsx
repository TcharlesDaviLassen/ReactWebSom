import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css'

function Home() {


    return (
        <div>
            <h1>
                HOME
            </h1>

            <Link to="/about">
                <button>About</button>
            </Link>
        </div>
    );
}

export default Home;
