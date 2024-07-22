import { Link } from "react-router-dom";

const ForetagsCoach = () => {
  return (
    <section className="relative flex flex-col items-center p-5 mb-5 2xl:pb-10 3xl:w-[60%] 3xl:m-auto 3xl:mb-16">
      <header className="flex flex-col items-center justify-center mb-6 text-center">
        <h1 className="mb-2 text-2xl font-bold">Företagscoachning</h1>
      </header>

      <article className="flex flex-col p-5 w-full md:w-[80%] lg:w-[75%] xl:w-[90%] bg-white rounded-lg shadow-md">
        <section className="mb-6">
          <div className="text-center md:w-[80%] lg:w-[60%] xl:w-[70%] md:m-auto">
            <p className="text-xl font-medium mb-2">
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
          <h2 className="mb-2 font-semibold">
            Varför välja vår löpcoaching för företagsgrupper?
          </h2>
          <ul className="list-disc list-inside">
            <li className="mb-1">
              <strong>Skräddarsydd träning för alla nivåer:</strong> Våra
              träningsprogram anpassas efter varje deltagares nivå och mål, från
              nybörjare till erfarna löpare. Vi säkerställer att alla utvecklas
              i sin egen takt samtidigt som ni bygger en starkare teamkänsla.
            </li>
            <li className="mb-1">
              <strong>Motiverande teamdynamik:</strong> Att träna tillsammans
              som ett team skapar en unik dynamik. Ni kommer att uppleva styrkan
              i att jobba mot gemensamma mål, stötta varandra och fira
              framgångar tillsammans. Detta stärker inte bara kroppen utan även
              banden mellan kollegorna.
            </li>
            <li className="mb-1">
              <strong>Holistisk träningsfilosofi:</strong> Vi fokuserar på en
              helhetssyn på träning som inkluderar löpteknik, styrketräning,
              rörlighet och mental träning. Detta för att säkerställa att era
              medarbetare inte bara blir bättre löpare utan också mår bättre i
              sin helhet.
            </li>
            <li className="mb-1">
              <strong>Personlig feedback och uppföljning:</strong> Under dessa
              10 veckor får varje deltagare personlig feedback från våra
              coacher, vilket hjälper dem att utvecklas optimalt. Regelbundna
              uppföljningar ser till att alla håller sig på rätt spår och når
              sina mål.
            </li>
            <li className="mb-1">
              <strong>Inspirerande miljöer:</strong> Vi tränar i varierande och
              inspirerande miljöer. Att springa ute i naturen ger både fysisk
              och mental energi som kan överföras till arbetsplatsen.
            </li>
          </ul>
        </section>

        <section className="p-4 md:w-[80%] xl:w-[70%] m-auto">
          <h2 className="mb-2 font-semibold">Vad ni kan förvänta er:</h2>
          <ul className="list-disc list-inside">
            <li className="mb-1">
              <strong>Veckovisa träningspass:</strong> Inspirerande och
              utmanande träningspass varje vecka ledda av våra erfarna coacher.
            </li>
            <li className="mb-1">
              <strong>Personliga träningsprogram:</strong> Anpassade program som
              hjälper varje deltagare att nå sina personliga mål.
            </li>
            <li className="mb-1">
              <strong>Stöd och gemenskap:</strong> Ett starkt team som motiverar
              och stöttar varandra genom varje steg på vägen.
            </li>
            <li className="mb-1">
              <strong>Mål och belöningar:</strong> Klara av delmål och fira
              framgångarna tillsammans som ett team, med en avslutande gemensam
              utmaning.
            </li>
          </ul>
        </section>

        <section className="p-4 text-center">
          <p>
            Gör er redo att snöra på skorna och följ med oss på en resa mot
            bättre hälsa, ökad arbetsglädje och starkare teamkänsla. Tillsammans
            tar vi stegen mot framgång – både på arbetsplatsen och i
            löparspåret!
          </p>
          <p className="mt-4 font-bold">Kontakta oss för offert</p>
        </section>

        <div className="button-holder flex justify-center mt-5 mb-5">
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

export default ForetagsCoach;
