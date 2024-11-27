import ConnectBtn from '@/components/connect-btn';
import Navbar from '@/components/navbar';

const Hero = () => {
  return (
    <section className="max-w-[83.938rem] min-h-svh relative mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
      {/* Yellow Light Effect */}
      {/* <div
        className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-[#E4B40D] opacity-20 blur-[100px] pointer-events-none"
        aria-hidden="true"
      ></div> */}

      <Navbar />
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between pt-16 lg:pt-0 relative z-10">
        <div
          id="content"
          className="text-white space-y-8 lg:space-y-12 w-full lg:w-[56.625rem] lg:absolute lg:top-[24.563rem] flex flex-col items-center lg:pl-12 lg:items-start"
        >
          <div className="space-y-4">
            <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4.688rem] leading-tight lg:leading-[4.523rem] text-center lg:text-left">
              Trusted Multi-Chain <br className="hidden lg:inline" />
              <span className="text-[#E4B40D]">DEX</span> Platform
            </h1>
            <h4 className="text-[#9E9E9E] text-lg sm:text-xl lg:text-2xl text-center lg:text-left">
              Trade, earn, and own crypto on the all-in-one multi-chain DEX
            </h4>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
            <ConnectBtn className="text-[#071624] w-full sm:w-auto" connect />
            <ConnectBtn connect={false} className="w-full sm:w-auto" />
          </div>
        </div>
        <div className="mt-12 lg:mt-0 lg:absolute lg:right-20 xl:right-10 lg:top-[16.438rem] relative z-0 lg:z-auto">
          <img
            src="/sphere.png"
            alt="hero"
            className="w-full max-w-md lg:max-w-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
