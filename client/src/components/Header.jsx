// import location to be able to chose what img to have as header for each url
import { useLocation } from "react-router-dom";

// ALL HEADER IMG FOR EACH PAGE
// Import images
import headerLandingPage from "../img/header/landing.jpg"; // Example image for the home page
import headerAbout from "../img/header/about.jpg"; // Example image for the home page
import headerContact from "../img/contact/contactHeader.jpg";
import headerCoach from "../img/coach/coachHeader.jpg";
import headerCamp from "../img/trailcamp/campHeader.jpg";
import headerTour from "../img/tour/tourHeader.jpg";
import headerAcco from "../img/accommodation/accoHeader.jpg";

// Import components
import MobileNav from "./MobileNav"; // Your mobile navigation component

// Import Tak Mat O Tur logotype
import Logo from "../img/header/logoo.svg"; // The logo

// import icons
import { LiaMountainSolid } from "react-icons/lia";

// Import Link
import { Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const getImageForPath = (pathname) => {
    switch (pathname) {
      case "/":
        return `url(${headerLandingPage})`; // Correctly formatted URL for CSS
      case "/om":
        return `url(${headerAbout})`; // Correctly formatted URL for CSS
      case "/kontakt":
        return `url(${headerContact})`;
      case "/coach":
        return `url(${headerCoach})`;
      case "/coach/foretag":
        return `url(${headerCoach})`;
      case "/coach/mandaglopning":
        return `url(${headerCoach})`;
      case "/coach/personlig":
        return `url(${headerCoach})`;
      case "/trailcamp":
        return `url(${headerCamp})`;
      case "/topptur":
        return `url(${headerTour})`;
      case "/boende":
        return `url(${headerAcco})`;
      default:
        return `url(${headerLandingPage})`; // Default image
    }
  };

  const currentImage = getImageForPath(location.pathname);

  const isActiveLink = (path) => location.pathname === path;

  return (
    <header
      style={{
        backgroundImage: currentImage,
        backgroundSize: "cover", // Ensure the image covers the header
        backgroundPosition: "center 70%", // Shifts the image slightly upwards
      }}
      className="px-8 3xl:px-[850px] lg:px-[100px] z-30 flex w-full h-[400px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] 3xl:h-[1000px]"
    >
      <div className="flex flex-col lg:flex-row w-full justify-between items-start">
        {/* logo - will navigate to start page ( "/") */}
        <Link to="/" className="pt-5 z-40">
          <img
            src={Logo}
            alt="logotype"
            className="max-w-[200px] cursor-pointer" // Ensuring the image behaves like a button
            style={{ width: "100px", height: "auto" }}
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
              {/* // The icon is conditionally rendered based on whether the link is active -  isActiveLink(link.path) returns true if the current path matches the link's path, indicating that the link is active. */}
              <Link
                to={link.path}
                className={`text-PrimaryColor hover:text-slate-950 hover:scale-110 hover:font-extrabold transition font-semibold ${
                  isActiveLink(link.path) ? "text-bold scale-110" : ""
                }`}
              >
                {link.label}
              </Link>
              {isActiveLink(link.path) && (
                <LiaMountainSolid
                  className="text-PrimaryColor text-3xl "
                  style={{ transform: "rotate(180deg)" }}
                />
              )}
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
