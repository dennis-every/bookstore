/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BOOKS_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/NT4EbD5z0Cyfxmpz8y5k/books';

const initialState = {
  books: {},
  ifSucceed: false,
  isLoading: false,
  error: null,
};

const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    try {
      const { data } = await axios.get(BOOKS_URL);
      return data;
    } catch (err) {
      return err.message;
    }
  },
);

const addBook = createAsyncThunk('books/addBooks', async (book) => {
  const data = JSON.stringify(book);
  const headers = {
    headers: {
      'content-type': 'application/json',
    },
  };
  try {
    await axios.post(BOOKS_URL, data, headers);
    return { message: 'Book added successfully' };
  } catch (error) {
    return error;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeBook: (state, action) => ({
      ...state,
      books: state.books.filter((book) => book.item_id !== action.payload),
    }),
  },
  extraReducers: {
    [fetchBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.ifSucceed = true;
      state.books = action.payload;
    },
    [fetchBooks.rejected]: (state) => {
      state.isLoading = false;
      state.ifSucceed = false;
    },

    [addBook.pending]: (state) => {
      state.isLoading = true;
    },
    [addBook.fulfilled]: (state) => {
      state.isLoading = false;
      state.ifSucceed = true;
    },
    [addBook.rejected]: (state) => {
      state.isLoading = false;
      state.ifSucceed = false;
    },
  },
});

export { fetchBooks, addBook };
export const { removeBook } = booksSlice.actions;

export default booksSlice.reducer;
