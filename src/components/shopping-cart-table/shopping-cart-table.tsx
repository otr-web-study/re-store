import { useAppSelector } from 'redux-hooks';
import { selectAllCartIds } from '../../features/cart';

import ShoppingCartItem from '../shopping-cart-item';
import './shopping-cart-table.css';

const ShoppingCartTable = () => {
  const cartItemIds = useAppSelector(selectAllCartIds);
  const total = useAppSelector(state => state.cart.total);

  const content = cartItemIds.map((itemId, idx) => {
    return (
      <tr key={itemId}>
        <ShoppingCartItem itemId={itemId} idx={idx} />
      </tr>
    );
  });

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {content}
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

export default ShoppingCartTable;