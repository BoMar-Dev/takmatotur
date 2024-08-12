import { Link } from "react-router-dom";

// Import the background image
import backgroundImg from "../img/about/background.svg";

const TourWinter = () => {
  return (
    <section className="relative flex flex-col items-center p-5 mb-10 overflow-hidden">
      <div
        className="absolute top-[-150px] left-[-150px] w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "160%",
          backgroundRepeat: "no-repeat",
          opacity: 0.08,
          zIndex: -1,
          transform: "translateX(20%) translateY(60%)",
        }}
      ></div>

      <header className="flex justify-center mb-6">
        <h1 className="mb-2 font-bold">Topptur Vinter</h1>
      </header>

      <article className="flex flex-col p-5 w-full md:w-[80%] lg:w-[75%] xl:w-[60%] m-auto">
        <section className="mb-10">
          <div className="text-left">
            <p className="mb-5 text-lg font-semibold">
              Upptäck magin med Jämtlands härligaste topptur! En tur som passar
              alla, med inspirerande gemenskap, vacker natur och skidåkning som
              är väldigt fritt.
            </p>
          </div>
        </section>
      </article>

      <article className="flex flex-col p-5 w-full max-w-4xl">
        <section className="mb-6">
          <div className="p-4">
            <h2 className="mb-2 font-semibold">Vad ingår?</h2>
            <ul className="list-disc list-inside">
              <li className="mb-1">
                En guide som guidar dig utanför pisten i närområdets spännande
                miljöer
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
              <li className="mb-1">Person som fotograferar ert äventyr</li>
              <li className="mb-1">
                Kostnad av utrustning så som ryggsäck, skidor, pjäxor för
                topptur samt lavinutrustning
              </li>
              <li className="mb-1">
                Eventuellt liftkort för att snabbare ta oss upp en bit på berget
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
      </article>

      <div className="button-holder flex justify-center mt-10 mb-5">
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
