import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css'

function NotFoundPage() {


    return (
        <div>
            <h1>
                Not Found Page
            </h1>

            <Link to="/">
                <button>Back</button>
            </Link>

        </div>
    );
}

export default NotFoundPage;