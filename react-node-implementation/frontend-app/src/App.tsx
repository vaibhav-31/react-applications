import React from 'react';
// import axios from 'axios';
import { 
  // useEffect, 
  useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import './components/ProductList';
import { addProduct, deleteProduct } from './actions/index';
import { ReduxStore } from './reducer';
// import { Product } from './types';
import ProductList from './components/ProductList';

// const SERVER_URL = "http://localhost:8080";

//React version of calling an api

function App() {
  // const [products, setProducts] = useState<Product[] | null>(null);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch(); // Dispatching actions 
  const products = useSelector((store: ReduxStore) => {
    // taking data from redux store
    return store.products;
  });


  const onAdd = async () => {
    if (!title.trim()) {
      return;
    }
    // const response = await axios.post(SERVER_URL + "/product", {
    //   title,
    // });
    // setProducts(response.data.data);
    dispatch(addProduct(title));
    setTitle("");
  };

  const onDelete = async (id: number) => {
    dispatch(deleteProduct(id));
    // await axios.delete(`${SERVER_URL}/product/${id}`);
    // setProducts((products || []).filter((item) => item.id !== id));
  };

  // useEffect(() => {
  //   axios.get(SERVER_URL + "/products").then((response) => {
  //     setProducts(response.data.data);
  //   });
  // }, []);

  return (
    <div className="App">
      <div>
        <input className="new-product-input" type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <button className="add-product-button" onClick={onAdd}>Add</button>
      </div>
      {products ? <ProductList data={products} deleteProduct={onDelete} /> : null}
    </div>
  );
}

export default App;
