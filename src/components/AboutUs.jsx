import { Target, Eye } from "lucide-react";

export default function AboutUs() {
  return (
    <div id="AboutUs" className="relative py-25  lg:py-10 overflow-hidden">
     
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl mt-5 lg:text-6xl font-semibold textgreen mb-6">
            About Us
          </h2>
          <h3 className="text-2xl lg:text-4xl font-semibold  mb-8">
            Why Choose Agri India Foods?
          </h3>
          <p className="text-gray-700 text-lg lg:text max-w-4xl mx-auto leading-relaxed">
            With over 20 years of expertise in rice cultivation and export, Agri India Foods has earned a reputation as a reliable partner for buyers around the globe. We specialize in delivering premium-quality Indian rice that meets the highest international standards.

          </p>
        </div>
        






        {/* Mission and Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Our Mission Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-lg shadow-gray-400 hover:shadow-gray-600 transition-all duration-300 border border-green-100">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 textgreen" />
              </div>
              <h4 className="text-xl lg:text-2xl font-semibold text-navy-900">
                Our Mission
              </h4>
            </div>
            <p className="text-gray-700 text-center leading-relaxed">
              To lead the global rice export industry by delivering premium-quality Indian rice, while honoring our agricultural heritage and building sustainable, long-term partnerships that empower farmers and serve global markets with integrity.
            </p>
          </div>

          {/* Our Vision Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-lg shadow-gray-400 hover:shadow-gray-600 transition-all duration-300 border border-green-100">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 textgreen" />
              </div>
              <h4 className="text-xl lg:text-2xl font-semibold text-navy-900">
                Our Vision
              </h4>
            </div>
            <p className="text-gray-700 text-center leading-relaxed">
              To establish Agri India Foods as the most trusted global source for premium Indian rice by championing quality, sustainability, and farmer empowerment across every link of the supply chain.
            </p>
          </div>
        </div>



      </div>
    </div>
  );
}
