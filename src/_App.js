import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <body className="flex flex-col h-screen justify-between bg-back text-text ">
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
    </body>
  );
};

export default App;
