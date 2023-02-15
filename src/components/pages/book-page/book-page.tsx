import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux-hooks";

import { selectBookById } from "features/books";
import { itemAdd as cartItemAdd } from "features/cart";

import './book-page.css';

const BookPage = () => {
  const { bookId }  = useParams();
  const dispatch = useAppDispatch();


  const book = useAppSelector(state => selectBookById(state, bookId || ''));
  
  if (!book) {
    throw new Error('Cannot find book by id.');
  }

  const { title, author, price, coverImage } = book;

  return (
    <div className="book-page">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <div>
          <span className="book-title">{title}</span>
          <div className="book-author">{author}</div>
          <div className="book-price">${price}</div>
        </div>
        <button 
          className="btn btn-info add-to-cart"
          onClick={() => dispatch(cartItemAdd(book))}>Add to cart</button>
      </div>
    </div>
  );
}

export default BookPage;