import { Wheat } from "lucide-react";

export default function Basmati1401() {
  const riceVarieties = [
    {
      name: "1401 Raw Basmati",
      image: "/images/1121RawBasmati.jpg",
    },
    {
      name: "1401 Sella Basmati",
      image: "/images/1121Sella.webp",
    },
    {
      name: "1401 Steam Basmati",
      image: "/images/1121SteamBasmati.jpg",
    },
    {
      name: "1401 Golden Sella Basmati",
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
          1401 Basmati Rice
        </h1>
      </div>

      {/* Content Section */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 pt-16">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
              1401 Basmati Rice
            </h2>
            <div className="w-24 h-0.5 bg-gray-400 mx-auto"></div>
          </div>

          {/* Description Box */}
          <div className="bg-white/70 border-2 border-gray-300 rounded-lg p-8 mb-16 max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed text-justify">
              1401 is an improved version of aromatic hybrid Basmati Rice. It is
              the first early maturing basmati rice variety & has high yield.
              Experience the fine taste and the mouth-watering aroma of the 1401
              Basmati Rice. Behold! These are not the only qualities associated
              with this newly developed variety of rice. It's each and every
              grain cooks to perfection and the mere sight and smell make it
              hard to resist the urge to taste it. This variant of rice is an
              improved version of the hybrid aromatic basmati rice with an
              average grain length of 7.3 mm. This variety of rice is relatively
              newer and hence, much better than others. Our experts go the extra
              mile during the production of the 1401 Basmati Rice. Order it now
              to taste the newly develop variety of rice, which also ranks among
              the best, and relish a taste like never before.
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
