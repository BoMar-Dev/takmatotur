import { Link } from "react-router-dom";
import Card from "../components/Card";

// import images
import profil2 from "../img/coach/profil2.jpg";
import corporateCoach from "../img/coach/foretag.jpg";
import privatCoach from "../img/coach/personlig.jpg";
import mondayRun from "../img/home/monday.jpg";
import backgroundImg from "../img/about/background.svg";

const Coach = () => {
  return (
    <section className="section flex flex-col p-5 items-center relative 3xl:w-[70%] 3xl:m-auto">
      <div
        className="absolute top-[-700px] left-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "700%",
          backgroundPosition: "",
          backgroundRepeat: "no-repeat",
          opacity: 0.15,
          zIndex: -1,
          transform: "translateX(-30%)",
        }}
      ></div>
      <h1 className="text-2xl font-bold">Löpcoach – Martin Gillgren</h1>
      <div className="xl:flex xl:space-x-10 xl:items-start md:w-[80%]">
        <div className="p-5 xl:w-1/2">
          <div className="mb-5">
            Med ett ursprung inom friidrott och fotboll har löpning alltid varit
            en grund i mitt liv. Jag specialiserade mig främst på 800 m, 1500 m
            och 5000 m. Detta är år som jag är otroligt tacksam för. Farten är
            förstås inte den samma som 42-åring men erfarenheter kring teknik,
            motivation och effektivitet i löpsteget finns kvar.
          </div>
          <div className="mb-5">
            När gnistan för att tävla på löparbanor började avta övergick jag
            till längre distanser och påbörjade också en satsning mot triathlon
            parallellt. Att få utveckla nya färdigheter som simning och cykling
            i kombination med löpningen var fantastiskt kul och inspirerande.
            Mina främsta distanser blev inte helt oväntat de med lite mer fart
            i, men jag tog mig också igenom ett par långdistanser och Ironmans,
            men då mest för äventyret och festen som större evenemang innebär.
          </div>
          <div>
            I och med vår flytt till Jämtland slutade jag tävla i triathlon men
            har fortfarande kvar simningen och cyklingen som alternativ träning
            till löpningen. Idag finns inga ambitioner om pallplaceringar kvar,
            löpningen har fått övergå till upplevelser och äventyr istället. Jag
            försöker fortfarande ligga på en hyfsad nivå med ca 7 mil i veckan
            men bara för att det är så underbart att springa. Om det blir några
            tävlingar så väljer jag bara de som är roliga, gärna stora events
            där löpfesten är lika viktig som prestationen.
          </div>
        </div>
        <div className="p-5 xl:w-1/2 flex items-center">
          <img
            src={profil2}
            alt="profilbild på Martin Gillgren löpcoach tak mat o tur"
            className="w-full rounded-3xl object-cover xl:w-[80%] 3xl:w-[50%]"
            style={{ height: "auto", maxHeight: "100%" }}
          />
        </div>
      </div>

      <h1 className="text-xl font-medium">Vad jag erbjuder</h1>
      <div className="card-container md:w-[80%] flex flex-col xl:flex-row xl:space-x-5">
        <Card
          image={mondayRun}
          title="Måndagslöpning"
          link="/coach/mandaglopning"
          description="Upptäck magin med Jämtlands härligaste löpargrupp! Under sex måndagar får du chansen att vara med i en inspirerande gemenskap och utveckla din löpning på bästa sätt."
        />
        <Card
          image={corporateCoach}
          title="Företagsträning"
          link="/coach/foretag"
          description="Vill ni skapa en starkare teamkänsla, öka arbetsglädjen och samtidigt förbättra hälsan hos era medarbetare? – Följ med oss på en 10-veckors Löpcoachingresa för Företagsgrupper!."
        />
        <Card
          image={privatCoach}
          title="Personlig löpcoachning"
          link="/coach/personlig"
          description="Privat löpcoachning från Tak Mat o Tur erbjuder skräddarsydda träningsprogram och teknisk rådgivning för att förbättra din löpstil, öka effektiviteten och minska skaderisken"
        />
      </div>
      <h2 className="mb-10 p-5 md:w-[80%]">
        Kom igång redan idag. Kontakta mig.{" "}
        <span className=" font-extrabold">
          070123456 - takmatotur@gmail.com.
        </span>
        <br />
        Märk gärna mailet med den rubriken du/ni önskar
      </h2>
    </section>
  );
};

export default Coach;
