import { Leaf, Package, ShoppingCart } from "lucide-react";

export default function ChooseUs() {
  const features = [
    {
      icon: Leaf,
      title: "Sustainable Farming Practices",
      description:
        "We prioritize environmentally responsible cultivation methods that protect natural resources and support farming communities.",
    },
    {
      icon: Package,
      title: "Advanced Processing Technology",
      description:
        "Our state-of-the-art milling and packaging facilities ensure hygiene, consistency, and superior grain quality.",
    },
    {
      icon: ShoppingCart,
      title: "Strict Quality Control",
      description:
        "From farm to shipment, every step is monitored through rigorous quality checks to guarantee purity, taste, and texture.",
    },
  ];

  return (
    <div className=" py-16 lg:py-24">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16 px-6">
  <h2 className="text-4xl lg:text-5xl font-semibold mb-10">
    <span>Why Choose </span>
    <span className="textgreen">Us</span>
    <span>?</span>
  </h2>

  <p className="text-gray-700 text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed mb-4">
    At Agri India, we make private label management seamless—from concept to final delivery.
    Our state-of-the-art processing units and experienced team are equipped to:
  </p>

  <ul className="text-left max-w-4xl mx-auto  text-gray-700 text-lg lg:text-md leading-relaxed">
    <li className="flex items-start gap-3">
      <span className="text-green-600 text-2xl">✔</span>
      Source premium, residue-free paddy or rice tailored to your specific needs.
    </li>
    <li className="flex items-start gap-3">
      <span className="text-green-600 text-2xl">✔</span>
      Expertly mill, clean, polish, sort, and grade the rice according to your standards.
    </li>
    <li className="flex items-start gap-3">
      <span className="text-green-600 text-2xl">✔</span>
      Develop innovative packaging solutions in a wide range of shapes, sizes, and materials 
      to suit your brand and market.
    </li>
    <li className="flex items-start gap-3">
      <span className="text-green-600 text-2xl">✔</span>
      Craft a unique brand identity with the help of our dedicated in-house design team.
    </li>
    <li className="flex items-start gap-3">
      <span className="text-green-600 text-2xl">✔</span>
      Collaborate with your kitchen, testing facility, or R&D team to create products that 
      meet precise specifications.
    </li>
    <li className="flex items-start gap-3">
      <span className="text-green-600 text-2xl">✔</span>
      Ensure timely delivery while staying within budget.
    </li>
  </ul>
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
