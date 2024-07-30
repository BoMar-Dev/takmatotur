import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// import conponent
import JoinMondayRunningForm from "../components/forms/MondayForm";

const MandagsLopning = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function openForm() {
    setIsFormOpen(true);
  }

  function closeForm() {
    setIsFormOpen(false);
  }

  return (
    <section className="relative flex flex-col items-center p-5 mb-10">
      <header className="flex flex-col items-center justify-center mb-6 text-center">
        <h1 className="mb-2 text-2xl font-bold">Måndagslöpning</h1>
        <p>
          Upptäck magin med Jämtlands härligaste löpargrupp!
          <br /> Under sex måndagar får du chansen att vara med i en
          inspirerande gemenskap och utveckla din löpning på bästa sätt.
        </p>
      </header>

      <article className="flex flex-col p-5 w-full max-w-4xl bg-white rounded-lg shadow-md">
        <section className="mb-6">
          <div className="p-4">
            <h2 className="mb-2 font-semibold">Vad ingår?</h2>
            <ul className="list-disc list-inside">
              <li className="mb-1">
                Professionellt ledda löppass fyllda med glädje och gemenskap.
                Varje pass är unikt och varierar med fokus på olika aspekter av
                löpning, från teknikträning och intervaller till långdistans och
                fartlek. Du får även tillgång till löpanalys, där vi analyserar
                din löpteknik och ger dig konkreta tips för att förbättra din
                prestation och undvika skador.
              </li>
              <li className="mb-1">
                Ett personligt träningsprogram skräddarsytt efter dina mål och
                förutsättningar, med löpcoachning som hjälper dig att nå nya
                höjder oavsett om du är nybörjare eller erfaren löpare.
              </li>
              <li className="mb-1">
                Ett personligt träningsprogram skräddarsytt efter dina mål och
                förutsättningar, med löpcoachning som hjälper dig att nå nya
                höjder oavsett om du är nybörjare eller erfaren löpare.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div className="p-4">
            <h2 className="mb-2 font-semibold">Priser</h2>
            <p>
              6 måndagar med löpning och aktivitet samt individuellt program för
              6 veckor: 800 kr <br />
              Enstaka tillfällen med löpning och aktivitet: 150 kr
            </p>
          </div>
        </section>
        <div className="text-center flex justify-center p-5">
          <button
            onClick={openForm}
            className="custom-button bg-amber-600 text-white "
          >
            <span className="relative z-10">Gå med</span>
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
              <JoinMondayRunningForm closeForm={closeForm} />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="button-holder flex justify-center mb-5">
          <Link to="/coach" className="inline-flex">
            <button className="custom-button bg-slate-800 text-white hover:shadow-sky-700">
              <span className="relative z-10">Bakåt</span>
            </button>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default MandagsLopning;
