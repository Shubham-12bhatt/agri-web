import { Star } from "lucide-react";
import { testimonials } from "../constants";
import UserSlider from "./UserSlider";

export default function Testimonials() {
  return (
    <div className=" py-16  mx-auto max-w-[1200px] lg:py-10 ">
      <div className="container mx-auto px-6 my-10">
        {/* Header with Navigation */}
        <div className="flex items-center justify-center  mb-16">
          <h2 className="text-5xl lg:text-6xl font-semibold textgreen">
            Testimonials
          </h2>
          
        </div>

        {/* Testimonial Cards */}
        
          <UserSlider/>

          {/* Testimonial Card 1 */}


        {/* Pagination Dots */}
        
      </div>
    </div>
  );
}
