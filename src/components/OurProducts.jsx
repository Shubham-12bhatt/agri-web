import {
  Award,
  Target,
  Wheat,
  Globe,
} from "lucide-react";

import ProductSlider from "./ProductSlider";


const OurProducts = () => {
  return (
   <div className="lg:py-25 ">
      {/* Products Section */}
      <div id="products" className="container mx-auto px-6">
        {/* Header with Navigation */}
        <div className="flex items-center h-50 justify-center ">
          <h2 className="text-5xl lg:text-6xl mt-10 font-semibold textgreen">
            Our Products
          </h2>
         

        </div>
        <ProductSlider></ProductSlider>
       
      </div> 

      {/* Statistics Section */}
        <div
        className="py-16 relative overflow-hidden"
        style={{
          backgroundImage: `url("/images/Counter.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Dark overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">25+</div>
              <div className="text-sm opacity-90">Year Of Experience</div>
            </div>

            {/* Stat 2 */}
            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">100+</div>
              <div className="text-sm opacity-90">High Quality</div>
            </div>

            {/* Stat 3 */}
            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                <Wheat className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">25+</div>
              <div className="text-sm opacity-90">Best Harvesting</div>
            </div>

            {/* Stat 4 */}
            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">25+</div>
              <div className="text-sm opacity-90">Country Exported</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;