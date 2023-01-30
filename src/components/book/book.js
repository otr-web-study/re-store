import { useSelector } from "react-redux";

import { selectBookById } from "../../features/books";

const Book = ({ bookId }) => {
  const { title } = useSelector(state => selectBookById(state, bookId));

  return (
    <span>{title}</span>
  );
}

export default Book;