import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/main.scss";

import Header from "./components/layout/Header";
import About from "./components/ui/About";
import Skills from "./components/ui/Skills";
import Experience from "./components/ui/Experience";
import Terminal from "./components/common/Terminal";
import Projects from "./components/ui/Projects";
import Services from "./components/ui/Services";
import Contact from "./components/ui/Contact";
import Footer from "./components/layout/Footer";
import Preloader from "./components/common/Preloader";

import ExperienceStory from "./pages/Stories/ExperienceStory";

function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)} />
      )}

      {!isLoading && (
        <div className="app-content">
          <Header />
          <About />
          <Services />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
          <Terminal />
          <Footer />
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route
          path="/experiences/:id"
          element={<ExperienceStory />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;