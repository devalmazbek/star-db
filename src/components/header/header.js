import React from "react";
import './header.css';

const Header = () => {
    return (
        <nav className="header d-flex">
        <div className="logo">
           <h1>Start-DB</h1>
        </div>
        <ul className="menu">
            <li className="menu__item">
                <a href="#clear" className="menu__item__link">People</a>
            </li>
            <li className="menu__item">
                <a href="#clear" className="menu__item__link">Planet</a>
            </li>
            <li className="menu__item">
                <a href="#clear" className="menu__item__link">Startship</a>
            </li>
        </ul>
    </nav>
    );
    
}

export default Header