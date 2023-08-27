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
      <div className="App">
        <div className="container">
          <Navbar toggleSidebar={toggleSidebar} sidebarBtnIcon={sidebarBtnIcon} languageSetup={languageSetup} changeLanguage={changeLanguage} />
          {sidebarVisibility && <Sidebar toggleSidebar={toggleSidebar} languageSetup={languageSetup} changeLanguage={changeLanguage} />}
          <Routes>
            <Route path="/" element={<Home languageSetup={languageSetup} />} key="home" />
            <Route path="/gallery" element={<Gallery languageSetup={languageSetup} />} key="gallery" />
            <Route path="/gallery/:category" element={<Gallery languageSetup={languageSetup} />} key="gallery-with-filter" />
            <Route path="/about" element={<About languageSetup={languageSetup} />} key="about" />
            <Route path="/cv" element={<CV languageSetup={languageSetup} />} key="cv" />
            <Route path="/contact" element={<Contact languageSetup={languageSetup} />} key="contact" />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
