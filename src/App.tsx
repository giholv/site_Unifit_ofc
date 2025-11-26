import Header from "./components/Header";
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import Founders from './components/Founders';
import Quotes from './components/Quotes';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Plans />
      <Testimonials />
      <Founders />
      <Quotes />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
