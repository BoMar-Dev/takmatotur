import backgroundImg from "../img/about/background.svg";
import torgeby from "../img/trailcamp/marcustorgeby.jpg";
import group from "../img/trailcamp/group.jpg";
import welcome from "../img/trailcamp/welcome.jpg";

const TrailCamp = () => {
  return (
    <section className="section flex flex-col p-5 items-center relative 3xl:w-[70%] 3xl:m-auto mb-5">
      <div
        className="absolute top-[-700px] left-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "300%",
          backgroundPosition: "",
          backgroundRepeat: "repeat-y",
          opacity: 0.15,
          zIndex: -1,
          transform: "translateX(-30%)",
        }}
      ></div>
      <header className="flex flex-col justify-center items-center text-center mb-6">
        <h1 className="text-2xl font-bold mb-2">Trail Camp 2024</h1>
        <h2 className="text-lg font-bold">30/8 - 1/9</h2>
      </header>
      <article className="flex flex-col space-y-6 p-5">
        <section className="text-center">
          <p>
            Välkommen till Trail Camp Åre 2024 – en oförglömlig löparupplevelse
            i hjärtat av Åres storslagna fjällvärld! Mellan den 30 augusti och 1
            september bjuder vi in dig till tre dagar fyllda med inspiration,
            utmaning och gemenskap i en av Sveriges mest natursköna miljöer.
          </p>
          <img
            className="rounded-md mt-4"
            src={welcome}
            alt="bild på Tak Mat O Tur och en av deras stop i ett vattenfall där man kan bada"
          />
        </section>

        <section>
          <h3 className="font-semibold mb-2">Vad ingår?</h3>
          <ul className="list-disc list-inside">
            <p className="mb-1">
              4 löppass: Våra erfarna ledare tar dig med på storslagna löpturer
              genom Åres fantastiska landskap – från tät skog till vidsträckta
              fjällvidder.
            </p>
            <p>
              Boende med helpension: Bo bekvämt på fantastiska{" "}
              <a href="https://mullfjallet.se/" className="font-extrabold">
                Pensionat Mullfjället
              </a>{" "}
              och njut av näringsrika och välsmakande måltider i den perfekta
              miljön för att koppla av och umgås mellan passen.
            </p>
          </ul>
        </section>

        <section>
          <h3 className="font-semibold mb-2">Föreläsning med Markus Torgeby</h3>
          <p>
            Inspireras av{" "}
            <a href="https://www.markustorgeby.com/" className="font-extrabold">
              Marcus Torgeby
            </a>
            , den legendariske löparen och författaren som delar med sig av sina
            insikter om löpning, livet och att finna sin egen väg genom
            utmaningar och framgångar.
          </p>
          <img
            className="rounded-md mt-4"
            src={torgeby}
            alt="föreläsare Marcus Torgeby"
          />
        </section>

        <section>
          <h3 className="font-semibold mb-2">Varför ska du delta?</h3>
          <p>
            Trail Camp Åre är mer än bara ett träningsläger – det är en
            möjlighet att koppla bort från vardagens stress och återknyta
            kontakten med naturen och din egen kropp. Här får du chansen att
            utveckla din löpteknik, bygga uthållighet och styrka, samtidigt som
            du njuter av fantastisk gemenskap och mat med likasinnade löpare.
            Oavsett om ditt mål är att förbättra din tid, hitta löpglädje eller
            bara uppleva den svenska fjällvärlden på ett nytt sätt, är detta
            lägret för dig.
          </p>
          <p className="mt-5">
            Boka din plats idag och TÄVLA om att få hela helgen gratis
            tillsammans med en vän. Platserna är begränsade, så se till att boka
            din plats redan idag för att säkra din medverkan i denna unika
            löparupplevelse. Av de 10 första betalande anmälda lottar vi ut hela
            helgen gratis plus att du får ta med en vän utan extra kostnad!!
          </p>
          <img
            className="rounded-md mt-4"
            src={group}
            alt="gruppbild på deltagare och två st ledare från Tak Mat o Tur"
          />
        </section>

        <section>
          <h3 className="font-semibold mb-2">Priser</h3>
          <p>
            Boende med helpension, löpguidning och föreläsning med Markus
            Torgeby: 4900 kr.
          </p>
          <p className="mt-1">
            {" "}
            Utan övernattning: Löpguidning, 2 luncher och 2 middagar samt
            föreläsning: 2950 kr.
          </p>
          <p className="font-bold mt-2">
            BOKA - info@mullfjallet.se <br /> ange "Trail camp Åre 2024"
          </p>
        </section>
      </article>
    </section>
  );
};

export default TrailCamp;
