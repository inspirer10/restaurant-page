import React from 'react';
import './PizzasProducts.css';
import { DessertsData as data} from './ProductsData';

function DessertsProducts() {
    return (
        <div className="products-container" id="desserts">
            <h1>Sweet treats:</h1>
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
        </div>
    )
}

export default DessertsProducts;