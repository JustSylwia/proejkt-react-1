import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import About from "./components/About";
import Service from "./components/Service";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Services />
      <Footer />
    </>
  );
}

export default App;
