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
        keywords="måndagslöpning, Jämtland, löpning, löpargrupp, träning, löpteknik"
        url="http://takmatotur.se/mandagslopning"
        image={backgroundImg}
      />

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

        <article className="p-3 md:p-20 xl:p-8 xl:w-2/3 m-auto font-semibold text-base md:text-md xl:text-xl">
          <p className="mb-5">
            Upptäck magin med Jämtlands härligaste löpargrupp! Under sex
            måndagar får du chansen att vara med i en inspirerande gemenskap och
            utveckla din löpning på bästa möjliga sätt.
          </p>
        </article>

        <article className="flex flex-col p-5 w-full max-w-4xl">
          <section className="mb-6">
            <div className="p-4">
              <h2 className="mb-2 font-semibold ">Vad ingår?</h2>
              <ul className="list-disc list-inside">
                <li className="mb-5">
                  Professionellt ledda löppass fyllda med glädje och gemenskap.
                  Varje pass är unikt och varierar med fokus på olika aspekter
                  av löpning, från teknikträning och intervaller till
                  långdistans och fartlek. Du får även tillgång till löpanalys,
                  där vi analyserar din löpteknik och ger dig konkreta tips för
                  att förbättra din prestation och undvika skador.
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
              <h2 className="mb-2 font-semibold ">Priser</h2>
              <p>
                6 måndagar med löpning och aktivitet samt individuellt program
                för 6 veckor: 800 kr <br />
                Enstaka tillfällen med löpning och aktivitet: 150 kr
              </p>
            </div>
          </section>

          <div className="button-holder flex justify-center mb-5 mt-5">
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

export default MandagsLopning;
