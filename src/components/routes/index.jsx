import App from "../../App.jsx";
import { createBrowserRouter } from "react-router-dom";
import MainRice from "../MainRice.jsx";
import Basmati1121 from "../RiceType/Basmati/Basmati1121.jsx";
import Basmati1509 from "../RiceType/Basmati/Basmati1509.jsx";
import Basmati1401 from "../RiceType/Basmati/Basmati1401.jsx";
import BasmatiPusa from "../RiceType/Basmati/BasmatiPusa.jsx";
import BasmatiSharbati from "../RiceType/Basmati/BasmatiSharbati.jsx";
import IR64 from "../RiceType/NonBasmati/IR64.jsx";
import SonaMasoori from "../RiceType/NonBasmati/SonaMasoori.jsx";
import PR14 from "../RiceType/NonBasmati/PR14.jsx";
import PR11 from "../RiceType/NonBasmati/PR11.jsx";
import JeeraKasala from "../RiceType/NonBasmati/JeeraKasala.jsx";
import GoldenSella from "../RiceType/PesticideFree/GoldenSella.jsx";
import Sella from "../RiceType/PesticideFree/Sella.jsx";
import Steam from "../RiceType/PesticideFree/Steam.jsx";
import AboutUs from "../AboutUs.jsx";
import Contact from "../Contact.jsx";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import Basmati from "../RiceType/Basmati.jsx";
import NonBasmati from "../RiceType/NonBasmati.jsx";
import Pesticidefree from "../RiceType/Pesticidefree.jsx";
import ScrollToTop from "../ScrollToTop.jsx";
import Labelling from "../PrivateLabel/Labelling.jsx";
import ChooseUs from "../PrivateLabel/ChooseUs.jsx";
import PrivateLabelling from "../PrivateLabel/PrivateLabelling.jsx";

export const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <>
      <ScrollToTop/>
        <App />,
      </>
    )
  },
   {
    path: "/product-labelling",
    element: (
      <>
        <Navbar />
        <ScrollToTop/>
        <Labelling />
        <ChooseUs />
        <PrivateLabelling/>
        
        <Footer />
      </>
    ),
  },


   {
    path: "/about-us",
    element: (
      <>
        <Navbar />
        <ScrollToTop/>
        <AboutUs />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact-us",
    element: (
      <>
        <Navbar />
        <ScrollToTop/>
        <Contact />
        <Footer />
      </>
    ),
  },

   {
    path: "/basmati",
    element: <MainRice />, 
     children: [
       {
         index: true,
         element:<Basmati/>
      
    },
      {
        path: "basmati-1121",
        element: <Basmati1121 />,
      },
      {
        path: "basmati-1401",
        element: <Basmati1401 />,
      },
      {
        path: "basmati-1509",
        element: <Basmati1509 />,
      },
      {
        path: "pusa",
        element: <BasmatiPusa />,
      },
      {
        path: "sharbati",
        element: <BasmatiSharbati />,
      }
    ],
  },

   {
    path: "/non-basmati",
    element: <MainRice />, 
     children: [
       {
         index: true,
         element: <NonBasmati/>
     },
      
      {
        path: "ir64",
        element: <IR64 />,
      },
      {
        path: "sona-masoori",
        element: <SonaMasoori />,
      },
      {
        path: "pr11",
        element: <PR11 />,
      },
      {
        path: "pr14",
        element: <PR14 />,
      },
      {
        path: "jeera-kasala",
        element: <JeeraKasala />,
      }
    ],
  },

    {
    path: "/pesticide-free",
    element: <MainRice />, 
      children: [
    
        {
          index: true,
          element: <Pesticidefree/>
      },
      {
        path: "golden-sella",
        element: <GoldenSella />,
      },
      {
        path: "sella",
        element: <Sella />,
      },
      {
        path: "steam",
        element: <Steam />,
      }
    ],
  },
 
  
]);
