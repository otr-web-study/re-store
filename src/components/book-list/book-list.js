import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllBooks, selectAllBooks } from '../../features/books';

import BookListItem from '../book-list-item';
import Spinner from '../spinner';

import './book-list.css'

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectAllBooks);

  const status = useSelector(state => state.books.status);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch]);

  let content;

  if (status === 'loading') {
    content = <Spinner />
  } else if (status === 'succeeded') {
    content = (
      <ul className='book-list'>
        {books.map(({ id, ...item }) => {
          return (
            <li key={id} >
              <BookListItem book={item} />
            </li>
          )
        })}
    </ul>
    )
  } else if (status === 'failed') {
    throw new Error(error);
  }


  return content;
};

export default BookList;