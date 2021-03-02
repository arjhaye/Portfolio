import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navb from './components/Navb'
import Banner from './components/Banner'
import Services from './components/Services'
import Abt from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navb />
      <Banner />
      <Services />
      <Abt />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
