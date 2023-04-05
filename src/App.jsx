import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import CelestialList from './components/celestial-cards-home/CelestialList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CelestialList />
    </div>
  );
}

export default App;
