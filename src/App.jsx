import "./App.css";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Quetions from "./sections/Quetions";

function App() {
  return (
    <>
      <div className="wrapper flex flex-col justify-between h-screen ">
        <div className="box">
          <header className="container px-[20px] mx-auto max-w-[1440px]">
            <Header />
          </header>
          <main className="container px-[20px] mx-auto max-w-[1440px] ">
            <Hero />
            <Quetions />
          </main>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
