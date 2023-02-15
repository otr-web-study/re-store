import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'redux-hooks';
import { Book } from 'types/book';
import { Status } from 'types/status';
import { fetchAllBooks, selectAllBooks } from 'features/books';

const useBookList = (): [Book[], Status, string | null] => {
  const dispatch = useAppDispatch();
  const books = useAppSelector(selectAllBooks);

  const status = useAppSelector(state => state.books.status);
  const error = useAppSelector(state => state.books.error);

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch]);

  return [books, status, error];
};

export default useBookList;