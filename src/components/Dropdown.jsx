import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const DropdownMenu = () => {
  const [mainOpen, setMainOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [submenuTimeout, setSubmenuTimeout] = useState(null);

  const menuItems = [
    {
      id: 'basmati',
      title: 'Indian Basmati Rice',
      path: '/basmati',
      submenu: [
        { title: '1121 Basmati Rice', path: '/basmati/basmati-1121' },
        { title: '1509 Basmati Rice',  path: '/basmati/basmati-1509' },
        { title: '1401 Basmati Rice', path: '/basmati/basmati-1401' },
        { title: 'Pusa Basmati Rice',  path: '/basmati/pusa' },
        { title: 'Sharbati Basmati Rice', path: '/basmati/sharbati'}
      ]
    },
    {
      id: 'non-basmati',
      title: 'Indian Non Basmati Rice',
      path: '/non-basmati',
      submenu: [
        { title: 'PR 11 Rice',path: '/non-basmati/pr11'  },
        { title: 'PR 14 Rice', path: '/non-basmati/pr14' },
        { title: 'IR 64 Rice', path: '/non-basmati/ir64'},
        {title: 'Sona Masoori Rice' , path: '/non-basmati/sona-masoori'},
        { title: 'Jeera Kasala Rice', path: '/non-basmati/jeera-kasala' },
      ]
    },
    {
      id: 'pesticide-free',
      title: 'Pesticide Free Basmati Rice',
      path: '/pesticide-free',
      submenu: [
        { title: 'Pesticide Residue Free Steam Rice', path: '/pesticide-free/steam'},
        { title: 'Pesticide Residue Free Sella Rice',  path: '/pesticide-free/sella' },
        { title: 'Pesticide Residue Free Golden Sella Rice',  path: '/pesticide-free/golden-sella'},
       
      ]
    }
  ];

    const handleSubmenuEnter = (itemId) => {
    // Clear any existing timeout immediately
    if (submenuTimeout) {
      clearTimeout(submenuTimeout);
      setSubmenuTimeout(null);
    }
    // Set active submenu immediately without delay
    setActiveSubmenu(itemId);
  };
  const closeAllMenus = () => {
    setMainOpen(false);
    setActiveSubmenu(null);
    if (submenuTimeout) {
      clearTimeout(submenuTimeout);
      setSubmenuTimeout(null);
    }
  };

  const handleSubmenuLeave = () => {
    // Increased delay to give more time for mouse movement
    const timeout = setTimeout(() => {
      setActiveSubmenu(null);
    }, 200);
    setSubmenuTimeout(timeout);
  };
  const handleSubmenuEnterDirect = () => {
    // Clear timeout when entering submenu directly
    if (submenuTimeout) {
      clearTimeout(submenuTimeout);
      setSubmenuTimeout(null);
    }
  };

   const handleMainLeave = () => {
    // Add small delay before closing main menu
    setTimeout(() => {
      setMainOpen(false);
      setActiveSubmenu(null);
      if (submenuTimeout) {
        clearTimeout(submenuTimeout);
        setSubmenuTimeout(null);
      }
    }, 100);
  };

  // ADDED this new function:
const handleMainItemHover = (itemId) => {
  // Clear any existing timeout
  if (submenuTimeout) {
    clearTimeout(submenuTimeout);
    setSubmenuTimeout(null);
  }
  // Set active submenu immediately
  setActiveSubmenu(itemId);
  };


  const dropdownRef = useRef(null);
  
  // ADDED this entire useEffect:
useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setActiveSubmenu(null);
      if (submenuTimeout) {
        clearTimeout(submenuTimeout);
        setSubmenuTimeout(null);
      }
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [dropdownRef, submenuTimeout]);
  
  
  





  return (
    <div
      ref={dropdownRef} 
      className="relative inline-block"
      onMouseEnter={() => setMainOpen(true)}
      onMouseLeave={handleMainLeave}
    >
      <a
        className="flex items-center px-4 py-2 text-gray-800 hover:text-green-700 cursor-pointer transition-colors duration-200"
        href="#"
      >
        Products 
        <span className="ml-1 transition-transform duration-200">
          <ChevronDown className={`w-4 h-4 ${mainOpen ? 'rotate-180' : ''}`} />
        </span>
      </a>

      {mainOpen && (
        <div className="absolute left-0 mt-2 min-w-[280px] w-auto top-7 p-2 bg-white rounded-lg shadow-xl border border-gray-100 z-10">
          <ul className="py-2 space-y-1">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="relative"
                onMouseEnter={() => handleMainItemHover(item.id)}
                onMouseLeave={handleSubmenuLeave}
              >
                <div className="flex items-center justify-between px-4 py-3 text-[15px] font-medium hover:bg-green-50 hover:text-green-700 cursor-pointer rounded-md transition-all duration-200 group">
                  <Link to = {item.path} className="flex-grow" onClick={closeAllMenus}>
                    <span>{item.title}</span>
                    </Link>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors duration-200" />
                </div>
                
                {activeSubmenu === item.id && (
                  <div 
                    className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 z-20 animate-in slide-in-from-left-2 duration-200"
                    onMouseEnter={handleSubmenuEnterDirect}
                    onMouseLeave={handleSubmenuLeave}
                  >
                    <div className="p-2">
                      {/* <div className="px-3 py-2 text-xs bg-amber-400 font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100 mb-2">
                        {item.title}
                      </div> */}
                      <ul className="space-y-1">
                        {item.submenu.map((subitem, index) => (
                          <li key={index}>
                            <Link to={subitem.path}
                              className="block px-3 py-2 text-sm hover:bg-green-50 hover:text-green-700 cursor-pointer rounded-md transition-all duration-200 group"
                               onClick={closeAllMenus}
                            >
                              <div className="font-medium">{subitem.title}</div>
                              <div className="text-xs text-gray-500 group-hover:text-green-600 mt-1">
                                {subitem.description}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          
          <div className="border-t border-gray-100 mt-2 pt-2">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-green-600 hover:text-green-700 hover:bg-green-50 cursor-pointer rounded-md transition-all duration-200 font-medium"
            >
              View All Products →
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;