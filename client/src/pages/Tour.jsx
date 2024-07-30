import { useState } from "react";
import Card from "../components/Card";
import BookingForm from "../components/forms/BookingForm.jsx";

// import images
import vinter from "../img/tour/vinter.jpg";
import sommar from "../img/tour/sommar.jpg";
import hostOchVar from "../img/tour/ovriga.jpg";

import backgroundImg from "../img/about/background.svg";

const Tour = () => {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  const openBookingForm = () => setIsBookingFormOpen(true);
  const closeForm = () => setIsBookingFormOpen(false);

  return (
    <section className="section flex flex-col p-5 items-center relative 3xl:w-[70%] 3xl:m-auto">
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "300%",
          backgroundRepeat: "no-repeat",
          opacity: 0.15,
          zIndex: -1,
          transform: "translateX(-30%)",
        }}
      ></div>
      <header className="text-center mb-2">
        <h1 className="text-2xl font-bold">Topptur - för alla årstider</h1>
      </header>
      <div className="text-center flex justify-center p-5 md:w-[80%]">
        <button
          className="custom-button  bg-amber-600"
          onClick={openBookingForm}
        >
          <span className="relative z-10">Bokningsförfrågan</span>
        </button>
      </div>
      <div className="xl:flex xl:space-x-10 xl:items-start md:w-[80%]">
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
        <div className="flex flex-col flex-grow">
          <Card
            image={vinter}
            title="Vinter"
            link="/topptur/vinter"
            description="Ett äventyr både uppför och nerför - Upptäck vårt fantastiska vinterlandskap och följ med på en topptur där du slipper folkmassan. Detta är lika mycket en naturupplevelse som ett äventyr."
          />
        </div>
        <div className="flex flex-col flex-grow">
          <Card
            image={sommar}
            title="Sommar"
            link="/topptur/sommar"
            description="Här finns inga gränser. Vill du bara njuta av naturen eller springa dig trött? Kanske ha en personlig kock uppe på fjället som förgyller detta unika tillfälle. Oavsett var du väljer så är möjligheterna oändliga."
          />
        </div>
        <div className="flex flex-col flex-grow">
          <Card
            image={hostOchVar}
            title="Höst & Vår"
            link="/topptur/host&var"
            description="Upptäck våren med en topptur i t-shirt och gräv er en solgrop. Kanske har ni en kock som lagar er mat? Hösten erbjuder 1000 färger och mycket i skogen går att äta vid denna tidpunkt."
          />
        </div>
      </div>

      <div className="text-center flex justify-center mb-10 p-5 md:w-[80%]">
        <button
          className="custom-button bg-amber-600"
          onClick={openBookingForm}
        >
          <span className="relative z-10">Bokningsförfrågan</span>
        </button>
      </div>

      {isBookingFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <BookingForm closeForm={closeForm} />
        </div>
      )}
    </section>
  );
};

export default Tour;
