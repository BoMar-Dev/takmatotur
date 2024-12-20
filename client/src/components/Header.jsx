import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Logo from "../img/header/logoo.svg";
import { Link } from "react-router-dom";

// import components
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";
import { getImgLoader } from "../functions/getImgLoader";

const Header = () => {
  const location = useLocation();
  const [currentImage, setCurrentImage] = useState(null);
  const [loadingImage, setLoadingImage] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      const imageModule = await getImgLoader(location.pathname);
      const img = new Image();
      img.src = imageModule.default;

      img.onload = () => {
        setLoadingImage(imageModule.default);
      };
    };

    loadImage();
  }, [location.pathname]);

  useEffect(() => {
    if (loadingImage) {
      setCurrentImage(loadingImage);
    }
  }, [loadingImage]);

  return (
    <header
      style={{
        backgroundImage: currentImage ? `url(${currentImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center 70%",
        transition: "background-image 1s ease-in-out",
      }}
      className="px-8 3xl:px lg:px-[100px] z-30 flex w-full h-[400px] md:h-[400px] lg:h-[450px] xl:h-[490px] 2xl:h-[550px] 3xl:h-[1000px]"
    >
      <div className="flex flex-col lg:flex-row w-full justify-between items-start 3xl:px-[200px] 3xl:max-w-[2300px] mx-auto ">
        <Link to="/" className="pt-5 z-40">
          <img
            src={Logo}
            alt="Logotype"
            className="cursor-pointer max-w-[90px] mt-2 lg:mt-0 lg:max-w-[100px]"
            style={{ height: "auto" }}
          />
        </Link>
        <Navigation />
      </div>
      <MobileNav />
    </header>
  );
};

export default Header;
