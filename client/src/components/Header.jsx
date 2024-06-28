import { useLocation } from "react-router-dom";

// Import images
import headerImg from "../img/header/start1.jpg"; // Example image for the home page
import headerImgTwo from "../img/header/start2.jpg"; // Example image for the home page

// Import components
import MobileNav from "./MobileNav"; // Your mobile navigation component

// Import Tak Mat O Tur logotype
import Logo from "../img/header/logoo.svg"; // The logo

// Import Link
import { Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const getImageForPath = (pathname) => {
    switch (pathname) {
      case "/":
        return `url(${headerImgTwo})`; // Correctly formatted URL for CSS
      case "/om":
        return `url(${headerImg})`; // Correctly formatted URL for CSS
      default:
        return `url(${logoHome})`; // Assuming logoHome is defined and this is the correct path
    }
  };

  const currentImage = getImageForPath(location.pathname);

  return (
    <header
      style={{
        backgroundImage: currentImage,
        backgroundSize: "cover", // Ensure the image covers the header
        backgroundPosition: "center 70%", // Shifts the image slightly upwards
      }}
      className=" px-8 3xl:px-[850px] lg:px-[100px] z-30 flex w-full h-[400px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px] 3xl:h-[1000px]"
    >
      <div className="flex flex-col lg:flex-row w-full justify-between items-start">
        {/* logo - will navigate to start page ( "/") */}
        <Link to={"/"} className="max-w-[200px] pt-5">
          <img
            src={Logo}
            alt="logotype"
            style={{ width: "100px", height: "auto" }}
          />
        </Link>
        {/* nav - base style is hidden - show on desktop and larger */}
        <nav className="hidden lg:flex space-x-12 pt-12">
          <Link
            to={"/om"}
            className="text-PrimaryColor hover:text-slate-500 transition font-semibold"
          >
            Tak Mat O Tur
          </Link>
          <Link
            to={"/trailcamp"}
            className="text-PrimaryColor hover:text-slate-500 transition font-semibold"
          >
            Trail Camp
          </Link>
          <Link
            to={"/coach"}
            className="text-PrimaryColor hover:text-slate-500 transition font-semibold"
          >
            Löpcoach
          </Link>
          <Link
            to={"/topptur"}
            className="text-PrimaryColor hover:text-slate-500 transition font-semibold"
          >
            Topptur
          </Link>
          <Link
            to={"/boende"}
            className="text-PrimaryColor hover:text-slate-500 transition font-semibold"
          >
            Boende
          </Link>
          <Link
            to={"/kontakt"}
            className="text-PrimaryColor hover:text-slate-500 transition font-semibold"
          >
            Kontakt
          </Link>
        </nav>
      </div>
      {/* mobile navigation */}
      <MobileNav />
    </header>
  );
};

export default Header;
