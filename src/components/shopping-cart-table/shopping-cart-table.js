import { useSelector } from 'react-redux';

import { selectAllCartIds } from '../../features/cart';

import ShoppingCartItem from '../shopping-cart-item';
import './shopping-cart-table.css';

const ShoppingCartTable = () => {
  const cartItemIds = useSelector(selectAllCartIds);

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
        Total: $201
      </div>
    </div>
  );
};

export default ShoppingCartTable;