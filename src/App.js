import React, { Component } from 'react';
import Product from './Product';
import info from './Info';

import './App.css'

class App extends Component {
    render() {
        return (
            <div className='app'>
                {
                    info.map((item, index) => {
                        return (
                            <Product 
                            name={info[index].name} 
                            imgUrl={info[index].imgUrl}
                            discount={info[index].discount}
                            description={info[index].description}
                            price={info[index].price}
                        />
                        )
                    })
                }
            </div>
        );
    }
}

export default App;