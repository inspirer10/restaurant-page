import React from 'react';
import './Sidebar.css';
import { HashLink } from 'react-router-hash-link';
import { FaTimes as CloseIcon } from 'react-icons/fa';

function Sidebar({onClick}) {
    return (
        <section className="sidebar">
            <div className="sidebar-menu-icon">
                <CloseIcon onClick={onClick} className="close-icon" />
            </div>

            <div className="sidebar-links-menu">
                <HashLink onClick={onClick} className="sidebar-link" to="/#top">Full Menu</HashLink>
                <HashLink onClick={onClick} className="sidebar-link" to="/#pizzas">Pizzas</HashLink>
                <HashLink onClick={onClick} className="sidebar-link" to="/#drinks">Drinks</HashLink>
                <HashLink onClick={onClick} className="sidebar-link" to="/#desserts">Desserts</HashLink>
                <button>Order</button>
            </div>
        </section>
    )
}

export default Sidebar;