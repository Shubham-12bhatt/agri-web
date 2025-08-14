export default function Labelling() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url("/images/label.png")`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content Container */}
      <div className=" flex lg:mx-20 mx-auto container px-6 relative z-10">
        <div className="grid  lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div className="space-y-8">
            {/* Main Headlines */}
            <div className="space-y-4 pb-10 ">
              <h1 className="text-6xl flex justify-center lg:block lg:text-7xl font-bold textgreen">
                Your Brand
              </h1>
              <h2 className="text-6xl flex justify-center lg:block lg:text-7xl font-bold text-navy-900">
                Our Expertise
              </h2>
            </div>

            {/* Description Text */}
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 lg:min-w-3xl">
              <p className="text-white text-xl lg:text-xl leading-relaxed">
                Discover the richness of tradition with Agri India's premium
                rice collection, where every grain is a promise of purity,
                aroma, and taste. Grown in the finest fields and carefully
                processed, our rice varieties are perfect for homes, hotels, and
                global markets seeking excellence in every bite.
              </p>
            </div>
          </div>

          {/* Right Content - Product Image */}
          
        </div>
      </div>
    </div>
  );
}
