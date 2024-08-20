import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// import component
import JoinMondayRunningForm from "../components/forms/MondayForm";
// Import the background image
import backgroundImg from "../img/about/background.svg";

const MandagsLopning = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function openForm() {
    setIsFormOpen(true);
  }

  function closeForm() {
    setIsFormOpen(false);
  }

  return (
    <section className="relative flex flex-col items-center p-5 mb-10 overflow-hidden">
      <div
        className="absolute bottom-[-200px] right-[-150px] w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "150%",
          backgroundRepeat: "no-repeat",
          opacity: 0.08,
          zIndex: -1,
          transform: "translateX(1%) translateY(20%)",
        }}
      ></div>

      <header className="flex justify-center mb-6">
        <h1 className="mb-5 font-bold">Måndagslöpning</h1>
      </header>

      <article className="flex flex-col p-5 w-full max-w-4xl rounded-lg">
        <section className="mb-10">
          <div className="text-left">
            <p className="font-semibold mb-2 text-lg">
              Upptäck magin med Jämtlands härligaste löpargrupp! Under sex
              måndagar får du chansen att vara med i en inspirerande gemenskap
              och utveckla din löpning på bästa möjliga sätt.
            </p>
          </div>
        </section>

        <section className="mb-6">
          <div className="p-4">
            <h2 className="mb-2 font-semibold text-xl">Vad ingår?</h2>
            <ul className="list-disc list-inside">
              <li className="mb-5">
                Professionellt ledda löppass fyllda med glädje och gemenskap.
                Varje pass är unikt och varierar med fokus på olika aspekter av
                löpning, från teknikträning och intervaller till långdistans och
                fartlek. Du får även tillgång till löpanalys, där vi analyserar
                din löpteknik och ger dig konkreta tips för att förbättra din
                prestation och undvika skador.
              </li>
              <li className="mb-5">
                Ett personligt träningsprogram skräddarsytt efter dina mål och
                förutsättningar, med löpcoachning som hjälper dig att nå nya
                höjder oavsett om du är nybörjare eller erfaren löpare.
              </li>
              <li className="mb-5">
                Ett personligt träningsprogram skräddarsytt efter dina mål och
                förutsättningar, med löpcoachning som hjälper dig att nå nya
                höjder oavsett om du är nybörjare eller erfaren löpare.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <div className="p-4">
            <h2 className="mb-2 font-semibold text-xl">Priser</h2>
            <p>
              6 måndagar med löpning och aktivitet samt individuellt program för
              6 veckor: 800 kr <br />
              Enstaka tillfällen med löpning och aktivitet: 150 kr
            </p>
          </div>
        </section>

        {/* <div className="text-center flex justify-center p-5">
          <button
            onClick={openForm}
            className="custom-button bg-amber-600 text-white "
          >
            <span className="relative z-10">Gå med</span>
          </button>
        </div> */}

        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <JoinMondayRunningForm closeForm={closeForm} />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="button-holder flex justify-center mb-5 mt-5">
          <Link to="/coach" className="inline-flex bg-slate-800 rounded-md">
            <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-PrimaryColor text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-sky-700 before:duration-500 before:ease-out hover:shadow-sky-700 hover:before:h-56 hover:before:w-56 rounded-md">
              <span className="relative z-10">Bakåt</span>
            </button>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default MandagsLopning;
