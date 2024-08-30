import { Link } from "react-router-dom";

// import component
import SEOHelmet from "../components/SEOHelment";

// Import the background image
import backgroundImg from "../img/about/background.svg";

const TourSummer = () => {
  return (
    <>
      <SEOHelmet
        title="Vandra | Tak Mat o Tur"
        description="Upptäck Jämtlands vackra sommarvandringar med oss. Skräddarsydda upplevelser för alla, från halvdagsturer till flerdagars äventyr."
        keywords="sommarvandring Tak Mat o Tur, Jämtland, Åre, fjällvandring, naturupplevelse, guide"
        url="http://takmatotur.se/topptur/sommar"
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
          <h1 className="font-bold text-center mb-5">Vandra</h1>
        </header>

        <div className="max-w-screen-xl mx-auto p-1 mb-10">
          <article className="xl:text-left">
            <p className="text-base md:text-md xl:text-xl font-semibold p-3 mx-auto">
              Upptäck magin i Jämtlands sommarvandringar där naturens skönhet
              tar andan ur dig. Följ med oss upp på höjder som erbjuder hisnande
              utsikter, svalka dig i en fjällsjö eller vandra ner för Åreskutan
              till tystare platser där lugnet råder.
            </p>
            <p className="text-base md:text-md xl:text-xl font-semibold mt-5 p-3 mx-auto">
              Med vår djupa lokalkännedom och känsla för det unika, leder vi dig
              genom Åres sagolika natur och visar dig dolda pärlor som få har
              sett. Varje steg blir en upplevelse utöver det vanliga, oavsett om
              du söker äventyr eller stillhet. Låt oss skapa en skräddarsydd
              vandring för dig, där din upplevelse står i fokus, oavsett din
              erfarenhetsnivå.
            </p>
            <p className="text-base md:text-md xl:text-xl font-semibold mt-5 p-3 mx-auto">
              Välj mellan en halvdagstur, heldagsvandring, tur med övernattning
              eller om ni har helt andra idéer? Vi ser till att ert önskemål
              blir till verklighet!
            </p>
          </article>
        </div>

        <div className="max-w-screen-xl mx-auto p-3 mb-10">
          <section className="mb-6">
            <div className="p-3">
              <h2 className="mb-2 font-semibold text-xl">Vad ingår?</h2>
              <ul className="list-disc list-inside">
                <li className="mb-3">
                  En guide som guidar dig till unika miljöer
                </li>
              </ul>
            </div>
          </section>
          <section className="mb-6">
            <div className="p-3">
              <h2 className="mb-2 font-semibold text-xl">Tillägg</h2>
              <ul className="list-disc list-inside">
                <li className="mb-3">Person som fotograferar ert äventyr</li>
                <li className="mb-3">
                  Eventuella liftkort för att komma upp på höjd
                </li>
                <li className="mb-3">Måltider</li>
              </ul>
            </div>
          </section>
          <section className="p-3">
            <h2 className="mb-2 font-semibold text-xl">Priser</h2>
            <p>Priser från 495 kr</p>
          </section>
        </div>

        <div className="text-center flex justify-center mt-16 mb-5">
          <Link to="/topptur" className="inline-flex">
            <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-amber-700 text-white shadow-2xl transition-all rounded-md">
              <span className="relative z-10">Bakåt</span>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default TourSummer;
