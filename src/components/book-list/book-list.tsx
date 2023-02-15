import useBookList from 'features/books/useBookList';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './book-list.css'

const BookList = () => {
  const [books, status, error] = useBookList();

  let content;

  if (status === 'succeeded') {
    content = (
      <ul className='book-list'>
        {books.map((item) => {
          const { id } = item;
          
          return (
            <li key={id} >
              <BookListItem book={item} />
            </li>
          )
        })}
    </ul>
    )
  } else if (status === 'failed') {
    return <ErrorIndicator error={error || ''}/>;
  } else  {
    content = <Spinner />
  };

  return content;
};

export default BookList;