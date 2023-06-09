import 'modern-normalize';
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Benefits } from "./Benefits";
import { Services } from "./Services";
import { Values } from "./Values";
import { Team } from "./Team";
import { Projects } from "./Projects";
import { Contacts } from "./Contacts";
import { Scroll } from './Scroll';
import { Footer } from "./Footer";

export const App:React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <Values />
        <Team />
        <Projects />
        <Contacts />
        <Scroll />
      </main>
      <Footer />
    </>
  );
};