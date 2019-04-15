import React, { Component } from 'react';
import {Provider} from 'mobx-react';

import CartStore from './stores/cart';
import ProductsStore from './stores/products';
import ToasterStore from './stores/toaster';

import Shop from './components/Shop';

import 'flexboxgrid2/flexboxgrid2.css';

const stores = {
  cart: new CartStore(),
  products: new ProductsStore(),
  toaster: new ToasterStore()
}

Object.keys(stores).forEach((store) => {
  stores[store].stores = stores;
})

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
