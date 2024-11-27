import ConnectBtn from './connect-btn';
const Navbar = () => {
  return (
    <header className="pt-12 flex mx-auto items-center  justify-between">
      <img src="/logo.png" alt="logo" width={184} height={73} />
      <nav className="w-[41.5rem] hidden lg:block ">
        <ul className="flex items-center justify-between text-white text-lg font-extrabold">
          <li className="text-[#EDD955]">
            <a href="/">Home</a>
          </li>
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
      <ConnectBtn connect />
    </header>
  );
};

export default Navbar;
