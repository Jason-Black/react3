import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import TechIcons from './components/TechIcons';
import Hero from './components/Hero2';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Hero />
     
      <Services />
      <Portfolio />
      <TechIcons />

      <ContactForm />
    </div>
  );
}

export default App;
