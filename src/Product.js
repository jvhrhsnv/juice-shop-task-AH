import React, { Component } from 'react';

import './Product.css';

class Product extends Component {
    render(props) {
        const {name, imgUrl, price, discount, description} = this.props;
        return (
            <div className='product'>
                <div className="img">
                    <img src={imgUrl} alt="#" />
                </div>

                <div className="discount">
                    <p>{discount}</p>
                </div>

                <div className="name">
                    <p>{name}</p>
                </div>

                <div className="description">
                    <p>{description}</p>
                </div>

                <div className="price">
                    <p>{price}</p>
                </div>
                
                <div className="btn">
                   <button>view product</button>
                </div>
            </div>
        );
    }
}

export default Product;