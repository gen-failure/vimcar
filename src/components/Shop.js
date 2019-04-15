import React from 'react';
import Products from './Products';
import Toolbar from './Toolbar';
class Shop extends React.Component {

  render() {
    return (
      <div className="shopComponent" style={{width: '100%'}}>
        <Toolbar />
        <Products />
      </div>
    );
  }
}

export default Shop;
