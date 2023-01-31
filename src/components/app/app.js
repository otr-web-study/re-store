import './app.css';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { HomePage, CartPage, BookPage } from '../pages';
import ShopHeader from '../shop-header';

const App = () => {
  const total = useSelector(state => state.cart.total);
  const count = useSelector(state => state.cart.count);
  return (
    <main role='main' className='container'>
      <ShopHeader numItems={count} total={total} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/books/:bookId' element={<BookPage />} />
      </Routes>
    </main>
  )
}

export default App;