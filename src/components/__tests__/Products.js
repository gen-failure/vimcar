import {shallow} from './_enzyme';
import React from 'react';

import getStores from './_stores';

import Products from '../Products';

describe("<Products />", () => {
  let stores;
  beforeEach(function() {
    stores = getStores();
  });

  it("should update products from api on mounting ", async () => {
    let productsSpy = jest.spyOn(stores.products, 'getProducts');
    const component = shallow(<Products.wrappedComponent {...stores} />);
    expect(productsSpy).toHaveBeenCalled();
  });
});
