import { booksAdapter } from "./bookSlice";
import { RootState } from "store";


export const {
  selectAll: selectAllBooks,
  selectById: selectBookById,
} = booksAdapter.getSelectors((state: RootState) => state.books);