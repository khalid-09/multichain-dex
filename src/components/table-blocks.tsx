import { cn } from '@/lib/utils';

interface TableBlockProps {
  index: number;
}

const TableBlock = ({ index }: TableBlockProps) => {
  const heading = index === 0;
  return (
    <div className="grid grid-cols-3">
      <div
        className={cn(
          'border-r border-b flex items-center md:pl-8 border-[#D9D9D91A]',
          heading && 'justify-center pb-4 md:pb-0'
        )}
      >
        {heading ? (
          <h3 className="text-[#E4B40D] text-lg md:text-[28px] font-semibold">
            Comparison
          </h3>
        ) : (
          <p className="text-[#F0F0F0B2] text-base md:text-xl">
            {index}. Point no one
          </p>
        )}
      </div>
      <div
        className={cn(
          'border-b border-r border-[#D9D9D91A] flex justify-center items-center',
          heading && 'pb-3 md:pb-0'
        )}
      >
        {heading ? (
          <img src="/about.png" alt="moonex logo" />
        ) : (
          <img src="/right.png" alt="right icon" />
        )}
      </div>
      <div
        className={cn(
          'border-b flex items-center justify-center border-[#D9D9D91A]',
          heading && 'pb-4 md:pb-0'
        )}
      >
        {heading ? (
          <img src="/uniswap.png" alt="uniswap logo" />
        ) : (
          <img src="/wrong.png" alt="wrong icon" />
        )}
      </div>
    </div>
  );
};

export default TableBlock;
