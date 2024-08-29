import { Link } from "react-router-dom";

// import component
import SEOHelmet from "../components/SEOHelment";

// Import images
import backgroundImg from "../img/about/background.svg";
import portraitImg from "../img/about/portrait.webp";

const About = () => {
  return (
    <>
      <SEOHelmet
        title="Om Oss | Tak Mat o Tur"
        description="Lär känna Martin och Emma Gillgren, grundarna av Tak Mat o Tur i Duved. Vi erbjuder personliga upplevelser med fokus på komfort, gastronomi och äventyr i hjärtat av Sveriges fjällvärld."
        keywords="Tak Mat o Tur, Duved, Martin Gillgren, Emma Gillgren, familjeföretag, fjällupplevelse, löpning, skidåkning, gastronomi, äventyr"
        url="http://takmatotur.se/om"
        image={portraitImg}
      />

      <section className="relative p-5 pb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "140%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.05,
            zIndex: -1,
          }}
          loading="lazy"
        ></div>

        <header className="flex justify-center mb-6">
          <h1 className="font-bold text-center">Tak Mat o Tur</h1>
        </header>

        <div className="max-w-screen-xl mx-auto p-3 mb-10">
          <section className="font-semibold text-lg">
            <p className="text-base md:text-md xl:text-xl p-5 mx-auto">
              Välkommen till Tak Mat o Tur i hjärtat av Duved, där vi förenar
              komfort, gastronomi och äventyr för att skapa oförglömliga
              upplevelser. Vi specialiserar oss på att erbjuda personliga
              helhetslösningar för mindre och större sällskap. Oavsett om du
              söker en avkopplande semester, ett lyft i din löpning eller ett
              äventyrsfyllt besök på en av Sveriges vackraste platser, har du
              hittat rätt.
            </p>

            <h2 className="text-xl text-center mt-10 font-semibold text-amber-700">
              Emma & Martin
            </h2>
          </section>

          {/* Image and text section for xl and above */}
          <section className="hidden xl:flex xl:space-x-10 items-center mt-10">
            <div className="flex-1">
              <p>
                Tak Mat o Tur är ett familjeföretag som drivs av Martin och Emma
                Gillgren. Vi har alltid haft en längtan efter att bo på en plats
                med närhet till natur och äventyr och där vår kärlek till
                löpning och skidåkning kan få bli vardag. Allt det och mer har
                flytten till Duved för några år sedan inneburit.
              </p>
              <p className="mt-10">
                Att få arbeta med att erbjuda detta till andra är en dröm som
                gått i upplevelse. Tak Mat o Tur är en möjlighet för oss att i
                egen regi kombinera det som livet gjort oss bra på; löpning,
                skidåkning, gästupplevelser och mat.
              </p>
              <p className="mt-10">
                Duved är mer än bara en plats – det är en gemenskap och en port
                till den vilda naturen. Vi strävar efter att erbjuda en unik och
                genuin upplevelse, där varje ögonblick är noggrant planerat och
                personligt anpassat efter dina önskemål. Vi vill att man ska
                känna sig som hemma, med allt man behöver för en minnesvärd
                vistelse fylld med äventyr, god mat och fantastisk natur.
              </p>
            </div>
            <figure className="flex-1">
              <img
                className="rounded-full shadow-xl w-[87%] mx-auto"
                src={portraitImg}
                alt="Bild på grundarna av Tak Mat o Tur"
                loading="lazy"
              />
            </figure>
          </section>

          {/* Image and text section for lg and below */}
          <section className="xl:hidden mt-10">
            <figure className="img-div">
              <img
                className="rounded-full shadow-xl w-full md:w-3/4 lg:w-3/5 mx-auto"
                src={portraitImg}
                alt="Bild på grundarna av Tak Mat o Tur"
                loading="lazy"
              />
            </figure>
            <div className="mt-10">
              <p>
                Tak Mat o Tur är ett familjeföretag som drivs av Martin och Emma
                Gillgren. Vi har alltid haft en längtan efter att bo på en plats
                med närhet till natur och äventyr och där vår kärlek till
                löpning och skidåkning kan få bli vardag. Allt det och mer har
                flytten till Duved för några år sedan inneburit.
              </p>
              <p className="mt-10">
                Att få arbeta med att erbjuda detta till andra är en dröm som
                gått i upplevelse. Tak Mat o Tur är en möjlighet för oss att i
                egen regi kombinera det som livet gjort oss bra på; löpning,
                skidåkning, gästupplevelser och mat.
              </p>
              <p className="mt-10">
                Duved är mer än bara en plats – det är en gemenskap och en port
                till den vilda naturen. Vi strävar efter att erbjuda en unik och
                genuin upplevelse, där varje ögonblick är noggrant planerat och
                personligt anpassat efter dina önskemål. Vi vill att man ska
                känna sig som hemma, med allt man behöver för en minnesvärd
                vistelse fylld med äventyr, god mat och fantastisk natur.
              </p>
            </div>
          </section>

          {/* button div */}
          <div className="flex justify-center mt-16 mb-5">
            <Link to="/kontakt" className="inline-flex">
              <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-amber-700 text-white shadow-2xl transition-all rounded-md">
                <span className="relative z-10">Frågor / Kontakt</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
