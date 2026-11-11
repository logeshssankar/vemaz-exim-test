import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Companies from './pages/Companies'
import Brands from './pages/Brand'
import GlobalPresence from './pages/GlobalPresence'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'





// function About() {
//   return <h1>About Us</h1>;
// }

// function Companies() {
//   return <h1>Our Companies</h1>;
// }

// function Brands() {
//   return <h1>Our Brands</h1>;
// }



// function Contact() {
//   return <h1>Contact Us</h1>;
// }

function App() {
  return(
    <BrowserRouter>

    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/global-presence" element={<GlobalPresence />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App
