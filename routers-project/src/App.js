import logo from './logo.svg';
import './App.css';
import About from './about'
import Home from './home'
import Contact from './contact';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';


function App() {
  return (
  <BrowserRouter>
  <Link to='/'>Home page</Link>
  <Link to='/About'>About page</Link>
  <Link to='/Contact'>Contact page</Link>
  <Routes> 

    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="*" element={<h1>404</h1>} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
