import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css'

function About() {


    return (
        <div>
            <h1>
                About
            </h1>

            <Link to="/">
                <button>Exit</button>
            </Link>

        </div>
    );
}

export default About;
