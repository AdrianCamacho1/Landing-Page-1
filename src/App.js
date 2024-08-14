import logo from './logo.svg';
import './App.css';
import  Header  from './components/Header';
import { CTA } from './components/CTA';
import {Desc} from './components/Desc';
import { PriceCard } from './components/PriceCard';
import FeaturesSection from './components/Features';
import {Footer} from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Desc />
      <FeaturesSection />
      <CTA />
      <PriceCard />
      <Footer />
    </div>
  );
}

export default App;
