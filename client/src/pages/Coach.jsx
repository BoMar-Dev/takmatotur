import Card from "../components/Card";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// import images
import profil2 from "../img/coach/profil2.jpg";
import corporateCoach from "../img/coach/foretag.jpg";
import privatCoach from "../img/coach/personlig.jpg";
import mondayRun from "../img/home/monday.jpg";
import backgroundImg from "../img/about/background.svg";

// import components
import GeneralRunningForm from "../components/forms/GeneralRunningForm";

const Coach = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function openForm() {
    setIsFormOpen(true);
  }

  function closeForm() {
    setIsFormOpen(false);
  }

  return (
    <section className="section flex flex-col p-5 items-center relative 3xl:w-[70%] 3xl:m-auto mb-5">
      <div
        className="absolute top-[-700px] left-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "700%",
          backgroundPosition: "",
          backgroundRepeat: "no-repeat",
          opacity: 0.08,
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
          className="custom-button bg-amber-600 text-white "
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
      <div className="xl:flex xl:space-x-10 xl:items-start md:w-[80%]">
        <article className="p-5 xl:w-1/2">
          <p className="mb-5">
            Med ett ursprung inom friidrott och fotboll har löpning alltid varit
            en grund i mitt liv. Jag specialiserade mig främst på 800 m, 1500 m
            och 5000 m. Detta är år som jag är otroligt tacksam för. Farten är
            förstås inte den samma som 42-åring men erfarenheter kring teknik,
            motivation och effektivitet i löpsteget finns kvar.
          </p>
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
          <img
            src={profil2}
            alt="profilbild på Martin Gillgren löpcoach tak mat o tur"
            className="w-full rounded-3xl object-cover xl:w-[80%] 3xl:w-[50%]"
            style={{ height: "auto", maxHeight: "100%" }}
          />
        </aside>
      </div>

      <header className="text-center my-10">
        <h2 className="text-xl font-semibold">Vad jag erbjuder :</h2>
      </header>
      <div className="card-container md:w-[80%] flex flex-col space-y-8 xl:flex-row xl:space-y-0 xl:space-x-5 mb-10">
        <Card
          image={mondayRun}
          title="Måndagslöpning"
          link="/coach/mandagslopning"
          description="Upptäck magin med Jämtlands härligaste löpargrupp! Under sex måndagar får du chansen att vara med i en inspirerande gemenskap och utveckla din löpning på bästa sätt."
        />
        <Card
          image={corporateCoach}
          title="Företagsträning"
          link="/coach/foretag"
          description="Vill ni skapa en starkare teamkänsla, öka arbetsglädjen och samtidigt förbättra hälsan hos era medarbetare? – Följ med oss på en 10-veckors Löpcoachingresa för Företagsgrupper!."
        />
        <Card
          image={privatCoach}
          title="Personlig löpcoachning"
          link="/coach/personlig"
          description="Privat löpcoachning från Tak Mat o Tur erbjuder skräddarsydda träningsprogram och teknisk rådgivning för att förbättra din löpstil, öka effektiviteten och minska skaderisken"
        />
      </div>
      <footer className="text-center  p-5 md:w-[80%]">
        <p>
          Kom igång att springa redan idag{" "}
          <span className="font-extrabold"></span>
          <br />
          Kontakta mig så ser vi till att göra en rolig strukturerad plan som
          passar just dig eller er
        </p>
      </footer>

      <div className="text-center flex justify-center mb-10 p-2 mb">
        <button
          onClick={openForm}
          className="custom-button bg-amber-600 text-white "
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
