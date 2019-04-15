import React from 'react';

import Products from './Products';
import Toolbar from './Toolbar';
import Toaster from './Toaster';

class Shop extends React.Component {

  render() {
    return (
      <div className="shopComponent" style={{width: '100%'}}>
        <Toolbar />
        <Products />
        <Toaster />
      </div>
    );
  }
}

export default Shop;
