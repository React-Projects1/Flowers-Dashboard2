import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Reduxs/cartSlice.jsx';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
