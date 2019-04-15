import React, { Component } from 'react';
import {Provider} from 'mobx-react';

import CartStore from './stores/cart';
import ProductsStore from './stores/products';

import Shop from './components/Shop';

import 'flexboxgrid2/flexboxgrid2.css';

const stores = {
  cart: new CartStore(),
  products: new ProductsStore()
}


class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Shop />
      </Provider>
    );
  }
}

export default App;
