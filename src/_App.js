import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Progects from "./pages/Progects";
import Contact from "./pages/Contact";

import { motion, useScroll, useSpring } from "framer-motion";


const App = () => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="flex flex-col bg-back  text-text   ">
      <Header />
        <motion.div className="progress-bar" style={{ scaleX }} />
      <main className=" mt-16  ">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Progects />
        <Contact />

        <Footer />
      </main>
    </div>
  );
};

export default App;
