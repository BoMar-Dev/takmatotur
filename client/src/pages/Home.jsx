import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// import icons
// import { IoIosArrowDown } from "react-icons/io";

// import Link
import { Link } from "react-router-dom";

// import images
import mondayRun from "../img/home/monday.jpg";
import topptur from "../img/home/topptur.jpg";

// import function
import Scroll from "../functions/Scroll";

// import component
import Card from "../components/Card";

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const isFaded = Scroll();

  useEffect(() => {
    setIsActive(true);

    const timer = setTimeout(() => {
      setIsActive(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-white p-5 pb-10 relative">
      <motion.header
        className="absolute top-[-200px] xl:top-[-250px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:text-xl font-bold text-PrimaryColor z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <div className="relative bg-black bg-opacity-50 p-4 md:p-6 rounded-md text-center">
          <div className="ml-2 md:ml-5 xl:ml-1 font-semibold text-white">
            <h1 className="text-xl md:text-2xl xl:text-4xl">Trail Camp 2024</h1>
          </div>
          <div className="mt-2 md:mt-4 flex justify-center">
            <Link to="/trailcamp">
              <button className="custom-button bg-emerald-500 text-white hover:shadow-sky-700">
                <span className="relative z-10">Boka / Info</span>
              </button>
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Company description section */}
      <section className="p-3 rounded-md md:w-[80%] lg:w-[60%] xl:w-[55%] m-auto lg:mb-10">
        <a href="/om">
          <h2 className="text-center text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] mb-2 cursor-pointer font-semibold">
            Tak Mat O Tur
          </h2>
        </a>
        <div
          className={`scroll-icon ${
            isFaded ? "opacity-0" : "opacity-100"
          } transition-opacity duration-1000`}
        >
          {/* <IoIosArrowDown className="fixed bottom-12 left-1/2 transform -translate-x-1/2 w-8 h-8 animate-bounce opacity-45" />  // function to hint that your supposed to scroll down */}
        </div>
        <p className="max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-3xl 3xl:max-w-4xl mx-auto">
          Välkommen till Tak Mat o Tur i Duved, där vi kombinerar komfort,
          gastronomi och äventyr för oförglömliga upplevelser. Drivna av vår
          passion för löpning, skidåkning och gästupplevelser, strävar vi efter
          att ge dig det bästa av Duved med omnejd. Vi erbjuder en unik och
          genuin vistelse fylld med äventyr, god mat och fantastisk natur.
        </p>
      </section>

      {/* Cards section */}
      <section className="card-container grid grid-cols-1 lg:grid-cols-2 xl:w-[80%] m-auto gap-10 md:w-[80%] 3xl:w-[50%] mb-12">
        <Card
          image={mondayRun}
          title="Måndagslöpning"
          link="/coach/mandagslopning"
          description="Upptäck magin med Jämtlands härligaste löpargrupp! Under sex måndagar får du chansen att vara med i en inspirerande gemenskap och utveckla din löpning på bästa sätt."
        />
        <Card
          image={topptur}
          title="Topptur för alla årstider"
          link="/topptur"
          description="Vare sig det är sommar, vår, höst eller vinter så kan vi erbjuda toppturer som passar alla. Vi försöker ta oss ifrån folkmängden och tar er till platser där ni får känna av lugnet och äventyret på samma gång."
        />
      </section>
    </main>
  );
};

export default Home;
