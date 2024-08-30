import { Link } from "react-router-dom";

// import component
import SEOHelmet from "../components/SEOHelment";

// Import images
import backgroundImg from "../img/about/background.svg";

const ForetagsCoach = () => {
  return (
    <>
      <SEOHelmet
        title="Företagscoaching | Tak Mat o Tur"
        description="Stärk teamet och nå nya höjder med vår 10-veckors löpcoaching för företagsgrupper. Kombinera träning, motivation och gemenskap för att skapa en starkare teamkänsla och ökad arbetsglädje."
        keywords="Företagscoaching, löpcoaching, teamkänsla, arbetsglädje, hälsa, Tak Mat o Tur"
        url="http://takmatotur.se/coach/foretag"
        image={backgroundImg}
      />

      <section className="relative p-3 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "300%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.05,
            zIndex: -1,
          }}
          loading="lazy"
        ></div>

        <header className="flex justify-center mb-6">
          <h1 className="font-bold text-center mb-5">Företagscoaching</h1>
        </header>

        <div className="max-w-screen-xl mx-auto p-1 mb-10">
          <article className=" xl:text-left">
            <p className="text-base md:text-md xl:text-xl font-semibold p-3 mx-auto">
              Stärk teamet och nå nya höjder – följ med oss på en 10-veckors
              löpcoachingresa för företagsgrupper! Vill ni skapa en starkare
              teamkänsla, öka arbetsglädjen och samtidigt förbättra hälsan hos
              era medarbetare? Välkommen till vår unika löpcoaching för
              företagsgrupper – en 10-veckors resa där vi kombinerar träning,
              motivation och gemenskap.
            </p>
          </article>
        </div>

        <div className="max-w-screen-xl mx-auto p-3 mb-10">
          <section className="mb-6">
            <div className="p-3">
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
            <div className="p-3">
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

          <section className="p-3 text-center">
            <p className="text-center md:w-[80%] lg:w-[60%] xl:w-[70%] mx-auto">
              Gör er redo att snöra på skorna och följ med oss på en resa mot
              bättre hälsa, ökad arbetsglädje och starkare teamkänsla.
              Tillsammans tar vi stegen mot framgång – både på arbetsplatsen och
              i löparspåret!
            </p>
          </section>

          <div className="text-center flex justify-center mt-16 mb-5">
            <Link to="/coach" className="inline-flex">
              <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-amber-700 text-white shadow-2xl transition-all rounded-md">
                <span className="relative z-10">Bakåt</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForetagsCoach;
