import { EntityId } from "@reduxjs/toolkit";
import { useAppSelector } from "redux-hooks";
import { selectBookById } from "../../features/books";

const Book = ({ bookId }: { bookId: EntityId}) => {
  const book = useAppSelector(state => selectBookById(state, bookId));

  if (!book) {
    throw new Error('Cannot find book by id.');
  }
  const { title } = book;

  return (
    <span>{title}</span>
  );
}

export default Book;