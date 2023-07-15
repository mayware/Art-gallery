import { BrowserRouter, Routes, Router } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery"
import CV from "./components/CV";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
