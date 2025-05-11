
import { Marketplace } from './pages/Marketplace';
import { Cart } from './pages/Cart';
import {Routes, Route} from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Summary } from './pages/Summary';
import { CartProvider } from './context/CartContext';
import { Confirmation } from './pages/Confirmation';
const App =()=> {
  return <CartProvider>
    <NavBar />
    <Routes>
      <Route path="/" element={<Marketplace />} />
      <Route path="/Koszyk" element={<Cart />} />
      <Route path="/Podsumowanie" element={<Summary />} />
      <Route path="/Potwierdzenie" element={<Confirmation />}/>
    </Routes>
  </CartProvider>
  
}
export default App;
