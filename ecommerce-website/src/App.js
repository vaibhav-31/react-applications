
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Containers/Header';
import ProductListing from './Containers/ProductListing';
import ProductDetail from './Containers/ProductDetail';
import ProductComponent from './Containers/ProductComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Header />
         <Routes>
           <Route path="/" element={<ProductListing />} />
           <Route path="/product/:productId" element={<ProductDetail />} />
           {/* <Route path="/" element={<ProductComponent />} /> */}
           <Route path ="*">404 - Page Not Found!</Route>
         </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
