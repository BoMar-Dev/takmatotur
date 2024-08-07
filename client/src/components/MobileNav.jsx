import { useState } from "react";
// Import framer-motion
import { motion } from "framer-motion";
// import icons
import { SlMenu } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
// import Link
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [key, setKey] = useState(0); // State to hold a key to force re-render

  const variants = {
    open: { opacity: 1, y: 0, zIndex: 50 },
    closed: { opacity: 0, y: "-100%", zIndex: -10 },
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    setKey((prevKey) => prevKey + 1); // Increment key to force re-render
  };

  const resetAnimationClasses = () => {
    setOpenMenu(false);
    setKey((prevKey) => prevKey + 1); // Increment key to force re-render
  };

  return (
    <nav className="text-PrimaryColor lg:hidden xl:hidden">
      <div
        onClick={toggleMenu}
        className="text-5xl font-extrabold cursor-pointer mt-12"
      >
        <SlMenu />
      </div>
      <motion.div
        key={key} // Using the key here to force re-render
        initial="closed"
        animate={openMenu ? "open" : "closed"}
        variants={variants}
        className="bg-white shadow-2xl fixed w-full top-0 right-0 max-w-xs h-screen z-50"
        style={{ transition: "z-index 0.3s, opacity 0.3s" }} // Ensure z-index transitions smoothly
      >
        <div
          onClick={resetAnimationClasses}
          className="text-4xl absolute z-50 left-5 top-10 text-PrimaryColor hover:text-slate-500 transition font-semibold"
        >
          <IoClose />
        </div>
        <ul className="h-full flex flex-col justify-center items-center gap-10 text-PrimaryColor font-sans font-bold text-xl">
          <li>
            <Link
              to="/om"
              onClick={resetAnimationClasses}
              className="text-PrimaryColor hover:text-slate-500 transition font-semibold"
            >
              Tak Mat O Tur
            </Link>
          </li>
          <li>
            <Link
              to="/trailcamp"
              onClick={resetAnimationClasses}
              className="text-PrimaryColor hover:text-slate-500 transition font-semibold"
            >
              Trail Camp
            </Link>
          </li>
          <li>
            <Link
              to="/coach"
              onClick={resetAnimationClasses}
              className="text-PrimaryColor hover:text-slate-500 transition font-semibold"
            >
              Löpcoach
            </Link>
          </li>
          <li>
            <Link
              to="/topptur"
              onClick={resetAnimationClasses}
              className="text-PrimaryColor hover:text-slate-500 transition font-semibold"
            >
              Topptur
            </Link>
          </li>
          <li>
            <Link
              to="/boende"
              onClick={resetAnimationClasses}
              className="text-PrimaryColor hover:text-slate-500 transition font-semibold"
            >
              Boende
            </Link>
          </li>
          <li>
            <Link
              to="/kontakt"
              onClick={resetAnimationClasses}
              className="text-PrimaryColor hover:text-slate-500 transition font-semibold"
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
