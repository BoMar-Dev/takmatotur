import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Import images
import mondayRun from "../img/home/monday.webp";
import topptur from "../img/home/topptur.webp";
import boende3 from "../img/accommodation/boende3.webp";

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
    <main className="bg-white p-5 pb-10 relative">
      <SEOHelmet
        title="Home | Tak Mat O Tur"
        description="Välkommen till Tak Mat o Tur i Duved. Vi kombinerar komfort, gastronomi och äventyr för oförglömliga upplevelser i fantastiska Jämtland."
        keywords="Tak Mat o Tur, Duved, äventyr, komfort, gastronomi"
        url="https://takmatotur.se/"
        image="https://takmatotur.se/path-to-image.jpg"
      />

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
              <button className="custom-button bg-emerald-600 text-white hover:shadow-sky-700">
                <span className="relative z-10">Boka / Info</span>
              </button>
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Company description section */}
      <section className="relative flex flex-col items-center mb-5 2xl:pb-10 3xl:w-[60%] 3xl:m-auto">
        <header className="flex flex-col items-center justify-center mb- text-center">
          <h1 className="mb-2 font-bold">Välkommen</h1>
        </header>
        <article className="p-3 md:px-20 md: xl:p-8 xl:w-2/3 m-auto font-semibold text-lg">
          <p>
            Välkommen till Tak Mat o Tur i Duved, där vi kombinerar komfort,
            gastronomi och äventyr för oförglömliga upplevelser. Drivna av vår
            passion för löpning, skidåkning och gästupplevelser, strävar vi
            efter att ge dig det bästa av Duved med omnejd. Vi erbjuder en unik
            och genuin vistelse fylld med äventyr, god mat och fantastisk natur.
          </p>
        </article>
      </section>

      <div className="text-center my-10">
        <h2 className="text-xl font-semibold text-amber-700">
          Aktiviteter & Utbud:
        </h2>
      </div>

      {/* Cards section */}
      <section className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:w-[70%] m-auto gap-10 md:w-[80%] 3xl:w-[50%] mb-12">
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
    </main>
  );
};

export default Home;
