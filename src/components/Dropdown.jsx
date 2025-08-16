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
       
    
      ]
    },
    {
      id: 'non-basmati',
      title: 'Indian Non Basmati Rice',
      path: '/non-basmati',
      submenu: [
        { title: 'PR 11 Rice',path: '/non-basmati/pr11'  },
        { title: 'PR 106 Rice', path: '/non-basmati/pr106' },
        { title: 'IR 64 Rice', path: '/non-basmati/ir64' },
        { title: 'IR 36 Rice', path: '/non-basmati/ir36' },
        { title: 'IR 8 Rice', path: '/non-basmati/ir8' },
        { title: 'RS 10 Rice', path: '/non-basmati/rs10'},
      
        
      ]
    },
  
    {
      id: 'sugandha',
      title: 'Sugandha Rice',
      path: '/sugandha',

    },
    {
      id: 'sona-masuri',
      title: 'Sona masuri Rice',
      path: '/sona-masuri',

    },
    {
      id: 'sharbati',
      title: 'Sharbati Rice',
      path: '/sharbati',

    },
    {
      id: 'pusa',
      title: 'Pusa Rice',
      path: '/pusa',

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
                onMouseEnter={() => item.submenu && handleMainItemHover(item.id)}
                onMouseLeave={handleSubmenuLeave}
              >
                <div className={`flex items-center ${item.submenu ? 'justify-between' : 'justify-start'} px-4 py-3 text-[15px] font-medium hover:bg-green-50 hover:text-green-700 cursor-pointer rounded-md transition-all duration-200 group`}>
                  <Link to={item.path} className="flex-grow" onClick={closeAllMenus}>
                    <span>{item.title}</span>
                  </Link>
                  {item.submenu && (
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors duration-200" />
                  )}
                </div>
                
                {activeSubmenu === item.id && item.submenu && (
                  <div 
                    className="absolute left-full top-0 ml-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 z-20 animate-in slide-in-from-left-2 duration-200"
                    onMouseEnter={handleSubmenuEnterDirect}
                    onMouseLeave={handleSubmenuLeave}
                  >
                    <div className="p-2">
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
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;