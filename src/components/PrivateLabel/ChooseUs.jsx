import { Leaf, Package, ShoppingCart } from "lucide-react";

export default function ChooseUs() {
  const features = [
    {
      icon: Leaf,
      title: "Wide Variety of Rice",
      description:
        "Basmati, Non-Basmati, Sona Masori, IR64 & more varieties to choose from.",
    },
    {
      icon: Package,
      title: "Custom Branding & Packaging",
      description:
        "Design your own labels, bags & pouches that represent your brand identity.",
    },
    {
      icon: ShoppingCart,
      title: "Low Minimum Order Quantities",
      description:
        "Ideal for startups and bulk buyers with flexible order quantities.",
    },
  ];

  return (
    <div className=" py-16 lg:py-24">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-10">
            <span className="">Why Choose </span>
            <span className="textgreen">Us</span>
            <span className="">?</span>
          </h2>
          <p className="text-gray-700 text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            Discover the richness of tradition with Agri India's premium rice
            collection, where every grain is a promise of purity, aroma, and
            taste. Grown in the finest fields and carefully processed, our rice
            varieties are perfect for homes, hotels, and global markets seeking
            excellence in every bite.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:max-w-6xl  mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-[#506B40] rounded-2xl p-8 text-white text-center 
            transition-all duration-300 ease-in-out
            hover:bg-[#44563a] hover:scale-[1.02] 
            hover:shadow-lg hover:shadow-[#44563a]/30
            transform origin-center"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-green-100 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
