import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
      state.total += action.payload.totalPrice;
    },
    addQuantityToCart(state, action) {
      const item = state.cart.find((el) => el.id === action.payload);
      if (item) {
        item.totalPrice += item.price;
        item.quantity++;
        state.total += item.price;
      }
    },
    reduceQuantityToCart(state, action) {
      const item = state.cart.find((el) => el.id === action.payload);
      if (item) {
        item.totalPrice -= item.price;
        item.quantity--;
        state.total -= item.price;
      }
    },
    removeItem(state, action) {
      state.cart = state.cart.filter((el) => el.id !== action.payload);
      state.total = state.cart.reduce((acc, item) => acc + item.totalPrice, 0);
    },
    clearCart(state) {
      state.cart = initialState.cart;
      state.total = initialState.total;
    },
  },
});

export const {
  addToCart,
  removeItem,
  clearCart,
  addQuantityToCart,
  reduceQuantityToCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCart = (state) => state.cart.total;
