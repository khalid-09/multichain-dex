import FeatureBox from '@/components/feature-box';
import TableBlock from '@/components/table-blocks';

const tableData = [
  { heading: true, index: 0 },
  { heading: false, index: 1 },
  { heading: false, index: 2 },
  { heading: false, index: 3 },
  { heading: false, index: 4 },
  { heading: false, index: 5 },
];

const About = () => {
  return (
    <section className="text-white max-w-[83.938rem]  mx-auto">
      <h2 className="md:text-5xl text-4xl font-extrabold pl-14 mb-10">
        Why <span className="text-[#E4B40D]">MoonEX</span> ?
      </h2>
      <div className="bg-[#BBBBBB1A] rounded-lg p-4 sm:p-6 md:p-8 ">
        {tableData.map(({ heading, index }) => (
          <TableBlock heading={heading} index={index} key={index} />
        ))}
      </div>
      <h2 className=" text-5xl font-extrabold text-center w-full my-14">
        Our <span className="text-[#E4B40D]">Features</span>
      </h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 p-6 gap-6 md:gap-10">
        <FeatureBox />
        <FeatureBox />
        <FeatureBox />
        <FeatureBox />
      </div>
    </section>
  );
};

export default About;
