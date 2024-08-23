import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// import component
import AccomodationForm from "../components/forms/AccomodationForm";
import GridImgs from "../components/GridImgs";
import SEOHelmet from "../components/SEOHelment";

// Import images
import backgroundImg from "../img/about/background.svg";
import boende1 from "../img/accommodation/boende1.webp";
import boende2 from "../img/accommodation/boende2.webp";
import boende3 from "../img/accommodation/boende3.webp";
import boende4 from "../img/accommodation/boende4.webp";
import boende5 from "../img/accommodation/boende5.webp";
import boende6 from "../img/accommodation/boende6.webp";

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
        title="Boende i Duved - Nära Åre | Upplev Jämtlands Fjällvärld"
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
            backgroundSize: "200%",
            backgroundRepeat: "repeat-y",
            opacity: 0.08,
            zIndex: -1,
            transform: "translateX(-20%)",
          }}
        ></div>
        <header className="flex flex-col items-center justify-center mb-6 text-center">
          <h1 className="mb-2 font-bold">Boende</h1>
        </header>
        <div className="text-center flex justify-center p-3">
          <button
            onClick={openForm}
            className="custom-button bg-amber-700 text-white "
          >
            <span className="relative z-10">Bokningsförfrågan</span>
          </button>
        </div>
        <article className="p-3 md:px-20 md:mt-5 xl:p-8 xl:w-2/3 m-auto font-semibold text-lg">
          <p>
            Med ett ursprung i södra Sverige har vi, Emma och Martin, sedan
            några år bosatt oss i vackra Duved. Vår flytt till Jämtland har nog
            egentligen alltid varit självklar och, kanske, på något sätt
            förutbestämd. Natur, träning, mat och service har alltid legat oss
            varmt om hjärtat och Åredalen är för oss den perfekta platsen för
            detta.
          </p>
          <p className="mt-5">
            Hos oss har du fjällen med allt vad de erbjuder ett stenkast bort.
            En kort promenad tar dig upp till Duveds och Tegefjälls liftsystem
            om vintern och på sommaren kan du enkelt ansluta till flera leder
            för vandring och löpning. För transport till Åre finns skidbussen
            precis nedför backan.
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
            alt="Trail Camp"
            title="Värdparet"
            description="Bo i vår lägenhet med fjällen som utsikt och äventyret bara ett stenkast bort."
          />
          <GridImgs
            src={boende2}
            alt="föreläsare Marcus Torgeby"
            title="Egen ingång och gratis parkering"
            description="Känn er som hemma efter en dag fylld av äventyr. Kommer du med elbil? Laddare finns på parkeringen."
            reverse
          />
          <GridImgs
            src={boende3}
            alt="Trail Camp Group"
            title="Ett kök som har allt"
            description="Köket är fullutrustat med diskmaskin, induktionshäll, ugn, micro, kyl/frys, kaffebryggare, kaffekokare och mycket mer."
          />
          <GridImgs
            src={boende4}
            alt="föreläsare Marcus Torgeby"
            title="Sovplats för upp mot 4 personer"
            description="Familjesäng och en stor bäddsoffa att slappna av i när benen är trötta."
            reverse
          />
          <GridImgs
            src={boende5}
            alt="Trail Camp Group"
            title="Slå sig ner"
            description="Vare sig det är att slå sig ner till middagen eller luta sig tillbaka i soffan med ett sällskapsspel så lovar vi ett trivsamt boende."
          />
          <GridImgs
            src={boende6}
            alt="föreläsare Marcus Torgeby"
            title="Nära till äventyret"
            description="Med gångavstånd från lägenheten hittar ni skidåkning i backe, fantastiska toppturer, längdspår, vandring eller varför inte ett svettigt löppass på fjället. Vi hjälper dig såklart med våra tips!"
            reverse
          />
        </article>

        <article className="p-3 xl:w-2/3 m-auto text-md">
          <li className="mt-3">
            Duved Centralstation för buss / tåg: 20 min promenad eller 5 min med
            bil
          </li>
          <li className="mt-3">
            Duveds skidbackar och skiduthyrning: 15 min promenad eller 4 min med
            bil
          </li>
          <li className="mt-3">
            Supermarket: 13 min promenad eller 2 min med bil
          </li>
          <li className="mt-3">
            Resturanger och fik: 13 min promenad eller 2 min med bil
          </li>
          <li className="mt-3">Åre by: 7.5 km</li>
        </article>

        {/* New Encouragement Section */}
        <div className="text-center p-5 md:w-[80%] mb-10">
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
