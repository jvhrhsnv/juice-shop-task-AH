import React, { Component } from 'react';
import Product from './Product';
import info from './Info';

import './App.css'

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Product 
                    name={info[0].name} 
                    imgUrl={info[0].imgUrl}
                    discount={info[0].discount}
                    description={info[0].description}
                    price={info[0].price}
                />
                <Product 
                    name={info[1].name} 
                    imgUrl={info[1].imgUrl}
                    discount={info[1].discount}
                    description={info[1].description}
                    price={info[1].price}
                />    
                <Product 
                    name={info[2].name} 
                    imgUrl={info[2].imgUrl}
                    discount={info[2].discount}
                    description={info[2].description}
                    price={info[2].price}
                />
                <Product 
                    name={info[3].name} 
                    imgUrl={info[3].imgUrl}
                    discount={info[3].discount}
                    description={info[3].description}
                    price={info[3].price}
                />
                <Product 
                    name={info[4].name} 
                    imgUrl={info[4].imgUrl}
                    discount={info[4].discount}
                    description={info[4].description}
                    price={info[4].price}
                />    
                <Product 
                    name={info[5].name} 
                    imgUrl={info[5].imgUrl}
                    discount={info[5].discount}
                    description={info[5].description}
                    price={info[5].price}
                />      
            </div>
        );
    }
}

export default App;