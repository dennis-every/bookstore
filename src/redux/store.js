import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../features/booksSlice';
import categoriesReducer from '../features/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
