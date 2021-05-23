import React from 'react';
import { FaPizzaSlice as Icon } from 'react-icons/fa';
import './Navbar.css';
import { HashLink } from 'react-router-hash-link';



function Navbar({onClick}) {
    return (
        <>
            <nav id="nav">
                <HashLink to="/#pizzas" className="nav-link">Restaurant</HashLink>
                <div onClick={onClick} className="nav-icon">
                    <p>Menu</p>
                    <Icon className="icon" />
                </div>
            </nav>
        </>
    )
}

export default Navbar;