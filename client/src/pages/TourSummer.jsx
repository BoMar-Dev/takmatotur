import { Link } from "react-router-dom";

// Import the background image
import backgroundImg from "../img/about/background.svg"; 

const TourSummer = () => {
  return (
    <section className="relative flex flex-col items-center p-5 mb-10 overflow-hidden">
      <div
        className="absolute top-[-150px] left-[-150px] w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "300%", 
          backgroundRepeat: "no-repeat",
          opacity: 0.08, 
          zIndex: -1,
          transform: "translateX(10%) translateY(10%)", 
        }}
      ></div>

      <header className="flex justify-center mb-6">
        <h1 className="mb-2 font-bold">Topptur sommar</h1>
      </header>

      <article className="flex flex-col p-5 w-full md:w-[80%] lg:w-[75%] xl:w-[60%] m-auto">
        <section className="mb-10">
          <div className="text-left">
            <p className="mb-5 text-lg font-semibold">
              Upptäck magin med Jämtlands härligaste sommarvandring. Kom upp på
              höjd och skåda utsikter som häpnar. Bada i en fjällsjö eller
              vandra ner för Åreskutan, kanske till mer tystare platser där
              lugnet står i fokus?
            </p>
          </div>
        </section>
      </article>

      <article className="flex flex-col p-5 w-full max-w-4xl">
        <section className="mb-6">
          <div className="p-4">
            <h2 className="mb-2 font-semibold text-xl">Vad ingår?</h2>
            <ul className="list-disc list-inside">
              <li className="mb-1">
                En guide som guidar dig till unika miljöer
              </li>
              <li className="mb-1">Ryggsäck som passar dagens aktivitet</li>
              <li className="mb-1">Enkare lunch</li>
            </ul>
          </div>
        </section>
        <section className="mb-6">
          <div className="p-4">
            <h2 className="mb-2 font-semibold text-xl">Tillägg</h2>
            <ul className="list-disc list-inside">
              <li className="mb-1">Person som fotograferar ert äventyr</li>
              <li className="mb-1">
                Eventuella liftkort för att komma upp på höjd
              </li>
              <li className="mb-1">Middag</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="p-4">
            <h2 className="mb-2 font-semibold text-xl">Priser</h2>
            <p>
              Halvdag 750:- / person <br />
              Heldag 1800:- / person
            </p>
          </div>
        </section>
      </article>

      <div className="button-holder flex justify-center mt-10 mb-5">
        <Link to="/topptur" className="inline-flex bg-slate-800 rounded-md">
          <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-PrimaryColor text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-sky-700 before:duration-500 before:ease-out hover:shadow-sky-700 hover:before:h-56 hover:before:w-56 rounded-md">
            <span className="relative z-10">Bakåt</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TourSummer;
