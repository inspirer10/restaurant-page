import React from 'react';
import './PizzasProducts.css';
import { ProductsData as data} from './ProductsData';

function Content() {
    return (
        <div className="products-container" id="pizzas">
            <h1>Choose your favorite:</h1>
            <div className="products-space">
                {data.map((item, index) => (
                    <div className="product-card" key={index}>
                        <img src={item.img} alt={item.alt} />
                        <div className="product-info">
                            <h2 className="product-name">{item.name}</h2>
                            <p className="product-description">{item.description}</p>
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