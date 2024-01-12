import React, { useEffect, useState } from "react";
import "./index.css";
import ProgressBar from "./components/ProgressBar";
import Loader from "./components/Loader";
import About from "./components/About";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Animation from "./components/background/Animation";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (performance.navigation.type === 1) {
      setShowLoader(true);

      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 6000);

      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <div>
      {showLoader && <Loader />}
      {/* <Animation /> */}
      <ProgressBar />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
