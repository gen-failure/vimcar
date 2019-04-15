import {action,computed, observable, runInAction} from 'mobx';
import {apiBaseUrl} from '../appConfig';

import fetch from '../mock/fetch';

class CartStore {
  @observable items = [];

  @action async addProduct(id) {
    //Check the availability of item first
    let query = await fetch(`${apiBaseUrl}/stock/reserve`, {
      method: 'POST',
      body: JSON.stringify([
        {
          urn: id,
          quantity: 1
        }
      ])
    });

    switch(query.status) {
      case 204: {
        let cartIndex= (this.items.findIndex((item) => { return item.id === id}));
        runInAction(() => {
          if (cartIndex !== -1) {
            this.items[cartIndex].amount++;
          } else {
            this.items.push({id, amount: 1});
          }
        })
        this.stores.toaster.addToast("Stock successfully reserved");
        break;
      }
      case 418: {
        this.stores.toaster.addToast('Failed to reserve item. Out of stock', 'warn');

        break;
      }
      default: {
        this.stores.toaster.addToast('Something went wrong', 'error');
      }
    }
  }

  @computed get itemsLength() {
    return this.items.reduce((total, currentValue) => {return total += currentValue.amount}, 0);
  }
}

export default CartStore;
