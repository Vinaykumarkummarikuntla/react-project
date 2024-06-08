import logo from './logo.svg';
import './App.css';
import ProductShows from './ProductShows';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductInfo from './productInfo';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "" element= {<ProductShows/>}/>
      <Route path = "pinfo/:movieid" element= {<ProductInfo/>}/>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
