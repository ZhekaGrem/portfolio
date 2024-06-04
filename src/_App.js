import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";



const App = () => {
  return (
    <div className="flex flex-col h-screen justify-between bg-back text-text ">
      <Header />
      <main>
        {/* 
      <Home />
      <About />
      <Skills/>
      <Experience/>
      <Progects />
      <Contact />
    */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
