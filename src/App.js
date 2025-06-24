import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Banner from './components/banner/Banner'
import MovieShowing from './components/movie/movieShowing/movieShowing';
function App() {
  return (
    <Router>
      <Header />
      <Banner />
      <MovieShowing />
      <Footer />
    </Router>
  );
}

export default App;