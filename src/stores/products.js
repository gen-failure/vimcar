import {action, observable, runInAction} from 'mobx';
import {apiBaseUrl} from '../appConfig';

import fetch from '../mock/fetch';

class ProductsStore {
  @observable items = [];
  
  @action async getProducts() {
    try {
      let query = await fetch(`${apiBaseUrl}/stock/products`);
      runInAction(() => {
        this.items = query.json();
      });
    } catch(error) {
      this.stores.toaster.addToast('Failed to retrive product data from server, please try again', 'error');
    }
  
  }
}

export default ProductsStore;
