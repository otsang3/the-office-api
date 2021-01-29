import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

    return(
        <div className="nav-bar">
            <ul>
                <Link to="/">Home</Link>
                <Link to="/seasons">Episodes</Link>
            </ul>
        </div>
    )
}

export default NavBar;