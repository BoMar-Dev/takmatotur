import { Link } from "react-router-dom";

// Import component
import SEOHelmet from "../components/SEOHelment";

// Import the background image
import backgroundImg from "../img/about/background.svg";

const PersonligCoach = () => {
  return (
    <>
      <SEOHelmet
        title="Personlig Löpcoachning | Tak Mat o Tur"
        description="Privat löpcoachning för alla nivåer. Få individanpassad träning, teknikanalys och personlig motivation för att nå dina löpmål."
        keywords="Löpcoach, Tak Mat o Tur, löpning åre, trail, åre löpning, träningsprogram löpning, måndagslöpning, åredalens löpgupp, löpgrupp, åredalen coach, företagsträning åre, företagslöpning åre, löpning företag, gruppträning, gemenskap, löpning roligt, takmat, takmatotur, träning, coaching, triathlon, personlig träning, Marin Gillgren, rolig löpning, förbättra löpsteg, löpgrupp, måndagslöpning, löpning för alla, program, löp, nybörjare, avancerad, löping som passar alla, personligt program, online coach, online, coachning, löpinstruktör,"
        url="http://takmatotur.se/coach/personlig"
        image={backgroundImg} // Replace with a relevant image if available
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

        <header className="flex justify-center mb-10">
          <h1 className="font-bold text-center">Personlig Löpcoachning</h1>
        </header>

        <div className="max-w-screen-xl mx-auto  mb-10">
          <article className="xl:text-left">
            <p className="text-base md:text-md xl:text-xl font-semibold p-3 mx-auto">
              Att löpträna på egen hand kan vara både utmanande och ibland
              ensamt. Oavsett om du är en nybörjare som vill komma igång eller
              en erfaren löpare som siktar på nya personliga rekord, kan privat
              löpcoachning från oss vara nyckeln till att ta ditt löpande till
              nästa nivå. Inspiration, stöd och motivation varje steg på vägen.
            </p>
          </article>
        </div>

        <div className="max-w-screen-xl mx-auto p-3 mb-10">
          <section className="mb-6">
            <div className="p-3">
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
            <p className="text-center md:w-[80%] lg:w-[60%] xl:w-[70%] mx-auto">
              Gör er redo att snöra på skorna och följ med oss på en resa mot
              bättre hälsa, ökad arbetsglädje och snabbare löpsteg!
            </p>
          </section>

          <div className="text-center flex justify-center mt-16 mb-5">
            <Link to="/coach" className="inline-flex">
              <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-amber-700 text-white shadow-2xl transition-all rounded-md">
                <span className="relative z-10">Bakåt</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonligCoach;
