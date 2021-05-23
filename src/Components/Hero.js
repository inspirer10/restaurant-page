import React, { useState } from 'react';
import './Hero.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function Hero() {
    const [mobileView, setMobileView] = useState(false);

    const toggle = () => {
        setMobileView(!mobileView);
    }
    return (
        <div className="hero-container">
            <Navbar onClick={toggle} />

            {mobileView && <Sidebar onClick={toggle} />}

            <div className="hero-content">
                <div className="hero-items">
                    <h1>The Tastiest Pizza Ever</h1>
                    <p>Ready in 5 minutes!</p>
                    <button>Order here</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;