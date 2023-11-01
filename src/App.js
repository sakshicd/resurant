import React from 'react';

import Navbar from './components/Navbar';
import './assets/css/style.css';
import Home from './components/Home';
import About from './components/About';
import Category from './components/Category';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact'; 
const App =() =>{
  return (
    <>
    <Navbar />
    <Home/>
    <About />
    <Category/>
    < Menu />
    <Testimonial/>
    <Contact/>
    <Footer/>
    </>
  );
};
         

export default App;
