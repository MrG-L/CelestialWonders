import './App.css';
import NavBar from './components/NavBar/NavBar';
import CelestialList from './components/celestial-cards-home/CelestialList';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CelestialList />
      <Footer />
    </div>
  );
}

export default App;
