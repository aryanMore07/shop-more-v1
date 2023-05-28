import { Routes, Route } from 'react-router';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/homepage/Homepage';
import Cart from './pages/cartPage/CartPage';
import ProductListing from './pages/productListingpage/ProductListPage';
import Wishlist from './pages/wishlistPage/WishlistPage';
import IndividualProduct from './pages/individualProductPage/IndividualProductPage';
import RequireAuth from './auth/RequireAuth';
import MockmanComponent from './pages/mockman/Mockman';
import ErrorPage from './pages/errorPage/ErrorPage';
import Authentication from './pages/loginPage/Authentication';
import UserProfile from './pages/UserProfilePage/UserProfilePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        <Route path='/user-profile' element={<RequireAuth>
          <UserProfile />
        </RequireAuth>} />
        <Route path='/products' element={<ProductListing />} />
        <Route path='/products/:productId' element={<RequireAuth>
          <IndividualProduct />
        </RequireAuth>} />
        <Route path='/login' element={<Authentication />} />
        <Route path='/mockman' element={<MockmanComponent />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
