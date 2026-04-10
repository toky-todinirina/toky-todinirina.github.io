import './styles/main.scss';
import Header from './components/layout/Header';
import About from './components/ui/About';
import Skills from './components/ui/Skills';
import Projects from './components/ui/Projects';
import Services from './components/ui/Services';
import Contact from './components/ui/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <div className="app-content">
        <Header />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
