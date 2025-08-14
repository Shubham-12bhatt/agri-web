import { Wheat } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pesticidefree() {
  const riceTypes = [
    { title: 'Pesticide Residue Free Steam Rice', path: '/pesticide-free/steam'},
        { title: 'Pesticide Residue Free Sella Rice',  path: '/pesticide-free/sella' },
        { title: 'Pesticide Residue Free Golden Sella Rice',  path: '/pesticide-free/golden-sella'},
   
    
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-50 lg:h-80 sm:h-70 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/images/grain.png')",
          backgroundPosition: "center center",
        }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Text */}
        <h1 className=" relative z-10 text-4xl lg:text-6xl font-bold text-white text-center">
          Pesticide Free Rice
        </h1>
      </div>

      {/* Content Section */}
      <div className="bg-gradient-to-br from-green-50 to-green-100  pt-16 ">
        <div className="container mx-auto px-6 pb-5">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
              Pesticide Free Rice
            </h2>
             <div className="w-40 h-0.5  bg-gray-400 mx-auto"></div>
          </div>

          {/* Main Content Grid */}
          
            {/* Left Content */}
            <div className="bg-white/70 border-2 border-gray-300 rounded-lg p-8 mb-12 max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed text-justify">
              Pesticide-Free Rice is a type of rice that is cultivated without the use of synthetic pesticides or chemical fertilizers. This rice is grown using organic farming practices, which prioritize natural methods of pest control and soil enrichment. Pesticide-free rice is often considered healthier and more environmentally friendly compared to conventionally grown rice. It is available in various varieties, including Basmati and non-basmati types, and is popular among health-conscious consumers.
            </p>
          </div>
          </div>

          {/* Centered Content Grid */}
          <div className="bg-white py-10 mt-10  ">
          <div className="grid lg:grid-cols-2 gap-12 my-auto py-20 items-center max-w-5xl mx-auto">
            {/* Left - Rice Types List */}
            <div className="mx-20 lg:mx-0 space-y-3">
           {riceTypes.map((riceType, index) => (
  <Link 
    to={riceType.path}
    key={index}
    className="block"
  >
    <div className="flex items-center bg-[#193317] text-white mb-4 px-6 py-4 rounded-lg shadow-md
        transition-all duration-300 ease-in-out
        hover:bg-[#1e3d1a] hover:shadow-lg hover:-translate-y-1
        group">
      <Wheat className="w-5 h-5 mr-4 text-white transition-transform duration-300 group-hover:scale-110" />
      <span className="font-medium transition-all duration-300 group-hover:tracking-wide">
        {riceType.title}
      </span>
      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        →
      </div>
    </div>
  </Link>
))}
            </div>

            {/* Right - Image */}
         <div className="flex justify-center items-center">
  <div className="relative group cursor-pointer">
    <img
      src="/images/sample.jpg"
      alt="Hands holding basmati rice grains"
      className="w-full max-w-md h-auto rounded-2xl shadow-xl transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-2xl"
    />

    {/* Glowy gradient overlay */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 via-yellow-300 to-orange-400 opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-xl -z-20"></div>

    {/* Decorative blobs with animation */}
    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-60 -z-10 transition-all duration-700 ease-in-out group-hover:scale-125 group-hover:opacity-80 group-hover:bg-green-300 group-hover:-rotate-12"></div>
    <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-200 rounded-full opacity-60 -z-10 transition-all duration-700 ease-in-out group-hover:scale-125 group-hover:opacity-80 group-hover:bg-yellow-300 group-hover:rotate-12"></div>
  </div>
</div>
            </div>
            </div>
        </div>
      
    </div>
  );
}
