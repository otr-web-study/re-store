import { EntityId } from '@reduxjs/toolkit';
import { useAppSelector, useAppDispatch } from 'redux-hooks';
import { Link } from 'react-router-dom';

import {
  selectCartItemById, itemIncrease, itemDecrease, itemDelete
} from 'features/cart';
import { selectBookById } from 'features/books';
import Book from '../book';
import { Cart } from 'types/cart';
import './shopping-cart-item.css';

interface ShoppingCartItemProps {
  itemId: EntityId,
  idx: number,
}

const ShoppingCartItem = ({ itemId, idx }: ShoppingCartItemProps) => {

  const { count, total } = useAppSelector(
    state => selectCartItemById(state, itemId)
  ) as Cart;
  const book = useAppSelector(state => selectBookById(state, itemId));

  if (!book) {
    throw new Error('Cannot find book by id');
  }

  const dispatch = useAppDispatch();

  return (
    <>
      <td>{idx + 1}</td>
      <td>
        <Link to={`/books/${itemId}`}>
          {<Book bookId={itemId} />}
        </Link>
      </td>
      <td>{count}</td>
      <td>{total}</td>
      <td>
        <button 
          className='btn btn-outline-danger btn-sm float-right'
          onClick={() => dispatch(itemDelete(itemId))}>
          <i className='fa fa-trash-o' />
        </button>
        <button 
          className='btn btn-outline-success btn-sm float-right'
          onClick={() => dispatch(itemIncrease(book))}>
          <i className='fa fa-plus-circle' />
        </button>
        <button 
          className='btn btn-outline-warning btn-sm float-right'
          onClick={() => dispatch(itemDecrease(book))}>
          <i className='fa fa-minus-circle' />
        </button>
      </td>
    </>
  )
}

export default ShoppingCartItem;