// This is the nav named Tak Mat o Tur in the UI

import { Link } from "react-router-dom";
import portraitImg from "../img/about/portrait.jpg";
import backgroundImg from "../img/about/background.svg";

const About = () => {
  return (
    <section className="section p-5 pb-16 relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "140%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.15,
          zIndex: -1,
        }}
      ></div>

      <header className="flex justify-center mb-6">
        <h1 className=" font-bold">Tak Mat O Tur</h1>
      </header>

      <div className="p-5 mb-2 md:w-[80%] m-auto relative 3xl:w-[50%] g">
        <section className="mb-5 font-semibold text-center">
          <p>
            Välkommen till Tak Mat o Tur i hjärtat av Duved, där vi förenar
            komfort, gastronomi och äventyr för att skapa oförglömliga
            upplevelser. Vi specialiserar oss på att erbjuda personliga
            helhetslösningar för mindre och större sällskap. Oavsett om du söker
            en avkopplande semester, ett lyft i din löpning eller ett
            äventyrsfyllt besök på en av Sveriges vackraste platser, har du
            hittat rätt.
          </p>
        </section>

        {/* Image and text section for xl and above */}
        <section className="hidden xl:flex xl:space-x-10 items-center bg-white shadow-xl rounded-lg p-5">
          <div className="flex-1 xl:order-1">
            <p>
              Tak Mat o Tur är ett familjeföretag som drivs av Martin och Emma
              Gillgren. Vi har alltid haft en längtan efter att bo på en plats
              med närhet till natur och äventyr och där vår kärlek till löpning
              och skidåkning kan få bli vardag. Allt det och mer har flytten
              till Duved för några år sedan inneburit. Att få arbeta med att
              erbjuda detta till andra är en dröm som gått i upplevelse. Tak Mat
              o Tur är en möjlighet för oss att i egen regi kombinera det som
              livet gjort oss bra på; löpning, skidåkning, gästupplevelser och
              mat.
            </p>
            <p className="mt-5">
              Duved är mer än bara en plats – det är en gemenskap och en port
              till den vilda naturen. Vi strävar efter att erbjuda en unik och
              genuin upplevelse, där varje ögonblick är noggrant planerat och
              personligt anpassat efter dina önskemål. Vi vill att man ska känna
              dig som hemma, med allt man behöver för en minnesvärd vistelse
              fylld med äventyr, god mat och fantastisk natur.
            </p>
          </div>
          <figure className="flex-1 xl:order-2">
            <img
              className="rounded-xl shadow-xl w-full"
              src={portraitImg}
              alt="bild på grundarna av Tak Mat O Tur"
            />
          </figure>
        </section>

        {/* Image and text section for lg and below */}
        <section className="xl:hidden">
          <figure className="img-div">
            <img
              className="rounded-full xl:rounded-xl shadow-xl w-full md:w-3/4 lg:w-3/5 m-auto"
              src={portraitImg}
              alt="bild på grundarna av Tak Mat O Tur"
            />
          </figure>
          <div className="relative mt-5">
            <p>
              Tak Mat o Tur är ett familjeföretag som drivs av Martin och Emma
              Gillgren. Vi har alltid haft en längtan efter att bo på en plats
              med närhet till natur och äventyr och där vår kärlek till löpning
              och skidåkning kan få bli vardag. Allt det och mer har flytten
              till Duved för några år sedan inneburit. Att få arbeta med att
              erbjuda detta till andra är en dröm som gått i upplevelse. Tak Mat
              o Tur är en möjlighet för oss att i egen regi kombinera det som
              livet gjort oss bra på; löpning, skidåkning, gästupplevelser och
              mat.
            </p>
          </div>
          <div className="relative mt-5">
            <p>
              Duved är mer än bara en plats – det är en gemenskap och en port
              till den vilda naturen. Vi strävar efter att erbjuda en unik och
              genuin upplevelse, där varje ögonblick är noggrant planerat och
              personligt anpassat efter dina önskemål. Vi vill att man ska känna
              dig som hemma, med allt man behöver för en minnesvärd vistelse
              fylld med äventyr, god mat och fantastisk natur.
            </p>
          </div>
        </section>

        {/* button div */}
        <div className="button-holder flex justify-center mt-10 mb-5">
          <Link to="/kontakt" className="inline-flex bg-slate-800 rounded-md">
            <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-PrimaryColor text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-sky-700 before:duration-500 before:ease-out hover:shadow-sky-700 hover:before:h-56 hover:before:w-56 rounded-md">
              <span className="relative z-10">Frågor / Kontakt</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
