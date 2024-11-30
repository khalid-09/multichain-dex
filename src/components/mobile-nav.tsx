import { useState } from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from './ui/button';
import { Menu, Home, User, Settings, Phone } from 'lucide-react';
import ConnectBtn from './connect-btn';
import { useLenis } from 'lenis/react';
import { navLinks } from './navbar';

const MobileNav = () => {
  const lenis = useLenis();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    target: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(target) as HTMLElement;
    if (element && lenis) {
      lenis.scrollTo(element);
      setIsSheetOpen(false);
    }
  };

  const navLinksWithIcons = [
    { ...navLinks[0], icon: <Home /> },
    { ...navLinks[1], icon: <User /> },
    { ...navLinks[3], icon: <Settings /> },
    { ...navLinks[4], icon: <Phone /> },
  ];

  return (
    <div className="md:hidden block">
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className="bg-[#E4B40D] hover:bg-[#E4B40D]/80 transition"
            onClick={() => setIsSheetOpen(true)}
          >
            <Menu className="size-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-[#071624] font-raleway text-white flex flex-col justify-between p-6">
          <SheetHeader className="text-center mb-4">
            <SheetTitle className="flex text-white items-center justify-center gap-2 text-lg font-semibold">
              <Menu className="w-6 h-6" />
              Navigation
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 flex items-center justify-center">
            <ul className="flex flex-col gap-4 text-center">
              {navLinksWithIcons.map(link => (
                <li
                  key={link.to}
                  className="flex items-center gap-4 justify-center"
                >
                  <a
                    href={link.to}
                    className="flex items-center gap-2 text-lg font-medium hover:underline transition"
                    onClick={e => handleLinkClick(e, link.to)}
                  >
                    {link.icon}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <SheetFooter className="mt-4">
            <SheetClose asChild>
              <ConnectBtn connect className="w-full font-raleway" />
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
