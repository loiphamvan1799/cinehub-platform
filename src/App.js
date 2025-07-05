import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Banner from './components/banner/Banner'
import MovieShowing from './components/movie/movieShowing/movieShowing';
import MovieReview from './components/review/review';
import PromotionalNews from './components/promotionalNews/promotionalNews';
import AdvertiseSection from './components/Advertise/AdvertiseSection/AdvertiseSection';
import Description from './components/Description/Description';
function App() {
  return (
    <Router>
      <Header />
      <Banner />
      <MovieShowing />
      <MovieReview />
      <PromotionalNews />
      <AdvertiseSection />
      <Description />
      <Footer />
    </Router>
  );
}

export default App;