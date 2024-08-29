import { Link } from "react-router-dom";

// Import the background image
import backgroundImg from "../img/about/background.svg";

// import component
import SEOHelmet from "../components/SEOHelment";

const TourWinter = () => {
  return (
    <>
      <SEOHelmet
        title="Topptur Vinter | Tak Mat o Tur"
        description="Upplev ett oförglömligt vinteräventyr i Årefjällen. Vi erbjuder skräddarsydda toppturer med spektakulära vyer och fantastisk skidåkning."
        keywords="topptur, Tak Mat o Tur, vinter, Åre, fjällen, skitouring, skidåkning, guide"
        url="http://takmatotur.se/topptur/vinter"
        image={backgroundImg} // Replace with a relevant image if available
      />

      <section className="relative p-5 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "160%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.05,
            zIndex: -1,
          }}
          loading="lazy"
        ></div>

        <header className="flex justify-center mb-6">
          <h1 className="font-bold text-center mb-5">Topptur Vinter</h1>
        </header>

        <article className="max-w-screen-xl mx-auto p-3 mb-10">
          <p className="text-base md:text-md xl:text-xl font-semibold p-5 mx-auto">
            Upplev ett oförglömligt topptursäventyr i Årefjällen! Med vår
            gedigna erfarenhet kan vi erbjuda dig en upplevelse utöver det
            vanliga. Vi skräddarsyr ert äventyr anpassat efter era önskemål.
          </p>
          <p className="text-base md:text-md xl:text-xl font-semibold mt-5 p-5 mx-auto">
            Topptur är det perfekta valet för dig som vill ta din skidåkning
            till nästa nivå och prova något nytt och spännande. Skitouring är en
            snabbt växande trend inom skidvärlden vilket från första turen är
            lätt att förstå. Följ med oss upp på fjället och upptäck
            spektakulära vyer och fantastisk skidåkning! Missa inte chansen att
            uppleva fjällen på riktigt!
          </p>
          <p className="text-base md:text-md xl:text-xl font-semibold mt-5 p-5 mx-auto">
            Kontakta oss med era önskemål så återkommer vi snabbt med ett
            prisförslag.
          </p>
        </article>

        <article className="max-w-screen-xl mx-auto p-5">
          <section className="mb-6">
            <div className="p-4">
              <h2 className="mb-2 font-semibold text-xl">Vad ingår?</h2>
              <ul className="list-disc list-inside">
                <li className="mb-1">
                  En guide som guidar dig utanför pisten i närområdets spännande
                  miljöer
                </li>
                <li className="mb-1">
                  Hjälp att hyra bra och korrekt utrustning för det vi ska göra
                </li>
              </ul>
            </div>
          </section>
          <section className="mb-6">
            <div className="p-4">
              <h2 className="mb-2 font-semibold text-xl">Tillägg</h2>
              <ul className="list-disc list-inside">
                <li className="mb-1">Person som fotograferar ert äventyr</li>
                <li className="mb-1">
                  Kostnad av utrustning så som ryggsäck, skidor, pjäxor för
                  topptur samt lavinutrustning
                </li>
                <li className="mb-1">
                  Eventuellt liftkort för att snabbare ta oss upp en bit på
                  berget
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="p-4">
              <h2 className="mb-2 font-semibold text-xl">Pris</h2>
              <p>Pris från: 900 kr / person</p>
            </div>
          </section>
        </article>

        <div className="text-center flex justify-center mt-10 mb-5">
          <Link to="/topptur" className="inline-flex bg-slate-800 rounded-md">
            <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-PrimaryColor text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-sky-700 before:duration-500 before:ease-out hover:shadow-sky-700 hover:before:h-56 hover:before:w-56 rounded-md">
              <span className="relative z-10">Bakåt</span>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default TourWinter;
