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
import SkeletonLoader from "../components/SkeletonLoader";

const Coach = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <section className="relative flex flex-col items-center p-5 pb-16">
      <SEOHelmet
        title="Löpcoach | Tak Mat O Tur"
        description="Privat löpcoachning och företagsträning från Tak Mat o Tur. Vi erbjuder skräddarsydda träningsprogram och teknisk rådgivning för att förbättra din löpstil, öka effektiviteten och minska skaderisken."
        keywords="Löpcoach, Tak Mat o Tur, löpning åre, trail, åre löpning, träningsprogram löpning, måndagslöpning, åredalens löpgupp, löpgrupp, åredalen coach, företagsträning åre, företagslöpning åre, löpning företag, gruppträning, gemenskap, löpning roligt, takmat, takmatotur, träning, coaching, triathlon, personlig träning, Marin Gillgren, rolig löpning, förbättra löpsteg, löpgrupp, måndagslöpning"
        url="http://takmatotur.se/coach"
        image={profil}
      />

      <div
        className="absolute top-[-700px] left-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "300%",
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

      <article className="max-w-screen-xl mx-auto p-3 mb-10">
        <p className="text-base md:text-md xl:text-xl font-semibold">
          Med ett ursprung inom friidrott och fotboll har löpning alltid varit
          en grund i mitt liv. Jag specialiserade mig främst på 800 m, 1500 m
          och 5000 m. Detta är år som jag är otroligt tacksam för. Farten är
          förstås inte den samma som 42-åring men erfarenheter kring teknik,
          motivation och effektivitet i löpsteget finns kvar.
        </p>
      </article>

      <div className="xl:flex xl:space-x-10 xl:items-start max-w-screen-xl mx-auto">
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
          {loading && <SkeletonLoader height="100%" width="100%" />}
          <img
            src={profil}
            alt="Profilbild på Martin Gillgren löpcoach Tak Mat o Tur"
            className={`rounded-lg transition-opacity duration-500 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => setLoading(false)}
            style={{
              display: loading ? "none" : "block",
              transition: "opacity 1s ease-in-out",
            }}
          />
        </aside>
      </div>

      <div className="text-center my-10">
        <h2 className="text-xl font-semibold text-amber-700">
          Vad jag erbjuder:
        </h2>
      </div>

      <div className="max-w-screen-xl mx-auto flex flex-col space-y-8 xl:flex-row xl:space-y-0 xl:space-x-10 mb-10 md:p-5 ">
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

      <section className="text-center p-5 max-w-screen-xl mx-auto">
        <h2 className="text-xl font-semibold text-amber-700 mb-2">
          Kom igång att springa redan idag!
        </h2>
        <p>
          Kontakta mig så ser vi till att göra en rolig strukturerad plan som
          passar just dig eller er.
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
