import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const location = useLocation();

  const isActiveLink = (path) => location.pathname === path;

  const navLinks = [
    { path: "/om", label: "Tak Mat O Tur" },
    { path: "/trailcamp", label: "Trail Camp" },
    { path: "/coach", label: "Löpcoach" },
    { path: "/topptur", label: "Topptur" },
    { path: "/boende", label: "Boende" },
    { path: "/kontakt", label: "Kontakt" },
  ];

  return (
    <nav className="hidden lg:flex space-x-12 pt-12 ml-20 mr-20 ">
      {navLinks.map((link) => (
        <div key={link.path} className="relative flex flex-col items-center">
          <Link
            to={link.path}
            className={`text-PrimaryColor whitespace-nowrap hover:text-slate-950 hover:scale-110 hover:font-extrabold transition font-semibold ${
              isActiveLink(link.path) ? "font-bold scale-110" : ""
            }`}
          >
            {link.label}
          </Link>
          <AnimatePresence>
            {isActiveLink(link.path) && (
              <motion.div
                className="w-full bg-black mt-1"
                style={{ height: "2px" }}
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
  );
};

export default Navigation;
