import React, { useState, useEffect} from 'react';
import  { Products } from './features/products/Products';
import { Cart } from './cart/Cart';
import {
  fetchAsync
} from './cart/cartSlice';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const [showCart, setShowCart] = useState(false);
  const items = useSelector((state)=>state.cart.items);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsync())
  }, [])


  return (
    <div className="App">
      <button onClick={()=>setShowCart(!showCart)}>Cart [{items.length}]</button>
      {showCart?<Cart />:<Products/>}
    </div>
  );
}

export default App;
