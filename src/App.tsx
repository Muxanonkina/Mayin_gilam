import Header from './components/Header';
import Hero from './components/Hero';
import Carpets from './components/Carpets';
import Services from './components/Services';
import About from './components/About';
import MapSection from './components/MapSection';
import Contacts from './components/Contacts';
import { LOGO_TEXT } from './constants';

function App() {
  return (
    <div className="page">
      <Header />

      <Hero />

      <main className="page__main">
        <Carpets />
        <Services />
        <About />
        <MapSection />
        <Contacts />
      </main>

      <footer className="site-footer">
        <p>© 2026 {LOGO_TEXT}. Сделано с любовью к коврам</p>
      </footer>
    </div>
  );
}

export default App;
