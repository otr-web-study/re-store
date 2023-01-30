import { useSelector, useDispatch } from "react-redux";

import {
  selectCartItemById, itemIncrease, itemDecrease, itemDelete
} from "../../features/cart";
import { selectBookById } from "../../features/books";

import Book from '../book';
import './shopping-cart-item.css';


const ShoppingCartItem = ({itemId, idx}) => {

  const { count, total } = useSelector(state => selectCartItemById(state, itemId));
  const book = useSelector(state => selectBookById(state, itemId));

  const dispatch = useDispatch();

  return (
    <>
      <td>{idx + 1}</td>
      <td>{<Book bookId={itemId} />}</td>
      <td>{count}</td>
      <td>{total}</td>
      <td>
        <button 
          className="btn btn-outline-danger btn-sm float-right"
          onClick={() => dispatch(itemDecrease(book))}>
          <i className="fa fa-trash-o" />
        </button>
        <button 
          className="btn btn-outline-success btn-sm float-right"
          onClick={() => dispatch(itemIncrease(book))}>
          <i className="fa fa-plus-circle" />
        </button>
        <button 
          className="btn btn-outline-warning btn-sm float-right"
          onClick={() => dispatch(itemDelete(itemId))}>
          <i className="fa fa-minus-circle" />
        </button>
      </td>
    </>
  )
}

export default ShoppingCartItem;