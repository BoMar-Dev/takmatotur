import { Link } from "react-router-dom";

const TourWinter = () => {
  return (
    <section className="relative flex flex-col items-center p-5 mb-10">
      <header className="flex flex-col items-center justify-center mb-6 text-center">
        <h1 className="mb-2 text-2xl font-bold">Topptur Vinter</h1>
        <p>
          Upptäck magin med Jämtlands härligaste topptur!
          <br /> En tur som passar alla inspirerande gemenskap och vacker natur
          och skidåkning som är väldigt fritt
        </p>
      </header>

      <article className="flex flex-col p-5 w-full max-w-4xl bg-white rounded-lg shadow-md">
        <section className="mb-6">
          <div className="p-4">
            <h2 className="mb-2 font-semibold">Vad ingår?</h2>
            <ul className="list-disc list-inside">
              <li className="mb-1">
                En guide som guidar dig utanför pisten i närområdets spännande
                miöjöer
              </li>
              <li className="mb-1">
                Hjälp att hyra bra och korrekt utrustning för det vi ska göra
              </li>
              <li className="mb-1">Enkare lunch</li>
            </ul>
          </div>
        </section>
        <section className="mb-6">
          <div className="p-4">
            <h2 className="mb-2 font-semibold">Tillägg</h2>
            <ul className="list-disc list-inside">
              <li className="mb-1">Person som fotograferar erat äventyr</li>
              <li className="mb-1">
                Kostnad av utrustning så som ryggsäck, skidor, pjäxor för
                topptur samt lavinutrustning
              </li>
              <li className="mb-1">
                Evntuellt liftkort för att snabbare ta oss upp en bit på berget
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div className="p-4">
            <h2 className="mb-2 font-semibold">Priser</h2>
            <p>
              Halvdag 1000:- / person <br />
              Heldag 2000:- / person
            </p>
          </div>
        </section>
        <div className="button-holder flex justify-center mt-5 mb-5"></div>
      </article>
      <div className="button-holder flex justify-center mt-5 mb-5">
        <Link to="/topptur" className="inline-flex bg-slate-800 rounded-md">
          <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-PrimaryColor text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-sky-700 before:duration-500 before:ease-out hover:shadow-sky-700 hover:before:h-56 hover:before:w-56 rounded-md">
            <span className="relative z-10">Bakåt</span>
          </button>
        </Link>
      </div>
    </section>
  );
};
export default TourWinter;
