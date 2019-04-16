import {render} from './_enzyme';
import React from 'react';

import Toolbar from '../Toolbar';

describe("<Toolbar />", () => {
  let store;
  beforeEach(function() {
    store = {
      itemsLength: 12
    }
  });

  it("should show amount of products in cart", () => {
    const component = render(<Toolbar cart={store} />);
    expect(component.find('.pill')).toHaveLength(1);
    expect(component.find('.pill').text()).toEqual("12");
  });
});
