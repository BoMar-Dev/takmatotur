import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import images
import backgroundImg from "../img/about/background.svg";
import boende1 from "../img/accommodation/boende1.jpg";
import boende2 from "../img/accommodation/boende2.jpg";
import boende3 from "../img/accommodation/boende3.jpg";
import boende4 from "../img/accommodation/boende4.jpg";
import boende5 from "../img/accommodation/boende5.jpg";
import boende6 from "../img/accommodation/boende6.jpg";

// Import component
import AccomodationForm from "../components/forms/AccomodationForm";

const Accommodation = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function openForm() {
    setIsFormOpen(true);
  }

  function closeForm() {
    setIsFormOpen(false);
  }

  return (
    <section className="relative flex flex-col items-center p-5 mb-5 2xl:pb-10 3xl:w-[60%] 3xl:m-auto">
      <div
        className="absolute top-[-700px] left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "100%",
          backgroundRepeat: "repeat-x",
          opacity: 0.15,
          zIndex: -1,
          transform: "translateX(-30%)",
        }}
      ></div>
      <header className="flex flex-col items-center justify-center mb-6 text-center">
        <h1 className="mb-2 text-2xl font-bold">Boende</h1>
        <h2 className="text-lg font-bold">
          Bo med fjällen, naturen, lugnet och äventyret runt knuten.
        </h2>
      </header>

      <div className="mb-6 text-center font-semibold md:w-[80%] xl:w-[70%]">
        <p>
          Oavsätt antal personer så erbjuder vi ett boende i fjällnära miljö med
          naturen som bästa grannen.
        </p>
      </div>
      <div className="text-center flex justify-center p-5">
        <button
          onClick={openForm}
          className="custom-button bg-amber-600 text-white "
        >
          <span className="relative z-10">Bokningsförfrågan</span>
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
            <AccomodationForm closeForm={closeForm} />
          </motion.div>
        )}
      </AnimatePresence>

      <article className="flex flex-col p-5 w-full md:w-[80%] lg:w-[75%] xl:w-[90%]">
        <section className="flex flex-col xl:flex-row xl:items-center xl:justify-between bg-white rounded-lg shadow-md mb-5 md:mb-5 lg:mb-5 xl:mb-0">
          <img
            className="w-full xl:w-[50%] rounded-none"
            src={boende1}
            alt="Trail Camp"
          />
          <div className="w-full xl:w-[50%] xl:ml-0 p-4">
            <h3 className="mb-2 font-semibold">Värdparet</h3>
            <ul className="list-inside list-disc">
              <li className="list-none">
                Bo i vår lägenhet med fjällen som utsikt och äventyret bara ett
                stenkast bort. Önskar ni ha frukost eller middag? Vår mat ska
                vara en del av upplevelsen!
              </li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col xl:flex-row-reverse xl:items-center xl:justify-between bg-white rounded-lg shadow-md mb-5 md:mb-5 lg:mb-5 xl:mb-0">
          <img
            className="w-full xl:w-[50%] rounded-none"
            src={boende2}
            alt="föreläsare Marcus Torgeby"
          />
          <div className="w-full xl:w-[50%] xl:mr-0 p-4">
            <h3 className="mb-2 font-semibold">
              Egen ingång med stor altan och gratis parkering
            </h3>
            <p>Här kan ni känna er som hemma efter en dag full av äventyr</p>
          </div>
        </section>

        <section className="flex flex-col xl:flex-row xl:items-center xl:justify-between bg-white rounded-lg shadow-md mb-5 md:mb-5 lg:mb-5 xl:mb-0">
          <img
            className="w-full xl:w-[50%] rounded-none"
            src={boende3}
            alt="Trail Camp Group"
          />
          <div className="w-full xl:w-[50%] xl:ml-0 p-4">
            <h3 className="mb-2 font-semibold">Ett kök som har allt</h3>
            <p>
              Vad är viktigt för ert kök? Ni kan vara lugna, vårt kök har alla
              vardagliga bekvämligheter.
            </p>
          </div>
        </section>

        <section className="flex flex-col xl:flex-row-reverse xl:items-center xl:justify-between bg-white rounded-lg shadow-md mb-5 md:mb-5 lg:mb-5 xl:mb-0">
          <img
            className="w-full xl:w-[50%] rounded-none"
            src={boende4}
            alt="föreläsare Marcus Torgeby"
          />
          <div className="w-full xl:w-[50%] xl:mr-0 p-4">
            <h3 className="mb-2 font-semibold">
              Sovplats för upp mot 4 personer
            </h3>
            <p>
              Vi har sovplatser som är bra anpassade för 4 personer. 1st
              våningssäng + 1st bäddsoffa.
            </p>
          </div>
        </section>

        <section className="flex flex-col xl:flex-row xl:items-center xl:justify-between bg-white rounded-lg shadow-md mb-5 md:mb-5 lg:mb-5 xl:mb-0">
          <img
            className="w-full xl:w-[50%] rounded-none"
            src={boende5}
            alt="Trail Camp Group"
          />
          <div className="w-full xl:w-[50%] xl:ml-0 p-4">
            <h3 className="mb-2 font-semibold">Slå sig ner</h3>
            <p>
              Vare sig det är att slå sig ner till middagen eller luta sig
              tillbaka i soffan med ett sällskapsspel så lovar vi ett trivsamt
              boende.
            </p>
          </div>
        </section>

        <section className="flex flex-col xl:flex-row-reverse xl:items-center xl:justify-between bg-white rounded-lg shadow-md mb-5 md:mb-5 lg:mb-5 xl:mb-0">
          <img
            className="w-full xl:w-[50%] rounded-none"
            src={boende6}
            alt="föreläsare Marcus Torgeby"
          />
          <div className="w-full xl:w-[50%] xl:mr-0 p-4">
            <h3 className="mb-2 font-semibold">Gångavstånd till äventyret</h3>
            <p>
              Vattenfall, skidåkning i backen eller i längdspåret eller kanske
              springa sig svettig på fjället. Alla dessa möjligheter finner ni
              med gångavstånd från lägenheten.
            </p>
          </div>
        </section>
      </article>

      <div className="text-center flex justify-center p-5">
        <button
          onClick={openForm}
          className="custom-button bg-amber-600 text-white "
        >
          <span className="relative z-10">Bokningsförfrågan</span>
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
            <AccomodationForm closeForm={closeForm} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Accommodation;
