import { useState, useEffect, useRef } from "react";
// Import framer-motion
import { motion } from "framer-motion";
// import icons
import { IoClose } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
// import Link
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const [isLandscape, setIsLandscape] = useState(false);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    if (openMenu && menuRef.current) {
      // Scroll to the top of the menu when it opens
      menuRef.current.scrollTop = 0;
    }

    // Check orientation and screen size and update state
    const checkOrientation = () => {
      if (window.innerWidth < 768 && window.innerWidth > window.innerHeight) {
        // Only set landscape if the width is less than 768px (mobile devices)
        setIsLandscape(true);
      } else {
        setIsLandscape(false);
      }
    };

    window.addEventListener("resize", checkOrientation);
    checkOrientation(); // Initial check on component mount

    return () => window.removeEventListener("resize", checkOrientation);
  }, [openMenu]);

  return (
    <nav className="text-PrimaryColor lg:hidden xl:hidden">
      <div
        onClick={toggleMenu}
        className="cursor-pointer mt-12 text-[50px] md:text-[60px] font-extrabold"
      >
        <CiMenuBurger />
      </div>
      <motion.div
        ref={menuRef}
        initial="closed"
        animate={openMenu ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5, ease: "easeInOut" }} // Smoother transition
        className="bg-white shadow-2xl fixed w-full top-0 right-0 max-w-xs h-screen z-50 overflow-y-auto"
      >
        <motion.div
          key={openMenu ? "open" : "closed"} // Force re-render by changing key
          onClick={toggleMenu}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }} // Smooth pop-in effect with delay
          className="text-4xl fixed z-30 ml-3  top-10 text-PrimaryColor hover:text-slate-500 transition font-semibold"
        >
          <IoClose />
        </motion.div>
        <ul
          className={`h-full flex flex-col justify-center items-center gap-8 text-PrimaryColor font-sans font-bold text-xl ${
            isLandscape ? "mt-24" : "mt-0"
          }`}
        >
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
