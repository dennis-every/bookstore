/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BOOKS_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/NT4EbD5z0Cyfxmpz8y5k/books/';

const initialState = {
  books: {},
  ifSucceed: false,
  isLoading: false,
  error: null,
};

const headers = {
  headers: {
    'content-type': 'application/json',
  },
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
  try {
    const response = await axios.post(BOOKS_URL, data, headers);
    return response.data;
  } catch (error) {
    return error;
  }
});

const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  const data = JSON.stringify({ item_id: id });
  try {
    const response = await axios.delete(BOOKS_URL + id, data, headers);
    return response.data;
  } catch (error) {
    return error;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
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
    },

    [addBook.pending]: (state) => {
      state.isLoading = true;
    },
    [addBook.fulfilled]: (state) => {
      state.isLoading = false;
      state.ifSucceed = false;
    },
    [addBook.rejected]: (state) => {
      state.isLoading = false;
    },

    [removeBook.pending]: (state) => {
      state.isLoading = true;
    },
    [removeBook.fulfilled]: (state) => {
      state.isLoading = false;
      state.ifSucceed = false;
    },
    [removeBook.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export { fetchBooks, addBook, removeBook };

export default booksSlice.reducer;
