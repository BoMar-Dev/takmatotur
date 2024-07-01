// Name in menu is Tak Mat O Tur

// import Link
import { Link } from "react-router-dom";

// import img
import portraitImg from "../img/about/portrait.jpg";
import backgroundImg from "../img/about/background.svg";

const About = () => {
  return (
    <section className="section p-5 ">
      <div className="flex justify-center mt-4">
        {/* // Heading and intruduction  */}
        <h1 className="text-2xl font-bold">Tak Mat O Tur</h1>
      </div>
      {/* // All text and img div */}
      <div className="p-5 mb-2">
        <div className="mb-5">
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
        <div className=" rounded-3xl">
          <img
            className="rounded-[50%] shadow-xl"
            src={portraitImg}
            alt="bild på grundarna av Tak Mat O Tur"
          />
        </div>

        {/* div that holds all the text under the img */}
        <div className="relative  overflow-hidden">
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
          <div className="mt-5">
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
          <div className="mt-5">
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
        {/* button div */}
        <div className="button-holder flex justify-center mt-5 mb-5 round">
          <Link to="/" className=" inline-flex  bg-slate-800 rounded-md ">
            <button className="relative h-12 w-40 overflow-hidden border border-PrimaryColor shadow-2xl rounded-md ">
              <span className="relative z-10 text-white">Frågor / Kontakt</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default About;
