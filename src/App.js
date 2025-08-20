import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Cart from './Pages/Cart/Cart';
import StoreContextProvider from "./context/StoreContext";
import { useState } from 'react';
import LoginPopup from './Components/LoginPopup/LoginPopup';

const App = () => {
    const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    {showLogin && <LoginPopup setShowLogin={setShowLogin}/>}
    <div>
      <Navbar setShowLogin ={setShowLogin}  />
      <StoreContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </StoreContextProvider>
      <Footer />
    </div>
    </>
  )
}

export default App