import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Banner from './components/banner/Banner'
function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Banner />
      </main>
      <Footer />
    </Router>
  );
}

export default App;