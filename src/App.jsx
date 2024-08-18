import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Main from "./components/Main";
import ServicesSection from "./components/ServicesSection";
import Form from "./components/Form";
import Header from "./components/Header";

function App() {
  return (
    <main className="w-full bg-slate-50">
      <Header />
      <Main />
      <section className="lg:container mx-auto w-full pb-8 px-4 flex flex-col gap-16">
        <About />
        <Gallery />
        <ServicesSection />
        <Contact />
        <Form />
      </section>
      <Footer />
    </main>
  );
}

export default App;
