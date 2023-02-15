import { Link } from 'react-router-dom';

import './shop-header.css';

interface ShopHeaderProps {
  numItems: number,
  total: number,
}

const ShopHeader = ({ numItems, total }: ShopHeaderProps) => {
  return (
    <header className="shop-header row">
      <Link to="/" className="logo text-dark">
        ReStore
      </Link>
      <Link to="/cart" className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {numItems} items (${total})
      </Link>
    </header>
  );
};

export default ShopHeader;