import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// import component
import AccomodationForm from "../components/forms/AccomodationForm";
import GridImgs from "../components/GridImgs";
import SEOHelmet from "../components/SEOHelment";

// import icon
import { FaInfoCircle } from "react-icons/fa";

// Import images
import backgroundImg from "../img/about/background.svg";
import boende1 from "../img/accommodation/boende1.webp";
import boende2 from "../img/accommodation/boende2.webp";
import boende3 from "../img/accommodation/boende3.webp";
import boende4 from "../img/accommodation/boende4.webp";
import boende5 from "../img/accommodation/boende5.webp";
import boende6 from "../img/accommodation/boende6.webp";
import boende7 from "../img/accommodation/boende7.webp";

// Import component

const Accommodation = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function openForm() {
    setIsFormOpen(true);
  }

  function closeForm() {
    setIsFormOpen(false);
  }

  return (
    <>
      <SEOHelmet
        title="Boende | Tak Mat o Tur i Duved"
        description="Boende i vackra Duved nära Åre. Upplev Jämtlands fjällvärld med närhet till skidbackar, vandringsleder och mer. Perfekt för din nästa semester."
        keywords="boende, Duved, Åre, Jämtland, fjäll, skidåkning, vandring, semester, fjällvärld, Sverige"
        url="http://takmatotur.se/boende"
        image={boende1}
      />

      <section className="relative flex flex-col items-center p-5 mb-5 2xl:pb-10 3xl:w-[60%] 3xl:m-auto">
        <div
          className="absolute top-[-700px] left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "300%",
            backgroundRepeat: "repeat-y",
            opacity: 0.08,
            zIndex: -1,
            transform: "translateX(-20%)",
          }}
        ></div>
        <header className="flex flex-col items-center justify-center mb-6 text-center">
          <h1 className="mb-2 font-bold">Boende</h1>
        </header>
        <div className="text-center flex justify-center p-3  mb-7">
          <button
            onClick={openForm}
            className="custom-button bg-amber-700 text-white "
          >
            <span className="relative z-10">Bokningsförfrågan</span>
          </button>
        </div>
        <article className="p-3 md:px-20 md:mt-5 xl:p-8 xl:w-2/3 m-auto font-semibold text-base md:text-md xl:text-xl">
          <p className="">
            Hos oss har du fjällen med allt vad de erbjuder ett stenkast bort.
            En kort promenad tar dig upp till Duveds och Tegefjälls liftsystem
            om vintern och på sommaren kan du enkelt ansluta till flera leder
            för vandring och löpning.
          </p>
        </article>

        <div className="mb-6 text-center font-semibold md:w-[80%] xl:w-[70%]"></div>

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
          <GridImgs
            src={boende1}
            alt="Bild på Emma & Martin - Tak Mat o Tur"
            title="Värdparet"
            description="Med ett ursprung i södra Sverige har vi, Emma och Martin, sedan några år bosatt oss i vackra Duved. Vår flytt till Jämtland har nog egentligen alltid varit självklar och, kanske, på något sätt förutbestämd. Natur, träning, mat och service har alltid legat oss varmt om hjärtat och Åredalen är för oss den perfekta platsen för detta.."
          />
          <GridImgs
            src={boende2}
            alt="Bild på Tak Mat o Tur utsida lägenhet"
            title="Egen ingång och gratis parkering"
            description="Egen ingång och bekvämligheter som gratis parkering. Reser du med elbil? Ingen fara – vi har en laddare tillgänglig direkt på parkeringen. Känn er som hemma och njut av friheten att komma och gå som ni vill."
            reverse
          />
          <GridImgs
            src={boende3}
            alt="Bild på Tak Mat o Tur Boende Kök"
            title="Ett kök som har allt"
            description="Köket är fullutrustat med diskmaskin, induktionshäll, ugn, micro, kyl/frys, kaffebryggare, kaffekokare och mycket mer."
          />
          <GridImgs
            src={boende4}
            alt="Bild på Tak Mat o Turs lägenhet som visar antal bäddar"
            title="Sovplats för upp mot 4 personer"
            description="Med bekväma sängar och en rymlig bäddsoffa, har du gott om utrymme att slappna av efter en dag fylld av roliga saker. Perfekt för att återhämta dig och njuta av en lugn kväll."
            reverse
          />
          <GridImgs
            src={boende5}
            alt="Boende Tak Mat o Tur Soffgrupp"
            title="Slå sig ner"
            description="Vare sig det är att slå sig ner till middagen eller luta sig tillbaka i soffan med ett sällskapsspel så lovar vi ett trivsamt boende."
          />

          <GridImgs
            src={boende7}
            alt="Tak Mat o Tur Gastronomi och matupplevelser"
            title="Gastronomi"
            description="Hos oss vill vi ge dig en matupplevelse som stannar kvar långt efter att måltiden är över.  Lägg till frukost med nybakat bröd, goda och nyttiga smothies med råvaror från fjällen. Varför inte en god middag med influenser från Jämtland och Asien i en magisk kombination."
            reverse
          />
          <GridImgs
            src={boende6}
            alt="Tak Mat o Tur uppmundrar till äventyret"
            title="Nära till äventyret"
            description="Endast ett stenkast från lägenheten väntar äventyr. Här kan du njuta av skidåkning i backen, fantastiska toppturer, längdspår, vandringsleder eller kanske ett utmanande löppass på fjället. Vi står redo att dela med oss av våra bästa tips för att göra ditt äventyr oförglömligt!"
          />
        </article>
        <article className="p-5 xl:p-8 xl:w-[50%] w-[90%] md:w-[75%] m-auto text-md border-2 border-amber-700 rounded-md mt-10 ">
          <div className="m-auto text-5xl text-amber-700">
            <FaInfoCircle className="" />
          </div>
          <ul className="list-outside ml-4">
            <li className="mt-3">
              <strong>
                Duved Centralstation:
                <span className=" sm:hidden">
                  <br />
                </span>{" "}
                {/* Break on small screens */}
              </strong>
              20 min promenad eller 5 min med bil
            </li>
            <li className="mt-3">
              <strong>
                Duveds skidbackar:
                <span className=" sm:hidden">
                  <br />
                </span>{" "}
                {/* Break on small screens */}
              </strong>
              15 min promenad eller 4 min med bil
            </li>
            <li className="mt-3">
              <strong>
                Skidbuss:
                <span className=" sm:hidden">
                  <br />
                </span>{" "}
                {/* Break on small screens */}
              </strong>
              5 minuter promenad
            </li>
            <li className="mt-3">
              <strong>
                Supermarket:
                <span className=" sm:hidden">
                  <br />
                </span>{" "}
                {/* Break on small screens */}
              </strong>
              13 min promenad eller 2 min med bil
            </li>
            <li className="mt-3">
              <strong>
                Resturanger och fik:
                <span className=" sm:hidden">
                  <br />
                </span>{" "}
                {/* Break on small screens */}
              </strong>
              13 min promenad eller 2 min med bil
            </li>
            <li className="mt-3">
              <strong>
                Åre by:
                <span className=" sm:hidden">
                  <br />
                </span>{" "}
                {/* Break on small screens */}
              </strong>
              7.5 km
            </li>
          </ul>
        </article>

        {/* New Encouragement Section */}
        <div className="text-center p-5 md:w-[80%] mb-10 mt-7">
          <p>
            Planera din vistelse hos oss redan idag!{" "}
            <span className="font-extrabold"></span>
            <br />
            Kontakta oss så ser vi till att skapa en minnesvärd upplevelse för
            dig eller er, med allt från fjällaktiviteter till matupplevelser.
          </p>
        </div>

        <div className="text-center flex justify-center xl:mt-5 mb-10">
          <button
            onClick={openForm}
            className="custom-button bg-amber-700 text-white "
          >
            <span className="relative z-10">Bokningsförfrågan</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Accommodation;
