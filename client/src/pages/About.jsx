import { Link } from "react-router-dom";
import portraitImg from "../img/about/portrait.jpg";
import backgroundImg from "../img/about/background.svg";

const About = () => {
  return (
    <section className="section p-5 relative ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "140%", // Adjust as needed to make the image larger
          backgroundPosition: "center", // Adjust as needed
          backgroundRepeat: "no-repeat", // Ensure the background does not repeat
          opacity: 0.15, // Adjust to make the background more transparent
          zIndex: -1, // Ensure the background is behind the text
        }}
      ></div>

      <div className="flex justify-center mt-4">
        {/* Heading and introduction */}
        <h1 className="text-2xl font-bold">Tak Mat O Tur</h1>
      </div>
      {/* All text and img div */}
      <div className="p-5 mb-2 md:w-[80%] m-auto relative 3xl:w-[50%]">
        <div className="mb-5 font-medium 3xl:w-[]">
          <p>
            Välkommen till Tak Mat o Tur i hjärtat av Duved, där vi förenar
            komfort, gastronomi och äventyr för att skapa oförglömliga
            upplevelser. Vi specialiserar oss på att erbjuda personliga
            helhetslösningar för mindre och större sällskap. Oavsett om du söker
            en avkopplande semester, ett lyft i din löpning eller ett
            äventyrsfyllt besök på en av Sveriges vackraste platser, har du
            hittat rätt.
          </p>
        </div>
        {/* Image and text div for xl and above */}
        <div className="hidden xl:flex xl:space-x-10 ">
          <img
            className="rounded-full xl:rounded-xl shadow-xl w-full md:w-3/4 lg:w-3/5 xl:w-1/3"
            src={portraitImg}
            alt="bild på grundarna av Tak Mat O Tur"
          />
          <div className="flex flex-col space-y-5 3xl:w-[40%]">
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
            <p>
              Duved är mer än bara en plats – det är en gemenskap och en port
              till den vilda naturen. Vi strävar efter att erbjuda en unik och
              genuin upplevelse, där varje ögonblick är noggrant planerat och
              personligt anpassat efter dina önskemål. Vi vill att man ska känna
              dig som hemma, med allt man behöver för en minnesvärd vistelse
              fylld med äventyr, god mat och fantastisk natur.
            </p>
          </div>
        </div>
        {/* Image and text div for lg and below */}
        <div className="img-div xl:hidden">
          <img
            className="rounded-[50%] shadow-xl w-full md:w-3/4 lg:w-3/5 m-auto"
            src={portraitImg}
            alt="bild på grundarna av Tak Mat O Tur"
          />
        </div>
        {/* div that holds all the text under the img for lg and below */}
        <div className="relative mt-5 xl:hidden">
          <p>
            Tak Mat o Tur är ett familjeföretag som drivs av Martin och Emma
            Gillgren. Vi har alltid haft en längtan efter att bo på en plats med
            närhet till natur och äventyr och där vår kärlek till löpning och
            skidåkning kan få bli vardag. Allt det och mer har flytten till
            Duved för några år sedan inneburit. Att få arbeta med att erbjuda
            detta till andra är en dröm som gått i upplevelse. Tak Mat o Tur är
            en möjlighet för oss att i egen regi kombinera det som livet gjort
            oss bra på; löpning, skidåkning, gästupplevelser och mat.
          </p>
        </div>
        <div className="relative mt-5 xl:hidden">
          <p>
            Duved är mer än bara en plats – det är en gemenskap och en port till
            den vilda naturen. Vi strävar efter att erbjuda en unik och genuin
            upplevelse, där varje ögonblick är noggrant planerat och personligt
            anpassat efter dina önskemål. Vi vill att man ska känna dig som
            hemma, med allt man behöver för en minnesvärd vistelse fylld med
            äventyr, god mat och fantastisk natur.
          </p>
        </div>
        {/* button div */}
        <div className="button-holder flex justify-center mt-5 mb-5">
          <Link to="/kontakt" className="inline-flex bg-slate-800 rounded-md">
            <button className="relative h-12 w-40 overflow-hidden border border-PrimaryColor shadow-2xl rounded-md">
              <span className="relative z-10 text-white">Frågor / Kontakt</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
