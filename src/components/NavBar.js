import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

    return(
        <div className="nav-bar">
            <ul>
                <Link to="/">Home</Link>
                <Link to="/seasons/1">Episodes</Link>
                <Link to="/quotes">Random Quotes</Link>
            </ul>
        </div>
    )
}

export default NavBar;