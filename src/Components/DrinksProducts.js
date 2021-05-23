import React from 'react';
import './PizzasProducts.css';
import { DrinksData as data } from './ProductsData';
import { HotDrinksData as dataTwo } from './ProductsData';

function Content() {
    return (
        <div className="products-container" id="drinks">
            <h1>Cold drinks:</h1>
            <div className="products-space">
                {data.map((item, index) => (
                    <div className="product-card" key={index}>
                        <img src={item.img} alt={item.alt} />
                        <div className="product-info">
                            <h2 className="product-name">{item.name}</h2>
                            <h3 className="product-price">{item.price}</h3>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>

            <h1>Hot drinks:</h1>

            <div className="products-space">
                {dataTwo.map((item, index) => (
                    <div className="product-card" key={index}>
                        <img src={item.img} alt={item.alt} />
                        <div className="product-info">
                            <h2 className="product-name">{item.name}</h2>
                            <h3 className="product-price">{item.price}</h3>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Content;