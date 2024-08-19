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
          backgroundSize: "200%",
          backgroundRepeat: "repeat-y",
          opacity: 0.08,
          zIndex: -1,
          transform: "translateX(-20%)",
        }}
      ></div>
      <header className="flex flex-col items-center justify-center mb-6 text-center">
        <h1 className="mb-2  font-bold">Boende</h1>
      </header>
      <article className="p-3 xl:w-2/3 m-auto font-semibold text-lg">
        <p className="">
          Med ett ursprung i södra Sverige har vi, Emma och Martin, sedan några
          år bosatt oss i vackra Duved. Vår flytt till Jämtland har nog
          egentligen alltid varit självklar och, kanske, på något sätt
          förutbestämd. Natur, träning, mat och service har alltid legat oss
          varmt om hjärtat och Åredalen är för oss den perfekta platsen för
          detta.
        </p>
        <p className="mt-5">
          Hos oss har du fjällen med allt vad de erbjuder ett stenkast bort. En
          kort promenad tar dig upp till Duveds och Tegefjälls liftsystem om
          vintern och på sommaren kan du enkelt ansluta till flera leder för
          vandring och löpning. För transport till Åre finns skidbussen precis
          nedför backan.
        </p>
      </article>

      <div className="mb-6 text-center font-semibold md:w-[80%] xl:w-[70%]"></div>
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
        <section className="flex flex-col xl:flex-row xl:items-center xl:justify-between  rounded-lg  mb-5 md:mb-5 lg:mb-5 xl:mb-0">
          <img
            className="w-full xl:w-[50%] rounded-none"
            src={boende1}
            alt="Trail Camp"
          />
          <div className="w-full xl:w-[50%] xl:ml-0 p-4">
            <h3 className="mb-2 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] xl:text-[22px] font-semibold">
              Värdparet
            </h3>
            <ul className="list-inside list-disc">
              <li className="list-none">
                Bo i vår lägenhet med fjällen som utsikt och äventyret bara ett
                stenkast bort. Önskar ni frukost eller middag? Vår mat med
                inspiration från Jämtland och Asien kan bli en del av er
                semester.
              </li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col xl:flex-row-reverse xl:items-center xl:justify-between b rounded-lg  mb-5 md:mb-5 lg:mb-5 xl:mb-0">
          <img
            className="w-full xl:w-[50%] rounded-none"
            src={boende2}
            alt="föreläsare Marcus Torgeby"
          />
          <div className="w-full xl:w-[50%] xl:mr-0 p-4">
            <h3 className="mb-2 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] xl:text-[22px] font-semibold">
              Egen ingång och gratis parkering
            </h3>
            <p>
              Känn er som hemma efter en dag fylld av äventyr. Kommer du med
              elbil? Laddare finns på parkeringen.
            </p>
          </div>
        </section>

        <section className="flex flex-col xl:flex-row xl:items-center xl:justify-between  rounded-lg  mb-5 md:mb-5 lg:mb-5 xl:mb-0">
          <img
            className="w-full xl:w-[50%] rounded-none"
            src={boende3}
            alt="Trail Camp Group"
          />
          <div className="w-full xl:w-[50%] xl:ml-0 p-4">
            <h3 className="mb-2 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] xl:text-[22px] font-semibold">
              Ett kök som har allt
            </h3>
            <p>
              Köket är fullutrustat med diskmaskin, induktionshäll, ugn, micro,
              kyl/frys, kaffebryggare, kaffekokare och mycket mer.
            </p>
          </div>
        </section>

        <section className="flex flex-col xl:flex-row-reverse xl:items-center xl:justify-between  rounded-lg  mb-5 md:mb-5 lg:mb-5 xl:mb-0">
          <img
            className="w-full xl:w-[50%] rounded-none"
            src={boende4}
            alt="föreläsare Marcus Torgeby"
          />
          <div className="w-full xl:w-[50%] xl:mr-0 p-4">
            <h3 className="mb-2 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] xl:text-[22px] font-semibold">
              Sovplats för upp mot 4 personer
            </h3>
            <p>
              Familjesäng och en stor bäddsoffa at slappna av i när benen är
              trötta
            </p>
          </div>
        </section>

        <section className="flex flex-col xl:flex-row xl:items-center xl:justify-between  rounded-lg  mb-5 md:mb-5 lg:mb-5 xl:mb-0">
          <img
            className="w-full xl:w-[50%] rounded-none"
            src={boende5}
            alt="Trail Camp Group"
          />
          <div className="w-full xl:w-[50%] xl:ml-0 p-4">
            <h3 className="mb-2 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] xl:text-[22px] font-semibold">
              Slå sig ner
            </h3>
            <p>
              Vare sig det är att slå sig ner till middagen eller luta sig
              tillbaka i soffan med ett sällskapsspel så lovar vi ett trivsamt
              boende.
            </p>
          </div>
        </section>

        <section className="flex flex-col xl:flex-row-reverse xl:items-center xl:justify-between  rounded-lg  mb-5 md:mb-5 lg:mb-5 xl:mb-0">
          <img
            className="w-full xl:w-[50%] rounded-none"
            src={boende6}
            alt="föreläsare Marcus Torgeby"
          />
          <div className="w-full xl:w-[50%] xl:mr-0 p-4">
            <h3 className="mb-2 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] xl:text-[22px] font-semibold">
              Nära till äventyret
            </h3>
            <p>
              Med gångavstånd från lägenheten hittar ni skidåkning i backe,
              fantastiska toppturer, längdspår, vandring eller varför inte ett
              svettigt löppass på fjället. Vi hjälper dig såklart med våra tips!
            </p>
          </div>
        </section>
      </article>

      <article className="p-3 xl:w-2/3 m-auto font-semibold text-lg">
        <li className="mt-3">
          Duved Centralstation för buss / tåg : 20 min promenad eller 5 min med
          bil{" "}
        </li>
        <li className="mt-3">
          Duveds skidbackar och skiduthyrning : 15 min promenad eller 4 min med
          bil{" "}
        </li>

        <li className="mt-3">
          Supermarket : Supermarket : 13 min promenad eller 2 min med bil <br />
        </li>
        <li className="mt-3">
          Resturanger och fik : 13 min promenad eller 2 min med bil
        </li>
        <li className="mt-3">Åre by : 7.5km </li>

        <br />
      </article>
      <div className="text-center flex justify-center xl:mt-10  mb-10">
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
