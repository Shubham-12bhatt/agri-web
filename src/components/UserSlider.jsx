import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { testimonials } from '../constants';
import { Star } from "lucide-react";

const UserSlider = () => {
 const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1
  }
};


  return (
    <div>
      <Carousel
       showDots={true}
       swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all 0.5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
      
      >
      {testimonials.map((user, index) => (
          
          <div key={index} className="bg-white backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border pb-12 mx-2 border-green-100 flex flex-col justify-between h-full">
            {/* Profile Section */}
            <div className="flex items-center mb-6">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {user.user}
                </h3>
              </div>
              <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden ml-4">
                <img src={user.image} alt="" />
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
             {user.text}
            </p>

            {/* Star Rating */}
            <div className="flex space-x-1 ">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 textgreen fill-current" />
              ))}
            </div>
          </div>
      ))}
        </Carousel>
      
    </div>
  );
};

export default UserSlider;