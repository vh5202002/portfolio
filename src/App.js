import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Portfolio from './components/portfolio/Portfolio';
// import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';
const App = () => {
  return (
    <>
    <Header />
  
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Portfolio /> 
      {/* <Testimonials /> */}
      <Contact />
    </main>

    <Footer />
    <Scrollup />
    </>
  )
}

export default App;
