import { Wheat } from "lucide-react";

export default function Steam() {
  const riceVarieties = [
    {
      name: "1121 Pesticide Residue Free Steam Rice",
      image: "/images/Steam/1.jpg",
    },
    {
      name: "1509 Pesticide Residue Free Steam Rice",
      image: "/images/Steam/2.jpg",
    },
    {
      name: "PUSA Basmati Pesticide Residue Free Steam Rice",
      image: "/images/Steam/3.jpg",
    },
    {
      name: "Sharbati Pesticide Residue Free Steam Rice",
      image: "/images/Steam/4.jpg",
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
          Pesticide Residue Free Steam Rice
        </h1>
      </div>

      {/* Content Section */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 pt-16">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
              Pesticide Residue Free Steam Rice
            </h2>
            <div className="w-24 h-0.5 bg-gray-400 mx-auto"></div>
          </div>

          {/* Description Box */}
          <div className="bg-white/70 border-2 border-gray-300 rounded-lg p-8 mb-16 max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed text-justify">
             Pesticide Residue Free Steam Rice is a premium variety of rice that is cultivated without the use of synthetic pesticides or chemical fertilizers. This rice is processed using steam before milling, which enhances its flavor and texture while ensuring it is free from harmful residues. Pesticide Residue Free Steam Rice is known for its long grains, aromatic flavor, and fluffy texture when cooked. It is a popular choice for health-conscious consumers and is often used in various culinary applications, including biryanis, pilafs, and steamed rice dishes. This rice is available in both Basmati and non-basmati varieties, making it versatile for different cuisines. It is also appreciated for its nutritional benefits, as it retains essential vitamins and minerals during the steaming process.
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
