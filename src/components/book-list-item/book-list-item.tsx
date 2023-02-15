import { Link } from 'react-router-dom';

import { useAppDispatch } from 'redux-hooks';
import { itemAdd as cartItemAdd } from 'features/cart';
import { Book } from 'types/book';
import './book-list-item.css';

const BookListItem = ({ book }: {book: Book}) => {
  const dispatch = useAppDispatch();

  const { id, title, author, price, coverImage } = book;
  
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <Link to={`books/${id}`} className="book-title">{title}</Link>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button 
          className="btn btn-info add-to-cart"
          onClick={() => dispatch(cartItemAdd(book))}>Add to cart</button>
      </div>
    </div>
  );
};

export default BookListItem;