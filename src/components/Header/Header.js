import React from 'react';
import "./Header.css";

const Header = () => {
    return (
            <nav class="navbar navbar-dark bg-dark">
        {/* <div className="header"> */}
            <div class="container">
                <a class="navbar-brand">My Team</a>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            </nav>
        // </div>
    );
};

export default Header;