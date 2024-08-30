import { Link } from "react-router-dom";

// import component
import SEOHelmet from "../components/SEOHelment";

// Import the background image
import backgroundImg from "../img/about/background.svg";

const MandagsLopning = () => {
  return (
    <>
      <SEOHelmet
        title="Måndagslöpning | Tak Mat o Tur"
        description="Delta i Jämtlands härligaste löpargrupp! Sex måndagar med inspirerande löppass och personlig träning som hjälper dig att nå nya höjder."
        keywords="måndagslöpning, Tak Mat o Tur, Jämtland, löpning, löpargrupp, träning, löpteknik"
        url="http://takmatotur.se/mandagslopning"
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

        <header className="flex justify-center mb-10">
          <h1 className="font-bold text-center ">Måndagslöpning</h1>
        </header>

        <div className="max-w-screen-xl mx-auto p-1 mb-10">
          <article className="xl:text-left">
            <p className="text-base md:text-md xl:text-xl font-semibold p-3 mx-auto">
              Upptäck magin med Jämtlands härligaste löpargrupp! Under sex
              måndagar får du chansen att vara med i en inspirerande gemenskap
              och utveckla din löpning på bästa möjliga sätt.
            </p>
          </article>
        </div>

        <div className="max-w-screen-xl mx-auto p-3 mb-10">
          <section className="mb-6">
            <div className="p-3">
              <h2 className="mb-2 font-semibold text-xl">Vad ingår?</h2>
              <ul className="list-disc list-inside">
                <li className="mb-7">
                  Professionellt ledda löppass erbjuder en inspirerande och
                  gemensam atmosfär. Varje pass är unikt och fokuserar på olika
                  aspekter av löpning, inklusive teknikträning, intervaller,
                  långdistans och fartlek.
                </li>
                <li className="mb-7">
                  Som en del av programmet får du ett personligt träningsprogram
                  som är skräddarsytt efter dina specifika mål och
                  förutsättningar. Löpcoachningen är utformad för att hjälpa dig
                  nå nya höjder, oavsett om du är nybörjare eller erfaren
                  löpare.
                </li>
                <li className="mb-7">
                  Varje löppass avslutas med en gemensam aktivitet, såsom bastu,
                  kallbad, föreläsningar, styrketräning, yoga eller middag,
                  vilket stärker gemenskapen bland deltagarna.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-6">
            <div className="p-3">
              <h2 className="mb-2 font-semibold text-xl">Priser</h2>
              <p>
                6 måndagar med löpning och aktivitet samt individuellt program
                för 6 veckor: 800 kr <br />
                Enstaka tillfällen med löpning och aktivitet: 150 kr
              </p>
            </div>
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

export default MandagsLopning;
