//createslice
//initialize initial state
//slice ->name, mention initial state, actions
//export actions
//export reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];
//cartReducer
const cartSlice = createSlice({
  name: "cart", //slice name
  initialState, //initial state
  reducers: {
    addToCart(state, action) {
      console.log(action);

      // Add the product to the cart with `orderAmount` initialized to 1
      state.push({
        ...action.payload, // ✅ Keep existing product properties
        orderAmount: 1, // ✅ Add new property
      });
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    incrementAmount(state, action) {
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            orderAmount: item.orderAmount + 1,
          };
        }
        return item;
      });
    },
    decrementAmount(state, action) {
      return state
        .map((item) =>
          item.id === action.payload
            ? { ...item, orderAmount: item.orderAmount - 1 }
            : item
        )
        .filter((item) => item.orderAmount > 0); // ✅ Remove items where orderAmount is 0
    },
  },
});

export const { addToCart, removeFromCart, incrementAmount, decrementAmount } =
  cartSlice.actions;

export default cartSlice.reducer;
