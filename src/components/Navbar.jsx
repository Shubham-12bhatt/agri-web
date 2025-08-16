import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import DropdownMenu from "./Dropdown";
import RequestQuoteModal from "./RequestQuoteModal";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobiledraw, setmobiledraw] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [quote, setquote] = useState(false);

  const toggleQuote = () => setquote(!quote);
  const closeMobileDrawer = () => {
  setmobiledraw(false);
  setMobileProductsOpen(false);
};

  const toggleNavbar = () => {
    setmobiledraw(!mobiledraw);
    // Close products dropdown when closing navbar
    if (mobiledraw) {
      setMobileProductsOpen(false);
    }
  };

  const toggleMobileProducts = () => {
    setMobileProductsOpen(!mobileProductsOpen);
  };

  return (
    <nav className="sticky top-0 z-3000 py-3 bg-gradient-to-b from-[#FFEABB] to-[#FFFFFF] ">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex mx-10 justify-between items-center ">
          <div className="flex  items-center flex-shrink-0">
            <Link to = "/">
            <img className="h-15 w-20 ml-6" src="/images/logo.png" alt="" />
            </Link>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            <div className="text-[18px] hidden justify-between items-center lg:flex space-x-20 font-semibold">
              <Link to="/" className="hover:text-green-700">
                Home
              </Link>
              <Link to="/about-us" className="whitespace-nowrap hover:text-green-700" >
                About Us
              </Link>
              <DropdownMenu />

              <Link to="/product-labelling" className="whitespace-nowrap hover:text-green-700">
                Product Labelling
              </Link>
              <Link to="/contact-us" className="whitespace-nowrap hover:text-green-700">
                Contact Us
              </Link>
            </div>
          </ul>
          <div className="hidden lg:flex justify-center items-center space-x-12 ">
            <button
              onClick={toggleQuote}
              className="diffgreen text-[18px]  cursor-pointer py-2 rounded-full whitespace-nowrap lg:ml-10 font-semibold px-12 transform transition duration-300 hover:scale-105 hover:brightness-105"
            >
              Request a Quote
            </button>
            {quote && <RequestQuoteModal onClose={() => setquote(false)} />}
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobiledraw ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobiledraw && (
          <div className="fixed mt-3 right-0 z-20 bg-gradient-to-b from-[#FFEABB] to-[#FFFFFF] w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="space-y-6 text-center">
              <li>
                <Link onClick={closeMobileDrawer}
                  to="/"
                  className="text-[18px] font-medium hover:text-green-700"
                  
                >
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={closeMobileDrawer}
                  to="/about-us"
                  className="text-[18px] font-medium hover:text-green-700"
                >
                  About Us
                </Link>
              </li>
              <li>
                <div>
                  <button
                    onClick={toggleMobileProducts}
                    className="text-[18px] font-medium hover:text-green-700 flex items-center justify-center w-full"
                  >
                    Products
                    <span
                      className={`ml-1 transition-transform duration-200 ${
                        mobileProductsOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown />
                    </span>
                  </button>

                  {mobileProductsOpen && (
                    <div className="mt-4 space-y-3 bg-white/20 backdrop-blur-sm rounded-lg p-4 animate-in slide-in-from-top-2 duration-200">
                      <Link onClick={closeMobileDrawer}
                        to="/basmati"
                        className="block text-[16px] font-medium text-gray-700 hover:text-green-700 py-2 px-4 rounded-md hover:bg-white/30 transition-all duration-200"
                      >
                        Indian Basmati Rice
                      </Link>
                      <Link onClick={closeMobileDrawer}
                        to="/non-basmati"
                        className="block text-[16px] font-medium text-gray-700 hover:text-green-700 py-2 px-4 rounded-md hover:bg-white/30 transition-all duration-200"
                      >
                        Indian Non Basmati Rice
                      </Link>
                      {/* <Link onClick={closeMobileDrawer}
                        to="/pesticide-free"
                        className="block text-[16px] font-medium text-gray-700 hover:text-green-700 py-2 px-4 rounded-md hover:bg-white/30 transition-all duration-200"
                      >
                        Pesticide Free Basmati Rice
                      </Link> */}
                       <Link onClick={closeMobileDrawer}
                        to="/sugandha"
                        className="block text-[16px] font-medium text-gray-700 hover:text-green-700 py-2 px-4 rounded-md hover:bg-white/30 transition-all duration-200"
                      >
                        Sugandha Rice
                      </Link>
                       <Link onClick={closeMobileDrawer}
                        to="/sharbati"
                        className="block text-[16px] font-medium text-gray-700 hover:text-green-700 py-2 px-4 rounded-md hover:bg-white/30 transition-all duration-200"
                      >
                        Sharbati Rice
                      </Link>
                       <Link onClick={closeMobileDrawer}
                        to="/sona-masuri"
                        className="block text-[16px] font-medium text-gray-700 hover:text-green-700 py-2 px-4 rounded-md hover:bg-white/30 transition-all duration-200"
                      >
                        Sona Masuri Rice
                      </Link>
                      <Link onClick={closeMobileDrawer}
                        to="/pusa"
                        className="block text-[16px] font-medium text-gray-700 hover:text-green-700 py-2 px-4 rounded-md hover:bg-white/30 transition-all duration-200"
                      >
                        Pusa Rice
                      </Link>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <Link
                  to="/product-labelling" onClick={closeMobileDrawer}
                  className="text-[18px] font-medium hover:text-green-700"
                >
                  Product Labelling
                </Link>
              </li>
              <li>
                <Link onClick={closeMobileDrawer}
                  to="/contact-us"
                  className="text-[18px] font-medium hover:text-green-700"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="flex mt-8">
              <a
                href="#"
                onClick={toggleQuote}
                className="diffgreen text-[18px] py-2 px-8 rounded-full font-semibold"
              >
                Request a Quote
              </a>
              {quote && <RequestQuoteModal onClose={() => setquote(false)} />}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
