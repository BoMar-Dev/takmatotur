import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// import images
import profil from "../img/coach/profil4.jpg";
import corporateCoach from "../img/coach/foretag.webp";
import privatCoach from "../img/coach/personlig.webp";
import mondayRun from "../img/home/monday.webp";
import backgroundImg from "../img/about/background.svg";

// import components
import GeneralRunningForm from "../components/forms/GeneralRunningForm";
import SEOHelmet from "../components/SEOHelment";
import Card from "../components/Card";

const Coach = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <section className="section flex flex-col p-5 items-center relative 3xl:w-[70%] 3xl:m-auto mb-5">
      <SEOHelmet
        title="Löpcoach | Tak Mat O Tur"
        description="Privat löpcoachning och företagsträning från Tak Mat o Tur. Vi erbjuder skräddarsydda träningsprogram och teknisk rådgivning för att förbättra din löpstil, öka effektiviteten och minska skaderisken."
        keywords="Löpcoach, träning, coaching, triathlon, personlig träning"
        url="http://takmatotur.se/coach"
        image={profil} // Image for social sharing
      />

      <div
        className="absolute top-[-700px] left-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "700%",
          opacity: 0.05,
          zIndex: -1,
          transform: "translateX(-30%)",
        }}
      ></div>

      <header className="text-center mb-5">
        <h1 className="font-bold">
          Löpcoach
          <span className="block sm:hidden">Martin Gillgren</span>
          <span className="hidden sm:inline"> – Martin Gillgren</span>
        </h1>
      </header>

      <div className="text-center flex justify-center mb-10 p-2">
        <button
          onClick={openForm}
          className="custom-button bg-amber-700 text-white"
        >
          <span className="relative z-10">Kontakta löpcoach</span>
        </button>
      </div>

      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <GeneralRunningForm closeForm={closeForm} />
          </motion.div>
        )}
      </AnimatePresence>
      <article className="p-3 md:px-20 md:mt-5 xl:p-8 xl:w-2/3 m-auto font-semibold text-base md:text-md xl:text-xl 3xl:w-[85%] mb-10">
        <p className="3xl:w-[85%] m-auto">
          Med ett ursprung inom friidrott och fotboll har löpning alltid varit
          en grund i mitt liv. Jag specialiserade mig främst på 800 m, 1500 m
          och 5000 m. Detta är år som jag är otroligt tacksam för. Farten är
          förstås inte den samma som 42-åring men erfarenheter kring teknik,
          motivation och effektivitet i löpsteget finns kvar.
        </p>
      </article>

      <div className="xl:flex xl:space-x-10 xl:items-start md:w-[80%]">
        <article className="p-5 xl:w-1/2">
          <p className="mb-5">
            När gnistan för att tävla på löparbanor började avta övergick jag
            till längre distanser och påbörjade också en satsning mot triathlon
            parallellt.
          </p>
          <p className="mb-5">
            Att få utveckla nya färdigheter som simning och cykling i
            kombination med löpningen var fantastiskt kul och inspirerande. Mina
            främsta distanser blev inte helt oväntat de med lite mer fart i, men
            jag tog mig också igenom ett par långdistanser och Ironmans, men då
            mest för äventyret och festen som större evenemang innebär.
          </p>
          <p>
            I och med vår flytt till Jämtland slutade jag tävla i triathlon men
            har fortfarande kvar simningen och cyklingen som alternativ träning
            till löpningen. Idag finns inga ambitioner om pallplaceringar kvar,
            löpningen har fått övergå till upplevelser och äventyr istället. Jag
            försöker fortfarande ligga på en hyfsad nivå med ca 7 mil i veckan
            men bara för att det är så underbart att springa. Om det blir några
            tävlingar så väljer jag bara de som är roliga, gärna stora events
            där löpfesten är lika viktig som prestationen.
          </p>
        </article>
        <aside className="p-5 xl:w-1/2 flex items-center">
          <div></div>
          <img
            src={profil}
            alt="Profilbild på Martin Gillgren löpcoach Tak Mat o Tur"
            className=" rounded-lg"
          />
        </aside>
      </div>

      <div className="text-center my-10">
        <h2 className="text-xl font-semibold text-amber-700">
          Vad jag erbjuder :
        </h2>
      </div>

      <div className="card-container md:w-[80%] flex flex-col space-y-8 xl:flex-row xl:space-y-0 xl:space-x-10 mb-10 3xl:">
        <Card
          image={mondayRun}
          title="Måndagslöpning"
          link="/coach/mandagslopning"
          description="Upptäck magin med Jämtlands härligaste löpargrupp! Under sex måndagar får du chansen att vara med i en inspirerande gemenskap och utveckla din löpning på bästa sätt."
          loading="lazy"
        />
        <Card
          image={corporateCoach}
          title="Företagsträning"
          link="/coach/foretag"
          description="Vill ni skapa en starkare teamkänsla, öka arbetsglädjen och samtidigt förbättra hälsan hos era medarbetare? – Följ med oss på en 10-veckors Löpcoachingresa för Företagsgrupper!."
          loading="lazy"
        />
        <Card
          image={privatCoach}
          title="Personlig löpcoachning"
          link="/coach/personlig"
          description="Privat löpcoachning från Tak Mat o Tur erbjuder skräddarsydda träningsprogram och teknisk rådgivning för att förbättra din löpstil, öka effektiviteten och minska skaderisken"
          loading="lazy"
        />
      </div>

      <section className="text-center p-5 md:w-[80%]">
        <p>
          Kom igång att springa redan idag{" "}
          <span className="font-extrabold"></span>
          <br />
          Kontakta mig så ser vi till att göra en rolig strukturerad plan som
          passar just dig eller er
        </p>
      </section>

      <div className="text-center flex justify-center mb-10 p-5">
        <button
          onClick={openForm}
          className="custom-button bg-amber-700 text-white"
        >
          <span className="relative z-10">Kontakta löpcoach</span>
        </button>
      </div>

      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <GeneralRunningForm closeForm={closeForm} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Coach;
