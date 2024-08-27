import { Link } from "react-router-dom";

// import component
import SEOHelmet from "../components/SEOHelment";

// Import images
import backgroundImg from "../img/about/background.svg"; // Import the background image

const ForetagsCoach = () => {
  return (
    <>
      <SEOHelmet
        title="Företagscoaching | Tak Mat o Tur"
        description="Stärk teamet och nå nya höjder med vår 10-veckors löpcoaching för företagsgrupper. Kombinera träning, motivation och gemenskap för att skapa en starkare teamkänsla och ökad arbetsglädje."
        keywords="Företagscoaching, löpcoaching, teamkänsla, arbetsglädje, hälsa, Tak Mat o Tur"
        url="http://takmatotur.se/coach/foretag"
        image={backgroundImg} // This can be any image related to the page
      />

      <section className="relative flex flex-col items-center p-5 mb-10 overflow-hidden">
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
          loading="lazy" // Lazy loading the background image
        ></div>

        <header className="flex justify-center mb-6">
          <h1 className="mb-5 font-bold">Företagscoaching</h1>
        </header>

        <article className="flex flex-col p-5 w-full md:w-[80%] lg:w-[75%] xl:w-[60%] m-auto">
          <section className="mb-10">
            <div className="text-left">
              <p className="text-base md:text-md xl:text-xl font-semibold mb-2">
                Stärk Teamet och Nå Nya Höjder – Följ med oss på en 10-veckors
                Löpcoachingresa för Företagsgrupper! Vill ni skapa en starkare
                teamkänsla, öka arbetsglädjen och samtidigt förbättra hälsan hos
                era medarbetare? Välkommen till vår unika löpcoaching för
                företagsgrupper – en 10-veckors resa där vi kombinerar träning,
                motivation och gemenskap.
              </p>
            </div>
          </section>
        </article>

        <article className="flex flex-col p-5 w-full max-w-4xl">
          <section className="mb-6">
            <div className="p-4">
              <h2 className="mb-2 font-semibold text-xl">
                Varför välja vår löpcoaching för företagsgrupper?
              </h2>
              <ul className="list-disc list-inside">
                <li className="mb-3">
                  <strong>Skräddarsydd träning för alla nivåer:</strong> Våra
                  träningsprogram anpassas efter varje deltagares nivå och mål,
                  från nybörjare till erfarna löpare. Vi säkerställer att alla
                  utvecklas i sin egen takt samtidigt som ni bygger en starkare
                  teamkänsla.
                </li>
                <li className="mb-3">
                  <strong>Motiverande teamdynamik:</strong> Att träna
                  tillsammans som ett team skapar en unik dynamik. Ni kommer att
                  uppleva styrkan i att jobba mot gemensamma mål, stötta
                  varandra och fira framgångar tillsammans. Detta stärker inte
                  bara kroppen utan även banden mellan kollegorna.
                </li>
                <li className="mb-3">
                  <strong>Holistisk träningsfilosofi:</strong> Vi fokuserar på
                  en helhetssyn på träning som inkluderar löpteknik,
                  styrketräning, rörlighet och mental träning. Detta för att
                  säkerställa att era medarbetare inte bara blir bättre löpare
                  utan också mår bättre i sin helhet.
                </li>
                <li className="mb-3">
                  <strong>Personlig feedback och uppföljning:</strong> Under
                  dessa 10 veckor får varje deltagare personlig feedback från
                  våra coacher, vilket hjälper dem att utvecklas optimalt.
                  Regelbundna uppföljningar ser till att alla håller sig på rätt
                  spår och når sina mål.
                </li>
                <li className="mb-3">
                  <strong>Inspirerande miljöer:</strong> Vi tränar i varierande
                  och inspirerande miljöer. Att springa ute i naturen ger både
                  fysisk och mental energi som kan överföras till arbetsplatsen.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-6">
            <div className="p-4">
              <h2 className="mb-2 font-semibold text-xl">
                Vad ni kan förvänta er:
              </h2>
              <ul className="list-disc list-inside">
                <li className="mb-3">
                  <strong>Veckovisa träningspass:</strong> Inspirerande och
                  utmanande träningspass varje vecka ledda av våra erfarna
                  coacher.
                </li>
                <li className="mb-3">
                  <strong>Personliga träningsprogram:</strong> Anpassade program
                  som hjälper varje deltagare att nå sina personliga mål.
                </li>
                <li className="mb-3">
                  <strong>Stöd och gemenskap:</strong> Ett starkt team som
                  motiverar och stöttar varandra genom varje steg på vägen.
                </li>
                <li className="mb-3">
                  <strong>Mål och belöningar:</strong> Klara av delmål och fira
                  framgångarna tillsammans som ett team, med en avslutande
                  gemensam utmaning.
                </li>
              </ul>
            </div>
          </section>

          <section className="p-4 text-center">
            <p className="text-center md:w-[80%] lg:w-[60%] xl:w-[70%] md:m-auto">
              Gör er redo att snöra på skorna och följ med oss på en resa mot
              bättre hälsa, ökad arbetsglädje och starkare teamkänsla.
              Tillsammans tar vi stegen mot framgång – både på arbetsplatsen och
              i löparspåret!
            </p>
          </section>

          <div className="button-holder flex justify-center  mb-5 mt-5">
            <Link to="/coach" className="inline-flex bg-slate-800 rounded-md">
              <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-PrimaryColor text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-sky-700 before:duration-500 before:ease-out hover:shadow-sky-700 hover:before:h-56 hover:before:w-56 rounded-md">
                <span className="relative z-10">Bakåt</span>
              </button>
            </Link>
          </div>
        </article>
      </section>
    </>
  );
};

export default ForetagsCoach;
