import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { TypeRice } from '../constants';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// Custom Button Group Component
// const ButtonGroup = ({ next, previous }) => {
//   return (
//        <>
//       {/* Left Button */}
//       <button
//         onClick={previous}
//         className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-[-30px] z-1 bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-800 transition cursor-pointer"
//       >
//         <ChevronLeft className="w-5 h-5" />
//       </button>

//       {/* Right Button */}
//       <button
//         onClick={next}
//         className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-[-30px] z-1 bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-800 transition cursor-pointer"
//       >
//         <ChevronRight className="w-5 h-5" />
//       </button>
//     </>

//   );

// };




const ProductSlider = () => {
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
    <div className=" mx-auto max-w-[1200px] px-4 mb-12">
      <Carousel
        showDots={true}
        swipeable={true}
  draggable={true}
  responsive={responsive}
  // infinite={true}
  autoPlay={true}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  customTransition="all 0.5s"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"

>
  {TypeRice.map((rice, index) => (
          <div key={index} className="bg-white my-auto mx-2 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden pb-12">
            <div className="   flex items-center justify-center">
              <img src= {rice.image} alt="" />
              {/* <div className="w-full h-full bg-gradient-to-br from-yellow-100 to-amber-100 rounded-lg flex items-center justify-center">
                
             
              </div> */}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {rice.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {rice.content}
              </p>

              {/* Bullet section */}
              {/* <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  1121 Basmati Rice
                </div>
                
              </div> */}

              {/* <div className="flex space-x-3">
                <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:border-[#65BA34] hover:text-[#65BA34] cursor-pointer transition-colors duration-200 text-sm font-medium">
                  Read More
                </button>
                <button className="flex-1 px-4 py-2 diffgreen cursor-pointer text-white rounded-full hover:bg-green-700 transition-colors duration-200 text-sm font-medium">
                  Inquiry
                </button>
              </div> */}
            </div>
          </div>
            


          ))}

      </Carousel>;
      </div>
  );
};

export default ProductSlider;