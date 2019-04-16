import React from 'react';

import ProductsStore from '../../stores/products';
import CartStore from '../../stores/cart';
import ToasterStore from '../../stores/toaster';

//FIXME: This is a code duplication of what happens in App.js. Merging should be considered.

function getStores() {
  const stores = {
    products: new ProductsStore(),
    cart: new CartStore(),
    toaster: new ToasterStore()
  }

  Object.keys(stores).forEach((store) => {
    stores[store].stores = stores; //to many stores.... 
  });

  return stores;
}

export default getStores;
