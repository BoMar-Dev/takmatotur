import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// ALL HEADER IMG FOR EACH PAGE
// Import images
import headerLandingPage from "../img/header/landing.jpg"; // Example image for the home page
import headerAbout from "../img/header/about.jpg"; // Example image for the about page
import headerContact from "../img/contact/contactHeader.jpg"; // Example image for the contact page
import headerCoach from "../img/coach/coachHeader.jpg"; // Example image for the coach page
import headerCamp from "../img/trailcamp/campHeader.jpg"; // Example image for the trail camp page
import headerTour from "../img/tour/tourHeader.jpg"; // Example image for the topptur page
import headerAcco from "../img/accommodation/accoHeader.jpg"; // Example image for the accommodation page

// Import components
import MobileNav from "./MobileNav"; // Your mobile navigation component

// Import Tak Mat O Tur logotype
import Logo from "../img/header/logoo.svg"; // The logo

import { Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // Function to get the background image URL based on the current path
  const getImageForPath = (pathname) => {
    switch (pathname) {
      case "/":
        return `url(${headerLandingPage})`; // Landing page image
      case "/om":
        return `url(${headerAbout})`; // About page image
      case "/kontakt":
        return `url(${headerContact})`; // Contact page image
      case "/coach":
      case "/coach/foretag":
      case "/coach/mandagslopning":
      case "/coach/personlig":
        return `url(${headerCoach})`; // Coach pages image
      case "/trailcamp":
        return `url(${headerCamp})`; // Trail camp page image
      case "/topptur":
      case "/topptur/vinter":
      case "/topptur/sommar":
      case "/topptur/host&var":
        return `url(${headerTour})`; // Topptur pages image
      case "/boende":
        return `url(${headerAcco})`; // Accommodation page image
      default:
        return `url(${headerLandingPage})`; // Default image
    }
  };

  const currentImage = getImageForPath(location.pathname);

  // Function to determine if a link is active
  const isActiveLink = (path) => {
    // For "Löpcoach", check if the path starts with "/coach"
    if (path === "/coach" && location.pathname.startsWith("/coach")) {
      return true;
    }
    // For "Topptur", check if the path starts with "/topptur"
    if (path === "/topptur" && location.pathname.startsWith("/topptur")) {
      return true;
    }
    // For other links, check exact match
    return location.pathname === path;
  };

  return (
    <header
      style={{
        backgroundImage: currentImage,
        backgroundSize: "cover", // Ensure the image covers the header
        backgroundPosition: "center 70%", // Shifts the image slightly upwards
      }}
      className="px-8 3xl:px-[850px] lg:px-[100px] z-30 flex w-full h-[400px] md:h-[400px] lg:h-[450px] xl:h-[490px] 2xl:h-[550px] 3xl:h-[1000px]"
    >
      <div className="flex flex-col lg:flex-row w-full justify-between items-start">
        {/* logo - will navigate to start page ("/") */}
        <Link to="/" className="pt-5 z-40">
          <img
            src={Logo}
            alt="logotype"
            className="max-w-[200px] cursor-pointer" // Ensuring the image behaves like a button
            style={{ width: "98px", height: "auto" }}
          />
        </Link>
        {/* nav - base style is hidden - show on desktop and larger */}
        <nav className="hidden lg:flex space-x-12 pt-12">
          {[
            { path: "/om", label: "Tak Mat O Tur" },
            { path: "/trailcamp", label: "Trail Camp" },
            { path: "/coach", label: "Löpcoach" },
            { path: "/topptur", label: "Topptur" },
            { path: "/boende", label: "Boende" },
            { path: "/kontakt", label: "Kontakt" },
          ].map((link) => (
            <div
              key={link.path}
              className="relative flex flex-col items-center"
            >
              <Link
                to={link.path}
                className={`text-PrimaryColor hover:text-slate-950 hover:scale-110 hover:font-extrabold transition font-semibold ${
                  isActiveLink(link.path) ? "text-bold scale-110" : ""
                }`}
              >
                {link.label}
              </Link>
              <AnimatePresence>
                {isActiveLink(link.path) && (
                  <motion.div
                    className="w-full bg-PrimaryColor mt-1"
                    style={{ height: "2px" }} // Adjust this value to make the line thinner
                    layoutId="underline"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "100%" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>
      </div>
      {/* mobile navigation */}
      <MobileNav />
    </header>
  );
};

export default Header;
