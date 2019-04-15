import {action, observable} from 'mobx';

class CartStore {
  @observable items = [];
}

export default CartStore;
