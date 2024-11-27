interface FeatureBoxProps {
  image: string;
  title: string;
  description: string;
}

const FeatureBox = ({ image, title, description }: FeatureBoxProps) => {
  return (
    <div className="bg-[#BBBBBB1A] rounded-xl text-white border border-slate-700 border-opacity-30  p-8">
      <div className="h-[4.25rem]   rounded-full bg-[#D9D9D91A] flex items-center justify-center w-[4.25rem]">
        <img src={image} alt="dollar logo" />
      </div>
      <div>
        <h3 className="text-xl font-semibold mt-6">{title}</h3>
        <p className="text-[#B6B6B6] mt-2">{description}</p>
      </div>
    </div>
  );
};

export default FeatureBox;
