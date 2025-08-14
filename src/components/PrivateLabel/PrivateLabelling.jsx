import LabelSlider from "./LabelSlider";


export default function PrivateLabelling() {
 

  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1">
              <h2 className="text-4xl lg:text-6xl font-semibold textgreen mb-6">
                Private Labelling
              </h2>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                We also offer customized private labeling solutions across a
                wide range of packaging formats, including Non-Woven, Jute,
                Pouch, BOPP and PP materials
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="hidden lg:flex items-center space-x-4 ml-8">
           
            </div>
          </div>
        </div>
          <LabelSlider/>
      
        

        {/* Mobile Navigation */}
        
      </div>
    </div>
  );
}
