import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface ConnectBtnProps {
  className?: string;
  connect: boolean;
}

const ConnectBtn = ({ className, connect }: ConnectBtnProps) => {
  return (
    <Button
      className={cn(
        'rounded-full  text-inherit font-extrabold w-[9.938rem] h-[2.938rem] ',
        connect
          ? `${className} bg-gradient-to-r from-[#E4B40D] to-[#FFE68FD6]`
          : `${className} bg-[#071624] text-[#E4B40D] border-2 border-[#E4B40D]`
      )}
    >
      {connect ? 'Connect Wallet' : 'Trade Crypto'}
    </Button>
  );
};

export default ConnectBtn;
