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