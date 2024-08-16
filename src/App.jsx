import { useEffect, useState } from "react";
import About from "./components/About";
import ComingSoon from "./components/ComingSoon";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Main from "./components/Main";
import ServicesSection from "./components/ServicesSection";
import Form from "./components/Form";
import Header from "./components/Header";
import BottomNavigation from "./components/BottomNavigation";

function App() {
  const [comingSoon, setComingSoon] = useState(true);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const devMode = queryParams.get("dev");

    if (devMode === "1") {
      setComingSoon(false);
    }
  }, []);

  return (
    <>
      {comingSoon ? (
        <ComingSoon />
      ) : (
        <main className="w-full bg-slate-50">
          <Header />
          <Main />
          <section className="lg:container mx-auto w-full pb-8 px-4 flex flex-col gap-16">
            <About />
            <Gallery />
            <ServicesSection />
            <Contact />
            <Form />
            <BottomNavigation />
          </section>
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;
