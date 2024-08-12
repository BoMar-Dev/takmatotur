import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// import components
import OfferForm from "../components/forms/OfferForm";
import backgroundImg from "../img/about/background.svg"; // Import the background image

const ForetagsCoach = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function openForm() {
    setIsFormOpen(true);
  }

  function closeForm() {
    setIsFormOpen(false);
  }

  return (
    <section className="relative flex flex-col items-center p-5 mb-5 2xl:pb-10 3xl:w-[60%] 3xl:m-auto 3xl:mb-16">
      <div className="relative overflow-hidden w-full h-full">
        <div
          className="absolute top-[-500px] right-[-200px] w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "110%", // Adjust the size to be slightly bigger
            backgroundRepeat: "repeat-x",
            opacity: 0.08, // Slightly different opacity
            zIndex: -1,
            transform: "translateX(-15%) translateY(30%)", // Different positioning
          }}
        ></div>
      </div>

      <article className="flex flex-col p-5 w-full md:w-[80%] lg:w-[75%] xl:w-[60%] m-auto rounded-lg">
        <section className="mb-10">
          <div className="text-left">
            <p className="text-xl font-semibold mb-2">
              Stärk Teamet och Nå Nya Höjder – Följ med oss på en 10-veckors
              Löpcoachingresa för Företagsgrupper! Vill ni skapa en starkare
              teamkänsla, öka arbetsglädjen och samtidigt förbättra hälsan hos
              era medarbetare? Välkommen till vår unika löpcoaching för
              företagsgrupper – en 10-veckors resa där vi kombinerar träning,
              motivation och gemenskap.
            </p>
          </div>
        </section>

        <section className="p-4 md:w-[80%] xl:w-[70%] m-auto">
          <h2 className="mb-2 font-semibold text-xl">
            Varför välja vår löpcoaching för företagsgrupper?
          </h2>
          <ul className="list-disc list-inside">
            <li className="mb-3">
              <strong>Skräddarsydd träning för alla nivåer:</strong> Våra
              träningsprogram anpassas efter varje deltagares nivå och mål, från
              nybörjare till erfarna löpare. Vi säkerställer att alla utvecklas
              i sin egen takt samtidigt som ni bygger en starkare teamkänsla.
            </li>
            <li className="mb-3">
              <strong>Motiverande teamdynamik:</strong> Att träna tillsammans
              som ett team skapar en unik dynamik. Ni kommer att uppleva styrkan
              i att jobba mot gemensamma mål, stötta varandra och fira
              framgångar tillsammans. Detta stärker inte bara kroppen utan även
              banden mellan kollegorna.
            </li>
            <li className="mb-3">
              <strong>Holistisk träningsfilosofi:</strong> Vi fokuserar på en
              helhetssyn på träning som inkluderar löpteknik, styrketräning,
              rörlighet och mental träning. Detta för att säkerställa att era
              medarbetare inte bara blir bättre löpare utan också mår bättre i
              sin helhet.
            </li>
            <li className="mb-3">
              <strong>Personlig feedback och uppföljning:</strong> Under dessa
              10 veckor får varje deltagare personlig feedback från våra
              coacher, vilket hjälper dem att utvecklas optimalt. Regelbundna
              uppföljningar ser till att alla håller sig på rätt spår och når
              sina mål.
            </li>
            <li className="mb-3">
              <strong>Inspirerande miljöer:</strong> Vi tränar i varierande och
              inspirerande miljöer. Att springa ute i naturen ger både fysisk
              och mental energi som kan överföras till arbetsplatsen.
            </li>
          </ul>
        </section>

        <section className="p-4 md:w-[80%] xl:w-[70%] m-auto">
          <h2 className="mb-2 font-semibold text-xl">
            Vad ni kan förvänta er:
          </h2>
          <ul className="list-disc list-inside">
            <li className="mb-3">
              <strong>Veckovisa träningspass:</strong> Inspirerande och
              utmanande träningspass varje vecka ledda av våra erfarna coacher.
            </li>
            <li className="mb-3">
              <strong>Personliga träningsprogram:</strong> Anpassade program som
              hjälper varje deltagare att nå sina personliga mål.
            </li>
            <li className="mb-3">
              <strong>Stöd och gemenskap:</strong> Ett starkt team som motiverar
              och stöttar varandra genom varje steg på vägen.
            </li>
            <li className="mb-3">
              <strong>Mål och belöningar:</strong> Klara av delmål och fira
              framgångarna tillsammans som ett team, med en avslutande gemensam
              utmaning.
            </li>
          </ul>
        </section>

        <section className="p-4 text-center text-center md:w-[80%] lg:w-[60%] xl:w-[70%] md:m-auto">
          <p>
            Gör er redo att snöra på skorna och följ med oss på en resa mot
            bättre hälsa, ökad arbetsglädje och starkare teamkänsla. Tillsammans
            tar vi stegen mot framgång – både på arbetsplatsen och i
            löparspåret!
          </p>
          <div className="text-center flex justify-center p-5 mt-10">
            <button
              onClick={openForm}
              className="custom-button bg-amber-600 text-white "
            >
              <span className="relative z-10">Fråga om offert</span>
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
                <OfferForm closeForm={closeForm} />
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <div className="button-holder flex justify-center">
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

export default ForetagsCoach;
