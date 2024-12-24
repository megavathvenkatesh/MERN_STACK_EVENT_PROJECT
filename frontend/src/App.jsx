import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Services from './components/Services';

const App = () => {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <Services/>
      <About />
      <Contact />
      <Footer />
    </Router>
  )
}

export default App
