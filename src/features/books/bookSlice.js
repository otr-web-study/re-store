import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

import client from '../../services/bookstore-service';

const booksAdapter = createEntityAdapter();

const initialState = booksAdapter.getInitialState({
  status: 'idle',
  error: null,
})

export const fetchAllBooks = createAsyncThunk('books/fetchBooks', async () => {
  const books = await client.getBooks();
  return books;
})

const booksSlice = createSlice({
  name: 'books', 
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllBooks.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchAllBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        booksAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchAllBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
});

export const { bookLoaded } = booksSlice.actions;

export default booksSlice.reducer;

export const {
  selectAll: selectAllBooks
} = booksAdapter.getSelectors(state => state.books);