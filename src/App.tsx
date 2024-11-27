import FAQS from './sections/faq';
import Footer from './sections/footer';
import Hero from './sections/hero';

const App = () => {
  return (
    <main className="min-h-screen bg-[#071624] overflow-x-hidden">
      <Hero />
      <FAQS />
      <Footer />
    </main>
  );
};

export default App;
