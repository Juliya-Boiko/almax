import { Header } from "./Header";
import { Hero } from "./Hero";
import { Benefits } from "./Benefits";
// import { Services } from "./Services";
import { Values } from "./Values";
import { Footer } from "./Footer";

export const App:React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        {/* <Services /> */}
        <Values />
      </main>
      <Footer />
    </>
  );
};
