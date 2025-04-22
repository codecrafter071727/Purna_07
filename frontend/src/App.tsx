import React from 'react';
// ... existing imports ...

// Import the Home component
import Home from './components/home';
import Footer from './components/footer';
import Middle from './components/middle';
import ContactUs from './components/contactus';

function App() {
  return (
    <div className="App bg-stone-300">
      {/* ... existing code ... */}
      <Home />
      <Middle />
      <ContactUs />
      <Footer />
      {/* ... existing code ... */}
    </div>
  );
}

export default App;