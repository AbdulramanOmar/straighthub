import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sectors from "./components/Sectors";
import Services from "./components/Services";
import Training from "./components/Training";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Sectors />
      <Training />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
