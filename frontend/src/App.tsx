import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Footer from './components/footer';
import Middle from './components/middle';
import Team from './components/team';
import { ContactUs } from './components/contactus';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={
                <>
                  <Home />
                  <Middle />
                  <ContactUs />
                </>
              } />
              <Route path="/team" element={<Team />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;