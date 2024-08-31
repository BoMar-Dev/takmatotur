import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Import images
import mondayRun from "../img/home/monday.webp";
import topptur from "../img/home/topptur.webp";
import boende3 from "../img/accommodation/boende3.webp";
const landingImage = import("../img/header/landing.webp");
import backgroundImg from "../img/about/background.svg";

// Import component
import Card from "../components/Card";
import SEOHelmet from "../components/SEOHelment";

const Home = () => {
  const [, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);

    const timer = setTimeout(() => {
      setIsActive(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SEOHelmet
        title="Välkommen | Tak Mat O Tur"
        description="Välkommen till Tak Mat o Tur i Duved. Vi kombinerar komfort, gastronomi och äventyr för oförglömliga upplevelser i fantastiska Jämtland."
        keywords="takmatotur Tak Mat o Tur, Duved, äventyr, komfort, gastronomi, boende, topptur, löpning, vandra, mat"
        url="https://takmatotur.se/"
        image={landingImage}
      />
      <main className="relative p-3 pb-16">
        <motion.header
          className="absolute top-[-200px] xl:top-[-250px] left-1/2 transform -translate-x-1/2 xl:text-xl font-bold text-PrimaryColor z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <div className="relative bg-black bg-opacity-50 p-4 md:p-6 rounded-md text-center">
            <div className="ml-2 md:ml-5 xl:ml-1 font-semibold text-white">
              <h1 className="text-xl md:text-2xl xl:text-4xl">
                Trail Camp 2024
              </h1>
            </div>
            <div className="mt-2 md:mt-4 flex justify-center">
              <Link to="/trailcamp">
                <button className="custom-button bg-emerald-600 text-white hover:shadow-sky-700">
                  <span className="relative z-10">Boka / Info</span>
                </button>
              </Link>
            </div>
          </div>
        </motion.header>

        <section className="relative flex flex-col items-center mb-10 max-w-screen-xl mx-auto">
          <header className="text-center mb-10 pt-2">
            <h1 className="font-bold">Välkommen</h1>
          </header>

          <article className="max-w-screen-xl mx-auto p-3 mb-10">
            <p className="xl:text-left text-base md:text-md xl:text-xl p-1 font-semibold mx-auto">
              Välkommen till Tak Mat o Tur i Duved, där vi kombinerar komfort,
              gastronomi och äventyr för oförglömliga upplevelser. Drivna av vår
              passion för löpning, skidåkning och gästupplevelser, strävar vi
              efter att ge dig det bästa av Duved med omnejd. Vi erbjuder en
              unik och genuin vistelse fylld med äventyr, god mat och fantastisk
              natur.
            </p>
          </article>
        </section>

        <div className="text-center my-10">
          <h2 className="text-xl font-semibold text-amber-700">
            Aktiviteter & Utbud :
          </h2>
        </div>

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "240%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.07,
            zIndex: -1,
          }}
          loading="lazy"
        ></div>

        <section className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
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
            description="Vi erbjuder toppturer som passar alla önskemål och erfarenheter. Vi försöker ta oss ifrån folkmängden och tar er till platser där ni får känna av lugnet och äventyret på samma gång."
          />
          <div className="md:col-span-2 lg:col-span-1 flex justify-center">
            <Card
              image={boende3}
              title="Boende i Duved"
              link="/boende"
              description="Njut av ett bekvämt och mysigt boende i hjärtat av Duved. Med fjällen som utsikt och äventyret bara ett stenkast bort, erbjuder vi en perfekt bas för din fjällupplevelse."
            />
          </div>
        </section>
        <div className="text-center flex justify-center w-full p-5 max-w-screen-xl xl:max-w-[1000px] mx-auto mt-7">
          <div>
            <h2 className="text-xl font-semibold text-amber-700 mb-2">
              Upptäck mer hos oss!
            </h2>
            <p>
              Oavsett om du är här för äventyr, god mat eller bara en
              avkopplande vistelse, vi har något för alla. Tveka inte att
              kontakta oss för att planera ditt nästa besök, och låt oss göra
              det till en oförglömlig upplevelse.
            </p>

            <div className="flex justify-center mt-10 mb-5 ">
              <Link to="/kontakt" className="inline-flex">
                <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-amber-700 text-white shadow-2xl transition-all rounded-md">
                  <span className="relative z-10">Kontakta / Frågor</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
