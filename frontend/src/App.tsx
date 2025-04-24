import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Home from './components/home';
import Footer from './components/footer';
import Middle from './components/middle';
import Team from './components/team';
import { ContactUs } from './components/contactus';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader onLoadingComplete={handleLoadingComplete} />}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <ThemeProvider>
          <BrowserRouter>
            <div className="flex flex-col min-h-screen">
              <div className="flex-grow">
                <Routes>
                  <Route path="/" element={
                    <>
                      <Home />
                      <Middle />
                    </>
                  } />
                  <Route path="/team" element={<Team />} />
                  <Route path="/contact" element={<ContactUs />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;