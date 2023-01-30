import { useDispatch } from 'react-redux';

import './book-list-item.css';

import { itemAdd as cartItemAdd } from '../../features/cart';

const BookListItem = ({ book }) => {
  const dispatch = useDispatch();

  const { id, title, author, price, coverImage } = book;
  
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <a href="#" className="book-title">{title}</a>
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