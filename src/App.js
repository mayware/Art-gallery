import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Gallery from "./components/Gallery"
import Contact from "./components/Contact";
import About from "./components/About";
import CV from "./components/CV";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  const [sidebarVisibility, setSidebarVisbility] = useState(false);
  const [sidebarBtnIcon, setSidebarBtnIcon] = useState(false);

  function toggleSidebar() {
    setSidebarVisbility(!sidebarVisibility);
    setSidebarBtnIcon(!sidebarBtnIcon)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Navbar toggleSidebar={toggleSidebar} sidebarBtnIcon={sidebarBtnIcon} />
          {sidebarVisibility && <Sidebar toggleSidebar={toggleSidebar} />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
