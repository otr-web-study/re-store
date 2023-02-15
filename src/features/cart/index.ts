import reducer from './cartSlice';
import { 
  itemIncrease, 
  itemDecrease, 
  itemDelete,
  itemAdd,
 } from './cartSlice';
 import {
  selectAllCartItems,
  selectAllCartIds,
  selectCartItemById,
 } from './cartSelectors';

export default reducer;

export {
  itemIncrease,
  itemDecrease,
  itemDelete,
  itemAdd,
  selectAllCartItems,
  selectAllCartIds,
  selectCartItemById,
};