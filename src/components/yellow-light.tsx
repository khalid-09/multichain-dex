import { cn } from '@/lib/utils';

interface YellowLightProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size?: string;
  blur?: string;
  opacity?: string;
}

const YellowLight = ({
  top,
  left,
  right,
  bottom,
  size = 'w-[500px] h-[500px]',
  blur = 'blur-[150px]',
  opacity = 'opacity-25',
}: YellowLightProps) => {
  return (
    <div
      className={cn(
        'absolute pointer-events-none rounded-full bg-[#E4B40D]',
        top,
        left,
        right,
        bottom,
        size,
        blur,
        opacity
      )}
      aria-hidden="true"
    />
  );
};

export default YellowLight;
