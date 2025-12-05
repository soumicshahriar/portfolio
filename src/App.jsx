import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechSection from "./components/TechSection";

function App() {
  return (
    <div className="bg-[#030105]">
      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="techsection">
        <TechSection />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
