import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-5 text-center">
      <h1 className="font-mono text-5xl">Build data science and AI skills</h1>
      <p className="text-lg">
        Unlock the power of data and AI by learning Python, <br /> ChatGPT, SQL,
        Power BI, and more.
      </p>
      <div className="space-x-4">
        <Link className="px-4 py-2 text-sm font-semibold border-2 rounded hover:bg-brand-green-hover border-brand-green bg-brand-green text-brand-blue">
          Start learning for free
        </Link>
        <Link className="px-4 py-2 text-sm font-semibold border-2 rounded hover:bg-gray-100 border-brand-blue text-brand-blue">
          Induscamp for business
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
