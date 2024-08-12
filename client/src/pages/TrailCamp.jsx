//import img
import backgroundImg from "../img/about/background.svg";
import torgeby from "../img/trailcamp/marcustorgeby.jpg";
import group from "../img/trailcamp/group.jpg";
import welcome from "../img/trailcamp/welcome.jpg";

const TrailCamp = () => {
  return (
    <section className="relative flex flex-col items-center p-5 mb-5 2xl:pb-10 3xl:w-[60%] 3xl:m-auto">
      <div
        className="absolute top-[-700px] left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "100%",
          backgroundRepeat: "repeat-x",
          opacity: 0.08,
          zIndex: -1,
          transform: "translateX(-30%)",
        }}
      ></div>
      <header className="flex flex-col items-center justify-center mb-6 text-center">
        <h1 className="mb-2 font-bold">Trail Camp 2024</h1>
        <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] text-lg font-bold mb-5">
          30/8 - 1/9
        </h2>
      </header>

      <div className="mb-6 p-3 font-semibold md:w-[80%] xl:w-[70%] m-auto text-lg">
        <p className="">
          Välkommen till Trail Camp Åre 2024 – en oförglömlig löparupplevelse i
          hjärtat av Åres storslagna fjällvärld! Mellan den 30 augusti och 1
          september bjuder vi in dig till tre dagar fyllda med inspiration,
          utmaning och gemenskap i en av Sveriges mest natursköna miljöer.
        </p>
      </div>

      <article className="flex flex-col p-5 w-full md:w-[80%] lg:w-[75%] xl:w-[90%]">
        <section className="flex flex-col xl:flex-row xl:items-center xl:justify-betweenmb-5 md:mb-5 lg:mb-5 xl:mb-0">
          <img
            className="w-full xl:w-[50%] rounded-none"
            src={welcome}
            alt="Trail Camp"
          />
          <div className="w-full xl:w-[50%] xl:ml-0 p-4">
            <h3 className="mb-2 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] xl:text-[22px] font-semibold">
              Vad ingår?
            </h3>
            <ul className="list-inside list-disc">
              <li className="mb-1 list-none">
                4 löppass: Våra erfarna ledare tar dig med på storslagna
                löpturer genom Åres fantastiska landskap – från tät skog till
                vidsträckta fjällvidder.
              </li>
              <li className="list-none">
                Boende med helpension: Bo bekvämt på fantastiska{" "}
                <a href="https://mullfjallet.se/" className="font-extrabold">
                  Pensionat Mullfjället
                </a>{" "}
                och njut av näringsrika och välsmakande måltider i den perfekta
                miljön för att koppla av och umgås mellan passen.
              </li>
            </ul>
          </div>
        </section>

        <section className="flex flex-col xl:flex-row-reverse xl:items-center xl:justify-between mb-5 md:mb-5 lg:mb-5 xl:mb-0">
          <img
            className="w-full xl:w-[50%] rounded-none"
            src={torgeby}
            alt="föreläsare Marcus Torgeby"
          />
          <div className="w-full xl:w-[50%] xl:mr-0 p-4">
            <h3 className="mb-2 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] xl:text-[22px] font-semibold">
              Föreläsning med Markus Torgeby
            </h3>
            <p>
              Inspireras av{" "}
              <a
                href="https://www.markustorgeby.com/"
                className="font-extrabold"
              >
                Marcus Torgeby
              </a>
              , den legendariske löparen och författaren som delar med sig av
              sina insikter om löpning, livet och att finna sin egen väg genom
              utmaningar och framgångar.
              <br /> Vi är såklart lite extra solt över att ha med Markus här då
              han i år är en av sommarpratarna i p1.
            </p>
          </div>
        </section>

        <section className="flex flex-col xl:flex-row xl:items-center xl:justify-between mb-5 md:mb-5 lg:mb-5 xl:mb-0">
          <img
            className="w-full xl:w-[50%] rounded-none"
            src={group}
            alt="Trail Camp Group"
          />
          <div className="w-full xl:w-[50%] xl:ml-0 p-4">
            <h3 className="mb-2 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] xl:text-[22px] font-semibold">
              Varför ska du delta?
            </h3>
            <p>
              Trail Camp Åre är mer än bara ett träningsläger – det är en
              möjlighet att koppla bort från vardagens stress och återknyta
              kontakten med naturen och din egen kropp. Här får du chansen att
              utveckla din löpteknik, bygga uthållighet och styrka, samtidigt
              som du njuter av fantastisk gemenskap och mat med likasinnade
              löpare. Oavsett om ditt mål är att förbättra din tid, hitta
              löpglädje eller bara uppleva den svenska fjällvärlden på ett nytt
              sätt, är detta lägret för dig.
            </p>
          </div>
        </section>
      </article>

      <section className="flex flex-col w-full md:w-[80%] lg:w-[75%] xl:w-[90%] mt-5 p-3">
        <p className="xl:w-[70%] xl:text-center xl:m-auto">
          Boka din plats idag och TÄVLA om att få hela helgen gratis tillsammans
          med en vän. Platserna är begränsade, så se till att boka din plats
          redan idag för att säkra din medverkan i denna unika löparupplevelse.
          Av de 10 första betalande anmälda lottar vi ut hela helgen gratis plus
          att du får ta med en vän utan extra kostnad!!
        </p>
        <h3 className="mb-2 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] xl:text-[22px] font-semibold mt-5">
          Priser
        </h3>
        <p>
          Boende med helpension, löpguidning och föreläsning med Markus Torgeby:
          4900 kr.
        </p>
        <p className="mt-1">
          Utan övernattning: Löpguidning, 2 luncher och 2 middagar samt
          föreläsning: 2950 kr.
        </p>
        <p className="mt-2 font-bold mb-10">
          BOKA - info@mullfjallet.se <br /> ange "Trail camp Åre 2024"
        </p>
      </section>
    </section>
  );
};

export default TrailCamp;
