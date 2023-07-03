import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  products: JSON.parse(window.localStorage.getItem('products')) || [],
  cartItemCount : window.localStorage.getItem('itemCount') || 0
};
// have to store whole product object
// complexity can be reduced if we use separate reducers for -> addNewProduct, increaseExistingProductCount, deleteProduct, decreaseCount
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, {payload}) => {
      // if product is already in cart -> increase product count
        // will get the product id
          // find the product
      let oldProduct = state.products.find(
        (prod) => prod.id === payload.productId
      );
      if (oldProduct) {
        oldProduct.count = oldProduct.count + 1;
        const updatedProducts = state.products.map((prod) =>
        prod.id === payload.productId ? oldProduct : prod
      );
        state.products = updatedProducts
        window.localStorage.setItem('products', JSON.stringify(updatedProducts))
      } else {
        // if product is not in the cart -> add new Product
        // payload will consist product id and
        const updatedProducts = state.products.concat({
          id: payload.productId,
          count: 1,
        });
        state.products = updatedProducts;
        state.cartItemCount = state.cartItemCount + 1;
        window.localStorage.setItem('products', JSON.stringify(updatedProducts))
      }
    },
    removeProduct: (state, {payload}) => {

      let oldProduct = state.products.find(
        (prod) => prod.id === payload.productId
      );
      if(oldProduct.count > 1){
        // if product count is more than one -> decrease Count
        const updatedProducts = state.products.map((prod) =>
        prod.id === payload.productId ? {...oldProduct, count: oldProduct.count - 1} : prod
        );
        state.products = updatedProducts
        window.localStorage.setItem('products', JSON.stringify(updatedProducts))
      } else { 
        // if product count is one  -> remove product
        const updatedProducts = state.products.map((prod) =>
        prod.id === payload.productId ? null : prod
        );
        state.products = updatedProducts
        state.cartItemCount = state.cartItemCount - 1
        window.localStorage.setItem('products', JSON.stringify(updatedProducts))
      }
    },
    deleteProduct: (state, {payload}) => {
      const updatedProducts = state.products.map((prod) =>
        prod.id === payload.productId ? null : prod
        );
        state.products = updatedProducts
        state.cartItemCount = state.cartItemCount - 1
        window.localStorage.setItem('products', JSON.stringify(updatedProducts))
    }
  },
});

// Action creators are generated for each case reducer function
export const {addProduct, removeProduct, deleteProduct} = cartSlice.actions;

export default cartSlice.reducer;
