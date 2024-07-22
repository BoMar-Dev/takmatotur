import Card from "../components/Card";

// import images
import vinter from "../img/tour/vinter.jpg";
import sommar from "../img/tour/sommar.jpg";
import hostOchVar from "../img/tour/ovriga.jpg";

import backgroundImg from "../img/about/background.svg";

const Tour = () => {
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
      <header className="text-center mb-5">
        <h1 className="text-2xl font-bold">Topptur - för alla årstider</h1>
      </header>
      <div className="xl:flex xl:space-x-10 xl:items-start md:w-[80%]  ">
        <article className="p-5 xl:w-2/3 m-auto">
          <p className="mb-5">
            Oavsett om det är höst, vinter, vår eller sommar så erbjuder vi
            toppturer som passar era önskemål. Våran vision är att blanda
            äventyr, utmaningar och samtidigt känna på lugnet ute i naturen.
          </p>
          <p className="mb-5">
            Våra toppturer ska passa alla enligt önskemål. Våra mål är att ni
            ska få uppleva det fina med vår natur här uppe i jämtland.
          </p>
        </article>
      </div>

      <header className="text-center my-10">
        <h2 className="text-xl font-medium">
          Olika äventyr för olika årstider
        </h2>
      </header>
      <div className="card-container md:w-[80%] flex flex-col xl:flex-row xl:space-x-5">
        <Card
          image={vinter}
          title="Vinter"
          link=""
          description="Upptäck vårt fantastiska vinterlandskap och följ med på en topptur där du slipper folkmassan. Detta är lika mycket en naturupplevlese som ett äventyr. "
        />
        <Card
          image={sommar}
          title="Sommar"
          link=""
          description="Här finns inga gränser. Vill du bara njuta av naturen eller springa dig trött ? Kanske ha en personlig kock uppe på fjället som förgyller detta unika tillfälle. Oavsätt var du väljer så är möjligheterna oändliga"
        />
        <Card
          image={hostOchVar}
          title="Höst & Vår"
          link=""
          description="Upptäck våren med en topptur i t-shirt och gräv er en solgrop. Kanske har ni en kock som lagar er mat ? Hösten erbjuder 1000 färger och mycket i skogen går att äta vid denna tidpunkt. "
        />
      </div>
      <footer className="text-center mb-10 p-5 md:w-[80%]">
        <p>
          Boka din upplevelse redan idag.{" "}
          <span className="font-extrabold">
            070123456 - takmatotur@gmail.com.
          </span>
          <br />
          Märk mailet med #topptur
        </p>
      </footer>
    </section>
  );
};
export default Tour;
