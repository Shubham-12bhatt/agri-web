export default function Ourbrands() {
  return (
    <div className="py-16 mx-auto max-w-[1200px] lg:py-10">
      <div className="container mx-auto px-6 my-10">
        {/* Header */}
        <div className="flex items-center justify-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-semibold textgreen">
            Our Other Brands
          </h2>
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand 1 */}
          <div className=" rounded-xl shadow-lg bg-white overflow-hidden">
            <img
              src="images/br1.jpg" // apni image ka path
              alt="Brand 1"
              className="w-full h-64 mt-2 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Family Feast
              </h3>
            </div>
          </div>

          {/* Brand 2 */}
          <div className="rounded-xl shadow-lg bg-white overflow-hidden">
            <img
              src="images/br2.png" // apni image ka path
              alt="Brand 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                AZF Foods
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
