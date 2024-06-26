import React, { useState, useEffect } from "react";
import mondayRun from "../img/home/monday.jpg";
import topptur from "../img/home/topptur.jpg";

const Home = () => {
  const [isActive, setIsActive] = useState(false); // State to manage the active status

  // useEffect hook to trigger the effect on component mount
  useEffect(() => {
    // Set isActive to true when the page loads
    setIsActive(true);

    // Optional: Set a timeout to reset the effect, simulating an animation end
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 3000); // Adjust the duration based on the length of your animation

    // Clean up the timer when the component unmounts or rerenders
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs only on mount (and unmount)

  return (
    <section className="bg-white p-5 relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:text-xl font-bold text-PrimaryColor z-10"
        style={{ top: '-250px' }}
        onClick={() => setIsActive(!isActive)} // Toggle active state on click
      >
        <div className={`ml-5 xl:ml-1 text-emerald-800 ${isActive ? "animate-jump-in animate-once animate-delay-[2000ms] " : ""}`}>
          Trail Camp 2024
        </div>
        
        <div className="bg-white">
          <button className="before:ease relative h-12 w-40 overflow-hidden border border-PrimaryColor shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-PrimaryColor before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180 rounded-sm">
            <span className="relative z-10">Boka / Info</span>
          </button>
        </div>
      </div>
      
      <div className="p-5 rounded-md">
        <h2 className="text-xl font-medium text-center mb-2">Tak Mat O Tur</h2>
        <p>
          Välkommen till Tak Mat o Tur i Duved, där vi kombinerar komfort,
          gastronomi och äventyr för oförglömliga upplevelser. Drivna av vår
          passion för löpning, skidåkning och gästupplevelser, strävar vi efter
          att ge dig det bästa av Duved med omnejd. Vi erbjuder en unik och genuin
          vistelse fylld med äventyr, god mat och fantastisk natur.
        </p>
      </div>

      {/* Card 1 */}
      <div className="bg-white flex flex-col p-5 shadow-xl mt-10 mb-10 rounded-lg">
        <img className="rounded-md" src={mondayRun} alt="Måndagslöpning" />
        <h2 className="text-xl mt-2 font-medium">Måndagslöpning</h2>
        <p className="text-[16px] mt-5">
          Upptäck magin med Jämtlands härligaste löpargrupp! Under sex måndagar
          får du chansen att vara med i en inspirerande gemenskap och utveckla
          din löpning på bästa sätt.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white flex flex-col p-5 shadow-xl mb-20">
        <img className="rounded-md" src={topptur} alt="Topptur för alla årstider" />
        <h2 className="text-xl mt-2 font-medium">Topptur för alla årstider</h2>
        <p className="text-[16px] mt-5">
          Vare sig det är sommar, vår, höst eller vinnter så kan vi erbjuda
          toppturer för alla. Vi försöker ta oss ifrån folkmängden och försöker
          att ta er till ställen där vi får känna av lugnet och äventyret på
          samma gång.
        </p>
      </div>
    </section>
  );
};

export default Home;
