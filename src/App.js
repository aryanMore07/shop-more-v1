import { Routes, Route } from 'react-router';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/homepage/Homepage';
import Cart from './pages/cartPage/CartPage';
import ProductListing from './pages/productListingpage/ProductListPage';
import Wishlist from './pages/wishlistPage/WishlistPage';
import IndividualProduct from './pages/individualProductPage/IndividualProductPage';
import Login from './pages/loginPage/LoginPage';
import Signup from './pages/sigupPage/SignupPage';
import RequireAuth from './auth/RequireAuth';
import MockmanComponent from './pages/mockman/Mockman';
import ErrorPage from './pages/errorPage/ErrorPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={
          <RequireAuth>
            <Cart />
          </RequireAuth>
        } />
        <Route path='/wishlist' element={
          <RequireAuth>
            <Wishlist />
          </RequireAuth>
        } />
        <Route path='/products' element={<ProductListing />} />
        <Route path='/products/:productId' element={<IndividualProduct />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/mockman' element={<MockmanComponent />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
