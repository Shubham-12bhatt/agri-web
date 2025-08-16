import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const packages = [
    {
      id: 1,
      image: "/images/Label/1.jpg",
        bgColor: "bg-white"
     
    },
    {
      id: 2,
      image:
        "/images/Label/2.jpg",
     
    },
    {
      id: 3,
      image:
        "/images/Label/3.jpg",
     
  },
    {
      id: 4,
      image:
        "/images/Label/4.jpg",
     
  },
    {
      id: 5,
      image:
        "/images/Label/5.jpg",
     
  },
    {
      id: 6,
      image:
        "/images/Label/6.jpg",
     
    },
];


const LabelSlider = () => {
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
      {packages.map((pkg) => (
    <div key={pkg.id} className="group">
      {/* Package Display */}
      <div className={`rounded-2xl p-5 h-96 flex items-center justify-center mb-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-white mx-3 relative overflow-hidden group-hover:scale-105`}>
        
        {/* Background subtle pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 w-16 h-16 border border-white rounded-full"></div>
          <div className="absolute bottom-4 right-4 w-12 h-12 border border-white rounded-full"></div>
          <div className="absolute top-1/2 right-8 w-8 h-8 border border-white rounded-full"></div>
        </div>

        {/* Package Image */}
        <div className="relative z-10 transform transition-transform duration-300 group-hover:scale-110">
          <img 
            className="rounded-xl max-h-80 w-auto object-contain drop-shadow-2xl" 
            src={pkg.image} 
            alt={pkg.name} 
          />
          
          {/* Glow effect behind package */}
          <div className="absolute inset-0 bg-white opacity-20 rounded-xl blur-xl -z-10 group-hover:opacity-30 transition-opacity duration-300"></div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-6 right-6 w-3 h-3 bg-white opacity-40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 left-6 w-2 h-2 bg-white opacity-30 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/3 left-8 w-4 h-4 bg-white opacity-20 rounded-full animate-pulse delay-700"></div>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
      </div>

      {/* Package Info */}
      
    </div>
  ))}
    
          </Carousel>;
          </div>
      );
    };
    
 

export default LabelSlider;

