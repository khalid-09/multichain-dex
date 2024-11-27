import Rings from './components/rings';
import YellowLight from './components/yellow-light';
import About from './sections/about';
import FAQS from './sections/faq';
import Footer from './sections/footer';
import Hero from './sections/hero';

const App = () => {
  return (
    <main className="relative bg-[#071624] min-h-screen overflow-hidden">
      <YellowLight top="top-0" left="left-48" size="w-[400px] h-[300px]" />
      <Rings />
      <Hero />
      <About />
      <div className="relative">
        <YellowLight
          top="top-1/2"
          left="-left-36"
          size="w-[400px] h-[200px]"
          opacity="opacity-20"
        />
        <FAQS />
      </div>
      <Footer />
    </main>
  );
};

export default App;
