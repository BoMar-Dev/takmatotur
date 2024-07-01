import { useState, useEffect } from "react";

// import icons
import { IoIosArrowDown } from "react-icons/io";

// import Link
import { Link } from "react-router-dom";

// import img
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
    <section className="bg-white p-5 relative">
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:text-xl font-bold text-PrimaryColor z-10"
        style={{ top: "-250px" }}
        onClick={() => setIsActive(!isActive)}
      >
        {/* Div that holds the trail camp and button  */}
        <div className={`ml-5 xl:ml-1 text-emerald-800 ${isActive ? "" : ""}`}>
          Trail Camp 2024
        </div>
        <div className=" bg-emerald-800 rounded-sm">
          <Link to="/trailcamp" className="block">
            <button className="before:ease relative h-12 w-40 overflow-hidden border border-PrimaryColor shadow-2xl rounded-sm">
              <span className="relative z-10 text-white">Boka / Info</span>
            </button>
          </Link>
        </div>
      </div>
      {/* Div that holds short text about Tak Mat O Tur */}
      <div className="p-5 rounded-md md:w-[80%] lg:w-[60%] xl:w-[55%] md:m-auto text-center lg:mb-10">
        <a href="/om">
          <h2 className="text-xl font-medium mb-2 cursor-pointer">
            Tak Mat O Tur
          </h2>
        </a>
        <div
          className={`scroll-icon ${
            isFaded ? "opacity-0" : "opacity-100"
          } transition-opacity duration-1000`}
        >
          <IoIosArrowDown className="fixed bottom-12 left-1/2 transform -translate-x-1/2 w-8 h-8 animate-bounce opacity-45" />
        </div>
        <p>
          Välkommen till Tak Mat o Tur i Duved, där vi kombinerar komfort,
          gastronomi och äventyr för oförglömliga upplevelser. Drivna av vår
          passion för löpning, skidåkning och gästupplevelser, strävar vi efter
          att ge dig det bästa av Duved med omnejd. Vi erbjuder en unik och
          genuin vistelse fylld med äventyr, god mat och fantastisk natur.
        </p>
      </div>
      <div className="card-container grid grid-cols-1 lg:grid-cols-2 xl:w-[80%] m-auto gap-10">
        {/* top card */}
        <Card
          image={mondayRun}
          title="Måndagslöpning"
          link="/coach"
          description="Upptäck magin med Jämtlands härligaste löpargrupp! Under sex måndagar får du chansen att vara med i en inspirerande gemenskap och utveckla din löpning på bästa sätt."
        />
        {/* buttom card */}
        <Card
          image={topptur}
          title="Topptur för alla årstider"
          link="/topptur"
          description="Vare sig det är sommar, vår, höst eller vinter så kan vi erbjuda toppturer som passar alla. Vi försöker ta oss ifrån folkmängden och tar er till platser där ni får känna av lugnet och äventyret på samma gång."
        />
      </div>
    </section>
  );
};

export default Home;
