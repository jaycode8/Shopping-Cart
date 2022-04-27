import './App.css'
import Card from './components/Card/Card';
import Cart from './components/Cart/Cart';
import { CartProvider } from 'react-use-cart';

const App = () => {
  return (
    <div>
        <CartProvider>
          <Card/>
          <Cart/>
        </CartProvider>
    </div>
  );
};

export default App;