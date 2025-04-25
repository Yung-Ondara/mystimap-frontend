
import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Home from './pages/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './pages/Services.jsx';
import Product from './pages/Product.jsx';
import SignUp from './pages/SignUp.jsx';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Product/>} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
