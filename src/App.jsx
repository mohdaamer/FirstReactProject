import "./App.css";
import Navbar from './components/Navigation';
import Hero from './components/Hero'


function App() {
  return (
    <div className="App w-full h-screen overflow-hidden">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
