import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
function App() {
  return (
    <Router>
      <Header />
      <Footer />
    </Router>
  );
}

export default App;