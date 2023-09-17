import "./App.css";
import Navbar from './components/Navigation';
import Hero from './components/Hero'
import Contactus from "./components/Contactus";


function App() {
  return (
    <div className="App w-full h-screen overflow-hidden">
      <Navbar />
      <Hero />
      {/* <Contactus /> */}
    </div>
  );
}

export default App;
