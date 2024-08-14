import { Image } from "@nextui-org/react";
import Main from "./components/Main";
import RoomImage1 from "./assets/img/room-2.jpg";
import { Services } from "../Utils";

function App() {
  return (
    <main className="w-full">
      {/* <Main /> */}
      <section className="md:container mx-auto w-full py-8 px-4">
        <h2 className="w-full text-center lg:text-4xl md:text-3xl text-2xl font-bold mb-6">
          Neler Sunuyoruz?
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 place-items-center">
          {Services.map((item, index) => (
            <Image
              key={index}
              className="aspect-video"
              alt={item.desc}
              src={item.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
