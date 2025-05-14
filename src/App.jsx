import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import ShowcaseSection from "./sections/ShowcaseSection";
import Hero from "./sections/Hero";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    {/* <LogoShowcase /> */}
    <FeatureCards />
    <TechStack />
    <Contact />
    <Footer />
  </>
);

export default App;
