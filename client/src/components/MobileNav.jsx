import { useState } from "react";
// Import framer-motion
import { motion } from "framer-motion";
// import icons
import { IoClose } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
// import Link
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="text-PrimaryColor lg:hidden xl:hidden">
      <div
        onClick={toggleMenu}
        className="cursor-pointer mt-12 text-[50px] md:text-[60px] md:font- font-extrabold"
      >
        <CiMenuBurger />
      </div>
      <motion.div
        initial="closed"
        animate={openMenu ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5, ease: "easeInOut" }} // Smoother transition
        className="bg-white shadow-2xl fixed w-full top-0 right-0 max-w-xs h-screen z-50"
      >
        <div
          onClick={toggleMenu}
          className="text-4xl absolute z-30 left-5 top-10 text-PrimaryColor hover:text-slate-500 transition font-semibold"
        >
          <IoClose />
        </div>
        <ul className="h-full flex flex-col justify-center items-center gap-10 text-PrimaryColor font-sans font-bold text-xl">
          <li>
            <Link
              to="/om"
              onClick={toggleMenu}
              className="text-PrimaryColor hover:text-slate-500 transition font-semibold"
            >
              Tak Mat O Tur
            </Link>
          </li>
          <li>
            <Link
              to="/trailcamp"
              onClick={toggleMenu}
              className="text-PrimaryColor hover:text-slate-500 transition font-semibold"
            >
              Trail Camp
            </Link>
          </li>
          <li>
            <Link
              to="/coach"
              onClick={toggleMenu}
              className="text-PrimaryColor hover:text-slate-500 transition font-semibold"
            >
              Löpcoach
            </Link>
          </li>
          <li>
            <Link
              to="/topptur"
              onClick={toggleMenu}
              className="text-PrimaryColor hover:text-slate-500 transition font-semibold"
            >
              Topptur
            </Link>
          </li>
          <li>
            <Link
              to="/boende"
              onClick={toggleMenu}
              className="text-PrimaryColor hover:text-slate-500 transition font-semibold"
            >
              Boende
            </Link>
          </li>
          <li>
            <Link
              to="/kontakt"
              onClick={toggleMenu}
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
