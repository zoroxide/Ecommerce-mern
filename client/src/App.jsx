// src/App.jsx

import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products'; //
import NavBar from './components/NavBar'; //
import Footer from './components/Footer'; //
import LoginPage from './pages/AdminLogin'; //
import ProductDetails from './pages/ProductDetails'; //
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} /> {/* Use `element` here */}
          <Route path="/admin" element={<LoginPage />} />
          <Route path="/" element={<Products />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
