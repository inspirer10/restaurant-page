import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './Components/Hero';
import PizzasProducts from './Components/PizzasProducts';
import DrinksProducts from './Components/DrinksProducts';
import DessertsProducts from './Components/DessertsProducts';
import Footer from './Components/Footer';


function App() {
    return (
        <Router>
            <Hero />
            <PizzasProducts />
            <div class="pizza-logo">
                <div className="test"></div>
            </div>
            <DrinksProducts />
            <DessertsProducts />
            <div class="pizza-logo-two"></div>
            <Footer />
        </Router>
    );
}

export default App;