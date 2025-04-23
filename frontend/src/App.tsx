import React from 'react';
import Home from './components/home';
import Footer from './components/footer';
import Middle from './components/middle';
import { ContactUs } from './components/contactus'; // Changed to named import
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Home />
      <Middle />
      <ContactUs />
      <Footer />
    </ThemeProvider>
  );
}

export default App;