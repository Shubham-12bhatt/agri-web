import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
} from "lucide-react";
import { MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#B3F58C]  py-10 lg:py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-6">
              <div className="flex  items-center space-x-2">
                <img className="max-h-20" src="images/logo.png" alt="" />
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed mb-6 text-gray-800">
              Leading rice exporter committed to quality, sustainability, and
              customer satisfaction.
            </p>

            {/* Social Media */}
   <div className="flex space-x-4">
  {/* <a
    href="#"
    className="group relative w-12 h-12 bg-white/80 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1 border border-gray-200 hover:border-blue-600"
  >
    <Facebook className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
    <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
  </a>
  
  <a
    href="#"
    className="group relative w-12 h-12 bg-white/80 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50 hover:-translate-y-1 border border-gray-200 hover:border-pink-500"
  >
    <Instagram className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
  </a>
  
  <a
    href="#"
    className="group relative w-12 h-12 bg-white/80 hover:bg-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/50 hover:-translate-y-1 border border-gray-200 hover:border-blue-400"
  >
    <Twitter className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
    <div className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
  </a>
  
  <a
    href="#"
    className="group relative w-12 h-12 bg-white/80 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/50 hover:-translate-y-1 border border-gray-200 hover:border-red-600"
  >
    <Youtube className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
    <div className="absolute inset-0 rounded-full bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
  </a> */}
</div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-6 text-gray-800">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-800 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2 font-semibold text-[20px] text-gray-700">{">"}</span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-800 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2 font-semibold text-[20px] text-gray-700">{">"}</span>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-800 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2 font-semibold text-[20px] text-gray-700">{">"}</span>
                  Our Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-800 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2 font-semibold text-[20px] text-gray-700">{">"}</span>
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-800 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="mr-2 font-semibold text-[20px] text-gray-700">{">"}</span>
                  Request a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Membership */}
          {/* <div className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-6 text-gray-800">Membership</h4>
            <div className="grid grid-cols-2 gap-3">
              {/* Certification Badges Row 1 */}
              {/* <div className="w-16 h-12 bg-blue-100 rounded flex items-center justify-center shadow-sm">
                <span className="text-xs font-bold text-blue-600">ISO</span>
              </div>
              <div className="w-16 h-12 bg-green-100 rounded flex items-center justify-center shadow-sm">
                <span className="text-xs font-bold text-green-600">FSAI</span>
              </div> */}
              {/* Certification Badges Row 2 */}
              {/* <div className="w-16 h-12 bg-green-100 rounded flex items-center justify-center shadow-sm">
                <span className="text-xs font-bold text-green-600">ORG</span>
              </div>
              <div className="w-16 h-12 bg-blue-100 rounded flex items-center justify-center shadow-sm">
                <span className="text-xs font-bold text-blue-600">ISO</span>
              </div> */}
              {/* Certification Badges Row 3 */}
              {/* <div className="w-16 h-12 bg-green-100 rounded flex items-center justify-center shadow-sm">
                <span className="text-xs font-bold text-green-600">ORG</span>
              </div>
              <div className="w-16 h-12 bg-green-100 rounded flex items-center justify-center shadow-sm">
                <span className="text-xs font-bold text-green-600">FSAI</span>
              </div>
            </div> */}
          {/* </div>  */}

          {/* Address */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-6 text-gray-800">Address</h4>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-0.5 text-gray-700" />
                <div className="text-sm text-gray-800">
                  Amit Thatai: +91 9877002359<br>
                  </br>
                  Akshit Thatai: +91 9517909020
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 mt-0.5 text-gray-700" />
                <div className="text-sm text-gray-800">
                  info@agriindiafoods.com
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-gray-700 flex-shrink-0" />
                <div className="text-sm text-gray-800 ">
                  Survey No. 305/4 & 306/4, Godown No.2, Village Mithrohar,
                  Taluka-anjar, Gandhidham, Kachchh, 370201
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600/30 mt-12 pt-8">
          <div className="text-sm text-gray-700">
            © Agri India Foods, All Right Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
