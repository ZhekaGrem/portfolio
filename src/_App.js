import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Progects from "./pages/Progects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="flex flex-col bg-back  text-text min-h-screen  ">
      <Header />
      <main className="flex-grow mt-16  ">
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
