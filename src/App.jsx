import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Main from "./components/Main";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <main className="w-full">
      <Main />
      <section className="md:container mx-auto w-full py-8 px-4 flex flex-col gap-16">
        <About />
        <ServicesSection />
        <Gallery />
        <Contact />
      </section>
      <Footer />
    </main>
  );
}

export default App;
