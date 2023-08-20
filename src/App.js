import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Gallery from "./components/Gallery"
import Contact from "./components/Contact";
import About from "./components/About";
import CV from "./components/CV";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [sidebarVisibility, setSidebarVisbility] = useState(false);
  const [sidebarBtnIcon, setSidebarBtnIcon] = useState(false);
  const [languageSetup, setlanguageSetup] = useState("en");

  useEffect(() => {
    const storedLanguage = localStorage.getItem('languageSetup');
    if (storedLanguage) {
      setlanguageSetup(storedLanguage);
    }

    const handleResize = () => {
      if (window.innerWidth > 900) {
        setSidebarVisbility(false);
        setSidebarBtnIcon(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleSidebar() {
    if (sidebarVisibility) {
      document.body.style.overflow = "auto";
      setSidebarVisbility(!sidebarVisibility);
      setSidebarBtnIcon(!sidebarBtnIcon);
    } else {
      document.body.style.overflow = "hidden";
      setSidebarVisbility(!sidebarVisibility);
      setSidebarBtnIcon(!sidebarBtnIcon)
    }
  }

  function changeLanguage(lng) {
    localStorage.setItem('languageSetup', lng);
    setlanguageSetup(lng);
  }

  return (
    <BrowserRouter>
      <ScrollToTop>
        <div className="App">
          <div className="container">
            <Navbar toggleSidebar={toggleSidebar} sidebarBtnIcon={sidebarBtnIcon} languageSetup={languageSetup} changeLanguage={changeLanguage} />
            {sidebarVisibility && <Sidebar toggleSidebar={toggleSidebar} languageSetup={languageSetup} changeLanguage={changeLanguage} />}
            <Routes>
              <Route path="/" element={<Home />} key="home" />
              <Route path="/gallery" element={<Gallery />} key="gallery" />
              <Route path="/about" element={<About languageSetup={languageSetup} />} key="about" />
              <Route path="/contact" element={<Contact />} key="contact" />
              <Route path="/cv" element={<CV />} key="cv" />
            </Routes>
          </div>
          <Footer />
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
