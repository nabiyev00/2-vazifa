import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Books from './Books';
import Header from './Header';
import Home from './Home';
import News from './News';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='wrapper'>
          <Header/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/books' element={<Books />} />
            <Route path='/news' element={<News/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
