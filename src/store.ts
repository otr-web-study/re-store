import { configureStore } from '@reduxjs/toolkit';

import booksReducer from './features/books'
import cartReducer from './features/cart';


const store = configureStore({
  reducer: {
    books: booksReducer,
    cart: cartReducer,
  },
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;