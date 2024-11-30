import { cn } from '@/lib/utils';
import ConnectBtn from './connect-btn';
import MobileNav from './mobile-nav';
import { useLenis } from 'lenis/react';

export const navLinks = [
  {
    name: 'Home',
    to: '#home',
    colorChange: true,
  },
  {
    name: 'About Us',
    to: '#about',
    colorChange: false,
  },
  {
    name: 'Roadmap',
    to: '#roadmap',
    colorChange: false,
  },
  {
    name: 'FAQs',
    to: '#faqs',
    colorChange: false,
  },
  {
    name: 'Contact Us',
    to: '#contact',
    colorChange: false,
  },
];

const Navbar = () => {
  const lenis = useLenis();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    target: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(target) as HTMLElement;
    if (element && lenis) {
      lenis.scrollTo(element);
    } else {
      console.error('Lenis instance or target element is not available');
    }
  };

  return (
    <header className="md:pt-12 pt-6 flex font-raleway mx-auto items-center justify-between">
      <img src="/logo.png" alt="logo" width={184} height={73} />
      <nav className="w-[41.5rem] hidden lg:block ">
        <ul className="flex items-center justify-between text-white text-lg font-extrabold">
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.to}
                className={cn('', link.colorChange && 'text-[#E4B40D]')}
                onClick={e => handleLinkClick(e, link.to)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <ConnectBtn connect className="md:block hidden" />
      <MobileNav />
    </header>
  );
};

export default Navbar;
