import { Wheat } from "lucide-react";

export default function BasmatiSharbati() {
  const riceVarieties = [
    {
      name: "Sharbati Raw Basmati",
      image: "/images/1121RawBasmati.jpg",
    },
    {
      name: "Sharbati Sella Basmati",
      image: "/images/1121Sella.webp",
    },
    {
      name: "Sharbati Steam Basmati",
      image: "/images/1121SteamBasmati.jpg",
    },
    {
      name: "Sharbati Golden Sella Basmati",
      image: "/images/1121GoldenSella.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-60 sm:h-70 lg:h-80 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/grain.png')",
          backgroundPosition: "center center",
        }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Text */}
        <h1 className="relative z-10 text-4xl lg:text-6xl font-bold text-white text-center">
          Sharbati Basmati Rice
        </h1>
      </div>

      {/* Content Section */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 pt-16">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
              Sharbati Basmati Rice
            </h2>
            <div className="w-24 h-0.5 bg-gray-400 mx-auto"></div>
          </div>

          {/* Description Box */}
          <div className="bg-white/70 border-2 border-gray-300 rounded-lg p-8 mb-16 max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed text-justify">
             Sharbati Basmati Rice is a premium variety of Basmati rice known for its exceptional aroma, long grains, and delicate flavor. It is primarily grown in the fertile regions of India, particularly in the states of Haryana and Punjab. Sharbati Basmati Rice is characterized by its slender, elongated grains that remain separate and fluffy when cooked. The rice has a distinct nutty aroma and a slightly sweet taste, making it a popular choice for various dishes, including biryanis, pulao, and fried rice. It is also known for its high nutritional value, being a good source of carbohydrates and essential nutrients.
            </p>
          </div>
        </div>

        {/* Variety Section */}
        <div className="bg-white py-10 mt-10 pb-30">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold pb-2 text-gray-800">
              Variety
            </h3>
            <div className="w-24 h-0.5 bg-gray-400 mx-auto"></div>
          </div>

          {/* Rice Variety Cards */}
         <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-6 gap-10 max-w-6xl lg:mx-auto mx-20">
  {riceVarieties.map((variety, index) => (
   <div
  key={index}
  className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-200 border border-transparent "
>
      {/* Image with subtle zoom */}
      <div className="aspect-square overflow-hidden">
        <img
          src={variety.image}
          alt={variety.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>

      {/* Label with matching glow */}
      <div className="bg-[#193317] text-white p-3 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(25,51,23,0.4)]">
        <div className="flex items-center justify-center space-x-2">
          <Wheat className="w-4 h-4 text-white" />
          <span className="text-sm font-medium text-center">
            {variety.name}
          </span>
        </div>
      </div>
    </div>
  ))}
</div>
        </div>
      </div>
    </div>
  );
}
