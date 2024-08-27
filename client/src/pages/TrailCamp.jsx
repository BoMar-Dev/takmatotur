import SEOHelmet from "../components/SEOHelment";

// Import images
import backgroundImg from "../img/about/background.svg";
import torgeby from "../img/trailcamp/marcustorgeby.webp";
import group from "../img/trailcamp/group.webp";
import welcome from "../img/trailcamp/welcome.webp";

// Import component
import GridImgs from "../components/GridImgs"; // Assuming GridImgs is a reusable component for image and text layout

const TrailCamp = () => {
  return (
    <>
      <SEOHelmet
        title="Trail Camp Åre 2024 | Tak Mat O Tur"
        description="Join us for Trail Camp Åre 2024, a three-day running experience in the heart of Åre's magnificent mountains. From August 30th to September 1st, immerse yourself in nature, challenge yourself, and connect with like-minded runners."
        keywords="Trail Camp, Åre 2024, running camp, trail running, Markus Torgeby, Mullfjället, running experience, Tak Mat O Tur"
        url="https://takmatotur.se/trailcamp"
        image="https://yourwebsite.com/path-to-image.jpg"
        ogType="website"
        twitterCard="summary_large_image"
      />

      <section className="relative flex flex-col items-center p-5 mb-5 2xl:pb-10 3xl:w-[60%] 3xl:m-auto">
        <div
          className="absolute left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: 0.08,
            zIndex: -1,
          }}
        ></div>
        <header className="flex flex-col items-center justify-center mb-6 text-center">
          <h1 className="mb-2 font-bold ">Trail Camp 2024</h1>
          <h2 className="text-lg font-bold mb-5">30/8 - 1/9</h2>
        </header>

        <div className="bg-yellow-100 border border-yellow-400 text-black p-4 rounded-lg mb-6 text-center w-full max-w-xl mx-auto">
          <p className="font-semibold">
            Trail camp har fått en uppdatering. Gå in på våran
            <a
              href="https://www.facebook.com/profile.php?id=61558195943539"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline ml-1 mr-2"
              aria-label="Besök vår Facebook-sida för senaste uppdateringar om evenemang"
            >
              Facebook
            </a>
            klicka vidare till "kommande event" för senaste uppdateringen.
          </p>
        </div>

        <article className="p-3 md:p-20 xl:p-8 xl:w-2/3 m-auto font-semibold text-base md:text-md xl:text-xl">
          <p>
            Välkommen till Trail Camp Åre 2024 – en oförglömlig löparupplevelse
            i hjärtat av Åres storslagna fjällvärld! Mellan den 30 augusti och 1
            september bjuder vi in dig till tre dagar fyllda med inspiration,
            utmaning och gemenskap i en av Sveriges mest natursköna miljöer.
          </p>
        </article>

        <div className="mb-6 text-center font-semibold md:w-[80%] xl:w-[70%]"></div>

        <article className="flex flex-col p-5 w-full md:w-[80%] lg:w-[75%] xl:w-[90%]">
          <GridImgs
            src={welcome}
            alt="Trail Camp Welcome"
            title="Vad ingår?"
            description={
              <>
                4 löppass: Våra erfarna ledare tar dig med på storslagna
                löpturer genom Åres fantastiska landskap – från tät skog till
                vidsträckta fjällvidder.
                <br />
                Boende med helpension: Bo bekvämt på fantastiska{" "}
                <a
                  href="https://mullfjallet.se/"
                  className="font-extrabold"
                  aria-label="Besök Pensionat Mullfjällets hemsida"
                >
                  Pensionat Mullfjället
                </a>{" "}
                och njut av näringsrika och välsmakande måltider i den perfekta
                miljön för att koppla av och umgås mellan passen.
              </>
            }
            imgProps={{ loading: "lazy" }}
          />
          <GridImgs
            src={torgeby}
            alt="Föreläsare Marcus Torgeby"
            title="Föreläsning med Markus Torgeby"
            description={
              <>
                Inspireras av{" "}
                <a
                  href="https://www.markustorgeby.com/"
                  className="font-extrabold"
                  aria-label="Besök Markus Torgebys officiella hemsida"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Marcus Torgeby
                </a>
                , den legendariske löparen och författaren som delar med sig av
                sina insikter om löpning, livet och att finna sin egen väg genom
                utmaningar och framgångar.
                <br /> Vi är såklart lite extra stolta över att ha med Markus
                här då han i år är en av sommarpratarna i P1.
              </>
            }
            imgProps={{ loading: "lazy" }}
            reverse
          />
          <GridImgs
            src={group}
            alt="Trail Camp Group"
            title="Varför ska du delta?"
            description={
              <>
                Trail Camp Åre är mer än bara ett träningsläger – det är en
                möjlighet att koppla bort från vardagens stress och återknyta
                kontakten med naturen och din egen kropp. Här får du chansen att
                utveckla din löpteknik, bygga uthållighet och styrka, samtidigt
                som du njuter av fantastisk gemenskap och mat med likasinnade
                löpare. Oavsett om ditt mål är att förbättra din tid, hitta
                löpglädje eller bara uppleva den svenska fjällvärlden på ett
                nytt sätt, är detta lägret för dig.
              </>
            }
            imgProps={{ loading: "lazy" }}
          />
        </article>

        <section className="flex flex-col w-full md:w-[80%] lg:w-[75%] xl:w-[90%] mt-5 p-3">
          <p className="xl:w-[70%] xl:text-center xl:m-auto">
            Boka din plats idag och TÄVLA om att få hela helgen gratis
            tillsammans med en vän. Platserna är begränsade, så se till att boka
            din plats redan idag för att säkra din medverkan i denna unika
            löparupplevelse. Av de 10 första betalande anmälda lottar vi ut hela
            helgen gratis plus att du får ta med en vän utan extra kostnad!!
          </p>
          <h3 className="mb-2 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] xl:text-[22px] font-semibold mt-5 text-amber-700">
            Priser
          </h3>
          <p>
            Boende med helpension, löpguidning och föreläsning med Markus
            Torgeby: 4900 kr.
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
    </>
  );
};

export default TrailCamp;
