import { Header } from "./Header";
import { Hero } from "./Hero";
import { Footer } from "./Footer";

export const App:React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
};
