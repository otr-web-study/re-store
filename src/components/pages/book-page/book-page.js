import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectBookById } from "../../../features/books";
import { itemAdd as cartItemAdd } from "../../../features/cart";

import './book-page.css';

const BookPage = () => {
  const { bookId }  = useParams();
  const dispatch = useDispatch();

  const book = useSelector(state => selectBookById(state, bookId));
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