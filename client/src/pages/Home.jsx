import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import mondayRun from "../img/home/monday.jpg";
import topptur from "../img/home/topptur.jpg";
import Scroll from "../functions/Scroll";

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
    <section className="bg-white p-5 relative">
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:text-xl font-bold text-PrimaryColor z-10"
        style={{ top: "-250px" }}
        onClick={() => setIsActive(!isActive)}
      >
        {/* animate-jump-in animate-once animate-delay-[1500ms */}
        <div className={`ml-5 xl:ml-1 text-emerald-800 ${isActive ? "" : ""}`}>
          Trail Camp 2024
        </div>
        <div className=""></div>
        <div className="bg-white">
          <Link to="/trailcamp" className="block">
            <button className="before:ease relative h-12 w-40 overflow-hidden border border-PrimaryColor shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-emerald-800 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 rounded-sm">
              <span className="relative z-10">Boka / Info</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="p-5 rounded-md md:w-[80%] lg:w-[60%] xl:w-[55%] md:m-auto text-center align-middle lg:mb-10">
        <a href="/om">
          <h2 className="text-xl font-medium text-center mb-2 cursor-pointer">
            Tak Mat O Tur
          </h2>
        </a>
        <div
          className={`scroll-icon ${
            isFaded ? "opacity-0" : "opacity-100"
          } transition-opacity duration-1000`}
        >
          <IoIosArrowDown className="fixed bottom-12 left-1/2 transform -translate-x-1/2 w-8 h-8 animate-bounce opacity-50" />
        </div>
        <p>
          Välkommen till Tak Mat o Tur i Duved, där vi kombinerar komfort,
          gastronomi och äventyr för oförglömliga upplevelser. Drivna av vår
          passion för löpning, skidåkning och gästupplevelser, strävar vi efter
          att ge dig det bästa av Duved med omnejd. Vi erbjuder en unik och
          genuin vistelse fylld med äventyr, god mat och fantastisk natur.
        </p>
      </div>
      <div className="card-container lg:flex lg:space-x-10">
        <div className="bg-white flex flex-col p-5 w-full md:w-[80%] lg:w-[50%] md:m-auto shadow-xl mt-10 mb-10 rounded-lg md:mb-10 flex-grow">
          <img className="rounded-md" src={mondayRun} alt="Måndagslöpning" />
          <a href="/coach">
            <h2 className="text-xl mt-2 font-medium">Måndagslöpning</h2>
          </a>
          <p className="text-[16px] mt-5 md:w-[80%]">
            Upptäck magin med Jämtlands härligaste löpargrupp! Under sex
            måndagar får du chansen att vara med i en inspirerande gemenskap och
            utveckla din löpning på bästa sätt.
          </p>
        </div>
        <div className="bg-white flex flex-col p-5 w-full md:w-[80%] lg:w-[50%] md:m-auto shadow-xl mt-10 mb-10 rounded-lg md:mb-10 flex-grow">
          <img
            className="rounded-md"
            src={topptur}
            alt="Topptur för alla årstider"
          />
          <a href="/topptur">
            <h2 className="text-xl mt-2 font-medium">
              Topptur för alla årstider
            </h2>
          </a>
          <p className="text-[16px] mt-5">
            Vare sig det är sommar, vår, höst eller vinter så kan vi erbjuda
            toppturer som passar alla. Vi försöker ta oss ifrån folkmängden och
            tar er till platser där ni får känna av lugnet och äventyret på
            samma gång.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
