import { useState } from "react";

// Import icons
import { SlMenu } from "react-icons/sl";
import { IoClose } from "react-icons/io5";

// Import Link
import { Link } from "react-router-dom";

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [key, setKey] = useState(0);  // State to hold a key to force re-render

  const resetAnimationClasses = () => {
    setOpenMenu(!openMenu);
    setKey(prevKey => prevKey + 1);  // Increment key to force re-render
  };

  return (
    <nav className="text-PrimaryColor lg:hidden xl:hidden">
      <div onClick={resetAnimationClasses} className="text-4xl font-extrabold cursor-pointer mt-8">
        <SlMenu />
      </div>
      {openMenu && (
        <div 
          key={key}  // Using the key here to force re-render
          className="bg-white shadow-2xl absolute w-full top-0 right-0 max-w-xs h-screen z-20">
          <div 
            onClick={resetAnimationClasses} 
            className="text-4xl absolute z-30 left-5 top-10 text-PrimaryColor hover:text-slate-500 transition font-semibold animate-jump-in animate-once animate-delay-1000">
            <IoClose/>
          </div>
          <ul className="h-full flex flex-col justify-center items-center gap-10 text-PrimaryColor font-sans font-bold text-xl">
            <li>
              <Link to="/takmatotur" onClick={resetAnimationClasses} className="text-PrimaryColor hover:text-slate-500 transition font-semibold">Tak Mat O Tur</Link>
            </li>
            <li>
              <Link to="/trailcamp" onClick={resetAnimationClasses} className="text-PrimaryColor hover:text-slate-500 transition font-semibold">Trail Camp</Link>
            </li>
            <li>
              <Link to="/coach" onClick={resetAnimationClasses} className="text-PrimaryColor hover:text-slate-500 transition font-semibold">Löpcoach</Link>
            </li>
            <li>
              <Link to="/topptur" onClick={resetAnimationClasses} className="text-PrimaryColor hover:text-slate-500 transition font-semibold">Topptur</Link>
            </li>
            <li>
              <Link to="/boende" onClick={resetAnimationClasses} className="text-PrimaryColor hover:text-slate-500 transition font-semibold">Boende</Link>
            </li>
            <li>
              <Link to="/kontakt" onClick={resetAnimationClasses} className="text-PrimaryColor hover:text-slate-500 transition font-semibold">Kontakt</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
