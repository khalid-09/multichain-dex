const Footer = () => {
  return (
    <footer className="bg-[#051422] p-4 md:h-80 ">
      <div className="mx-auto h-full max-w-[83.938rem]">
        <div className="h-full flex flex-col-reverse gap-6 md:gap-0  md:flex-row items-center justify-between">
          <img src="/footer-logo.png" />
          <nav className="text-white  md:w-[33.438rem]">
            <ul className="flex gap-4 text-lg font-extrabold w-full justify-between items-center">
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Roadmap</a>
              </li>
              <li>
                <a href="/">FAQs</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </nav>
          <div className="flex mt-10 md:mt-0 pb-10 md:pb-0 flex-col items-center gap-6">
            <h3 className="text-white font-extrabold text-3xl">
              Contact <span className="text-[#E4B40D]">Us</span>
            </h3>
            <div className="flex w-[11.563rem] items-center justify-between">
              <img src="/Telegram.png" alt="Telegram Logo" />
              <img src="/Reddit.png" alt="Reddit Logo" />
              <img src="/Twitter.png" alt="Twiiter Logo" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
