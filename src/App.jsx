import './App.css'
import Navigation from './customer/components/Navigation'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop  from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignUp from './pages/LoginSignUp';
import Footer from './Footer/Footer';

function App() {

  return (
    <>
    <div className="">
      <BrowserRouter>
      <Navigation/>
      
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory category="men"/>}/>
        <Route path='/women' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kids"/>}/>
          <Route path='/product' element={<Product />}/>
        <Route/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>
      <Footer/>
      
      </BrowserRouter>
     
     
    </div>

    </>
  );
}

export default App
