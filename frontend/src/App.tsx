import React from 'react';
import Home from './components/home';
import Footer from './components/footer';
import Middle from './components/middle';
import ContactUs from './components/contactus';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App w-full overflow-x-hidden">
        <Home />
        <Middle />
        <ContactUs />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;