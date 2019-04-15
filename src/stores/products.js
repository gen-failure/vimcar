import {action, observable} from 'mobx';

class ProductsStore {
  @observable items = [];
}

export default ProductsStore;
