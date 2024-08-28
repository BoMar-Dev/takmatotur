import { Link } from "react-router-dom";

//import Component
import SEOHelmet from "../components/SEOHelment";

// Import the background image
import backgroundImg from "../img/about/background.svg";

const PersonligCoach = () => {
  return (
    <>
      <SEOHelmet
        title="Personlig Löpcoachning | Tak Mat o Tur"
        description="Privat löpcoachning för alla nivåer. Få individanpassad träning, teknikanalys och personlig motivation för att nå dina löpmål."
        keywords="personlig löpcoachning, löpträning, Jämtland, löpcoach, individuell träning"
        url="http://takmatotur.se/coach/personlig"
        image={backgroundImg} // Replace with a relevant image if available
      />

      <section className="relative flex flex-col items-center p-5 mb-10 overflow-hidden">
        <div
          className="absolute top-[-100px] left-[-150px] w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "300%",
            backgroundRepeat: "no-repeat",
            opacity: 0.05,
            zIndex: -1,
            transform: "translateX(20%) translateY(10%)",
          }}
        ></div>

        <header className="flex justify-center mb-6">
          <h1 className="mb-2 font-bold">Personlig Löpcoachning</h1>
        </header>

        {/* Consistent Article Section */}
        <article className="p-3 md:p-20 xl:p-8 xl:w-2/3 m-auto font-semibold text-base md:text-md xl:text-xl">
          <p className="mb-5">
            Att löpträna på egen hand kan vara både utmanande och ibland ensamt.
            Oavsett om du är en nybörjare som vill komma igång eller en erfaren
            löpare som siktar på nya personliga rekord, kan privat löpcoachning
            från oss vara nyckeln till att ta ditt löpande till nästa nivå.
            Inspiration, stöd och motivation varje steg på vägen.
          </p>
        </article>

        <article className="flex flex-col p-5 w-full max-w-4xl">
          <section className="mb-6">
            <div className="p-4">
              <h2 className="mb-2 font-semibold text-xl">
                Personlig Anpassning
              </h2>
              <p className="mb-5">
                En av de största fördelarna med privat löpcoachning från Tak Mat
                o Tur är den individuella anpassningen. Vi skapar
                träningsprogram som är exakt anpassade efter dina mål, din
                nuvarande form och dina personliga förutsättningar. Har du en
                dröm om att springa ditt första maraton? Eller kanske vill du
                bara förbättra din kondition och springa för nöjes skull? Vi
                hjälper dig att sätta realistiska och uppnåeliga mål och ger dig
                verktygen för att nå dem.
              </p>

              <h2 className="mb-2 font-semibold text-xl">Teknisk Expertis</h2>
              <p className="mb-5">
                Att ha någon som kan analysera din löpteknik och ge dig konkreta
                råd är ovärderligt. Som en del av individuellt program ingår
                filmning och analys av din löpteknik. Genom att arbeta med din
                hållning, steglängd och fotisättning optimeras varje löpsteg.
              </p>

              <h2 className="mb-2 font-semibold text-xl">
                Motivation och Stöd
              </h2>
              <p className="mb-5">
                Löpning kan vara en mental utmaning lika mycket som en fysisk.
                Jag fungerar som din personliga hejaklack och stöttepelare,
                särskilt när motivationen sviktar. Genom regelbundna check-ins
                och feedback kommer du att känna dig peppad och påmind om varför
                du startade din löparresa. Den personliga relationen du bygger
                med din coach ger dig ett tryggt och motiverande stöd som håller
                dig på rätt spår. Inledningsvis kommer vi ha ett möte där vi
                pratar nuläge, mål men också mycket motivation.
              </p>

              <h2 className="mb-2 font-semibold text-xl">
                Resultat och Framgångar
              </h2>
              <p className="mb-3">
                Ingenting är mer inspirerande än att se resultat från ditt hårda
                arbete. Genom strukturerad träning och dedikerad coaching kommer
                du att märka förbättringar i din uthållighet, hastighet och
                övergripande hälsa. Vi hjälper dig att följa dina framsteg och
                justerar programmet efter behov.
              </p>
            </div>
          </section>

          <section className="p-3 text-center">
            <p className="text-center md:w-[80%] lg:w-[60%] xl:w-[70%] md:m-auto">
              Gör er redo att snöra på skorna och följ med oss på en resa mot
              bättre hälsa, ökad arbetsglädje och snabbare löpsteg!
            </p>
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

export default PersonligCoach;
