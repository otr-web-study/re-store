import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { Book } from "types/book";
import { Status } from "types/status";

import client from '../../services/bookstore-service';

interface InitialState {
  status: Status,
  error: string | null,
}

export const booksAdapter = createEntityAdapter<Book>();

const initialState = booksAdapter.getInitialState<InitialState>({
  status: 'idle',
  error: null,
})

export const fetchAllBooks = createAsyncThunk<Book[], undefined>(
  'books/fetchBooks', 
  async () => {
    const books = await client.getBooks();
    return books;
  });

const booksSlice = createSlice({
  name: 'books', 
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        booksAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchAllBooks.rejected, (state, action) => {
        state.status = 'failed';
        if (action.error.message)
          state.error = action.error.message;
      })
  }
});

export default booksSlice.reducer;
