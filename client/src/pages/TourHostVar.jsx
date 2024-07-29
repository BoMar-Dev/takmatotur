import { Link } from "react-router-dom";

const TourHostVar = () => {
  return (
    <section className="relative flex flex-col items-center p-5 mb-10">
      <header className="flex flex-col items-center justify-center mb-6 text-center">
        <h1 className="mb-2 text-2xl font-bold">Topptur höst & vår</h1>
        <p>
          Sen topptur på våren när liftarna stängt eller lås av hösten alla
          fantastiska färger
          <br /> Derssa årstider är fantastiska. Åk skidor i t-shirt när
          liftarna stängt vid 21-tiden på kvällen. Vandra och se fjällets alla
          färger på hösten
        </p>
      </header>

      <article className="flex flex-col p-5 w-full max-w-4xl bg-white rounded-lg shadow-md">
        <section className="mb-6">
          <div className="p-4">
            <h2 className="mb-2 font-semibold">Vad ingår?</h2>
            <ul className="list-disc list-inside">
              <li className="mb-1">
                En guide som guidar dig till unika miljöer
              </li>
              <li className="mb-1">Hösten erbjuds ryggsäck </li>
              <li className="mb-1">Enkare lunch</li>
            </ul>
          </div>
        </section>
        <section className="mb-6">
          <div className="p-4">
            <h2 className="mb-2 font-semibold">Tillägg</h2>
            <ul className="list-disc list-inside">
              <li className="mb-1">Person som fotograferar erat äventyr</li>
              <li className="mb-1">
                Generell utrustning för topptur med skidor
              </li>
              <li className="mb-1">Middag</li>
            </ul>
          </div>
        </section>

        <section>
          <div className="p-4">
            <h2 className="mb-2 font-semibold">Priser</h2>
            <p>
              Halvdag 800:- / person <br />
              Heldag 1900:- / person
            </p>
          </div>
        </section>
        <div className="button-holder flex justify-center mt-5 mb-5"></div>
      </article>
      <div className="button-holder flex justify-center mt-5 mb-5">
        <Link to="/topptur" className="inline-flex bg-slate-800 rounded-md">
          <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-PrimaryColor text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-sky-700 before:duration-500 before:ease-out hover:shadow-sky-700 hover:before:h-56 hover:before:w-56 rounded-md">
            <span className="relative z-10">Bakåt</span>
          </button>
        </Link>
      </div>
    </section>
  );
};
export default TourHostVar;
