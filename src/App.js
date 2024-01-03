import React, { useState } from 'react';
import './styles/App.scss';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Buyers from './components/Buyers';
import Sellers from './components/Sellers';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Neighborhoods from './components/Neighborhoods';
import MarketUpdates from './components/MarketUpdates';
import Properties from './components/Properties';
import Blog from './components/Blog';
import Communities from './components/Communities';
import Footer from './components/Footer';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div className="app neue">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="buyers" element={<Buyers />} />
        <Route path="sellers" element={<Sellers />} />
        <Route path="market-updates" element={<MarketUpdates />} />
        <Route path="properties" element={<Properties />} />
        <Route path="blog" element={<Blog />} />
        <Route path="neighborhoods" element={<Neighborhoods />} />
        <Route path="communities" element={<Communities />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
