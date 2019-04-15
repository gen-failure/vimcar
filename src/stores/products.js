import {action, observable, runInAction} from 'mobx';
import {apiBaseUrl} from '../appConfig';

import fetch from '../mock/fetch';

class ProductsStore {
  @observable items = [];
  
  @action async getProducts() {
    try {
      let query = await fetch(`${apiBaseUrl}/stock/products`);
      runInAction(() => {
        console.log(query);
        this.items = query.json();
      });
    } catch(error) {
      //FIXME Do something
    }
  
  }
}

export default ProductsStore;
