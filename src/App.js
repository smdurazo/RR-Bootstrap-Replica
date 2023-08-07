import './App.css';
import Navbar from './components/NavBar';
import Background from './components/Background';
import StoreListings from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;
