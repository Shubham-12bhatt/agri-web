import App from "../../App.jsx";
import { createBrowserRouter } from "react-router-dom";
import MainRice from "../MainRice.jsx";
import Basmati1121 from "../RiceType/Basmati/Basmati1121.jsx";
import Basmati1509 from "../RiceType/Basmati/Basmati1509.jsx";
import Basmati1401 from "../RiceType/Basmati/Basmati1401.jsx";
import BasmatiPusa from "../RiceType/Pusa.jsx";
import BasmatiSharbati from "../RiceType/Sharbati.jsx";
import IR64 from "../RiceType/NonBasmati/IR64.jsx";
import SonaMasoori from "../RiceType/SonaMasoori.jsx";
import PR14 from "../RiceType/NonBasmati/PR106.jsx";
import PR11 from "../RiceType/NonBasmati/PR11.jsx";
import AboutUs from "../AboutUs.jsx";
import Contact from "../Contact.jsx";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import Basmati from "../RiceType/Basmati.jsx";
import NonBasmati from "../RiceType/NonBasmati.jsx";
import ScrollToTop from "../ScrollToTop.jsx";
import Labelling from "../PrivateLabel/Labelling.jsx";
import ChooseUs from "../PrivateLabel/ChooseUs.jsx";
import PrivateLabelling from "../PrivateLabel/PrivateLabelling.jsx";
import Sugandha from "../RiceType/Sugandha.jsx";
import Sharbati from "../RiceType/Sharbati.jsx";
import Pusa from "../RiceType/Pusa.jsx";
import PR106 from "../RiceType/NonBasmati/PR106.jsx";
import IR36 from "../RiceType/NonBasmati/IR36.jsx";
import RS10 from "../RiceType/NonBasmati/RS10.jsx";
import IR8 from "../RiceType/NonBasmati/IR8.jsx";

export const router = createBrowserRouter([
  {
    path: "/",

    element: (
      <>
      <ScrollToTop/>
        <App />
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
        path: "pr11",
        element: <PR11 />,
      },
      {
        path: "pr106",
        element: <PR106 />,
       },
       {
        path: "ir36",
        element: <IR36/>,
       },
        {
        path: "ir8",
        element: <IR8 />,
       },
         {
        path: "rs10",
        element: <RS10 />,
      },

      
    ],
  },
  {
    path: "/sugandha",
    element: <MainRice />,
    children: [
      {
        index: true,
        element: <Sugandha />
      },
    ]
  },
  {
    path: "/sharbati",
    element: <MainRice />,
    children: [
      {
        index: true,
        element: <Sharbati />
      },
    ]
  },
  {
    path: "/sona-masuri",
    element: <MainRice />,
    children: [
      {
        index: true,
        element: <SonaMasoori />
      },
    ]
  },
   {
    path: "/pusa",
    element: <MainRice />,
    children: [
      {
        index: true,
        element: <Pusa />
      },
    ]
  }
   
  
]);
