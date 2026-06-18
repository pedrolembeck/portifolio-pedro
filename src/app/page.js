
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <main className="bg-[#030712] text-white overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
  );
}