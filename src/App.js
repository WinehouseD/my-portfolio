import React from "react";
import "./index.css";
import ProgressBar from "./components/animations/progressBar/ProgressBar";
import Loader from "./components/animations/loader/Loader";
import About from "./components/About";
import Skills from "./components/Skills";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact";
import BackgroundAnimation from "./components/animations/background/BackgroundAnimation";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import useLoader from "./hooks/useLoader";

function App() {
  const showLoader = useLoader();

  return (
    <div>
      {!showLoader && <Loader />}
      {showLoader && (
        <>
          <BackgroundAnimation />
          <ProgressBar />
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
