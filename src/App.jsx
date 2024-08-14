import Gallery from "./components/Gallery";
import Main from "./components/Main";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <main className="w-full">
      {/* <Main /> */}
      <section className="md:container mx-auto w-full py-8 px-4 flex flex-col gap-16">
        <ServicesSection />
        <Gallery />
      </section>
    </main>
  );
}

export default App;
