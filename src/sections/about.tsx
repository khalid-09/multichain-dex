import FeatureBox from '@/components/feature-box';
import TableBlock from '@/components/table-blocks';
import YellowLight from '@/components/yellow-light';

const featuresData = [
  {
    img: '/dollar.png',
    title: 'Cheapest TXs',
    description:
      'Exchange popular digital currencies at the cheapest possible transaction price.',
  },
  {
    img: '/shield.png',
    title: 'CerTIK',
    description:
      'We are audited by clertik. Clertik is the leading security-focused ranking platform.',
  },
  {
    img: '/phone.png',
    title: 'No Contract Sells',
    description: 'No contract sells to fund marketing wallets.',
  },
  {
    img: '/options.png',
    title: 'CrossDex Support',
    description:
      'Exchange popular digital currencies at the cheapest possible transaction price.',
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative mt-20 text-white max-w-[83.938rem] mx-auto"
    >
      <h2 className="md:text-5xl text-4xl text-center md:text-start font-neueMachina font-extrabold md:pl-14 mb-10">
        Why <span className="text-[#E4B40D]">MoonEX</span> ?
      </h2>
      <div className="relative">
        <YellowLight
          top="translate-y-32"
          left="left-[30%]"
          size="w-[200px] h-[300px]"
          blur="blur-[150px]"
          opacity="opacity-40"
        />
        <div className="bg-[#BBBBBB1A] font-neueMachina rounded-lg p-4 mx-3 sm:p-6 md:p-8 relative z-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <TableBlock index={i} key={i} />
          ))}
        </div>
      </div>
      <h2 className="text-5xl font-neueMachina font-extrabold text-center w-full my-14">
        Our <span className="text-[#E4B40D]">Features</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3 gap-6 md:gap-10">
        {featuresData.map(({ img, title, description }, i) => (
          <FeatureBox
            key={i}
            image={img}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
