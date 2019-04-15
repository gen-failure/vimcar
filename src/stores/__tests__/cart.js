import CartStore from '../cart';
import ToasterStore from '../toaster';
import mockRandom from '../../mock/mockRandom';

const getStore = () => {
  let store = new CartStore();
  store.stores = {
    toaster: new ToasterStore()
  }

  return store;
}


describe("Cart store", () => {

  let store;

  beforeEach(() => {
    store = getStore();
  });

  it("Add product to cart when is avaiable in reserve", async () => {
    mockRandom(1);
    await store.addProduct('fake:product:id')
    expect(store.items.length).toBe(1);
  });

  it("Don't add product to cart when is not in reserve", async () => {
    mockRandom(0.15);
    await store.addProduct('fake:product:id');
    expect(store.items.length).toBe(0);
  });
  
  it("Don't add product to cart on error", async () => {
    mockRandom(0.05);
    await store.addProduct('fake:product:id');
    expect(store.items.length).toBe(0);
  });

  //FIXME: To test alert more effectively, the error message should be kept outside of function,
  //e.g. as translation key. To complex for this implementation.
  it("Notify user when product is added to cart", async () => {
    let toasterSpy = jest.spyOn(store.stores.toaster, 'addToast');
    mockRandom(1);
    await store.addProduct('fake:product:id');
    expect(toasterSpy).toHaveBeenCalled();
  });
  it("Notify user when product is not in reserve", async () => {
    let toasterSpy = jest.spyOn(store.stores.toaster, 'addToast');
    mockRandom(0.1);
    await store.addProduct('fake:product:id');
    expect(toasterSpy).toHaveBeenCalled();
  });
  it("Notify user when adding to cart fails", async () => {
    let toasterSpy = jest.spyOn(store.stores.toaster, 'addToast');
    mockRandom(0.05);
    await store.addProduct('fake:product:id');
    expect(toasterSpy).toHaveBeenCalled();
  });

  it("calculates items in cart", async () => {
    mockRandom(1);
    await store.addProduct('fake:first:product:id');
    expect(store.itemsLength).toBe(1);
    await store.addProduct('fake:first:product:id');
    expect(store.itemsLength).toBe(2);
    await store.addProduct('fake:second:product:id');
    expect(store.itemsLength).toBe(3);
  });
});
