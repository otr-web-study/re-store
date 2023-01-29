import './app.css';
import { Routes, Route } from 'react-router-dom';

import { HomePage, CartPage } from '../pages';
import ShopHeader from '../shop-header';

const App = () => {
  return (
    <main role='main' className='container'>
      <ShopHeader numItems={5} total={10} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </main>
  )
}

export default App;