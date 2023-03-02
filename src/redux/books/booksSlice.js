/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BOOKS_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/NT4EbD5z0Cyfxmpz8y5k/books';

const initialState = {
  books: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    try {
      const response = await axios.get(BOOKS_URL);
      return [...response.data];
    } catch (err) {
      return err.message;
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      books: [...state.books, action.payload],
    }),
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== action.payload),
    }),
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.books = action.payload;
    },
    [fetchBooks.rejected]: (state) => {
      state.status = 'failed';
      state.books = [];
    },
  },
});

export const selectAllBooks = (state) => state.books.books;
export const getBooksStatus = (state) => state.books.status;
export const getBooksError = (state) => state.books.error;

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
