import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './components/layout/Layout';
import Shop from './components/shop/Shop';
import Cart from './components/cart/Cart';
import { Provider } from 'react-redux';
import { store } from './components/redux/Store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="shop" element={<Shop />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

