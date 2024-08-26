import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// import components
import Card from "../components/Card";
import BookingForm from "../components/forms/BookingForm.jsx";
import SEOHelmet from "../components/SEOHelment.jsx";

// Import images
import vinter from "../img/tour/vinter.webp";
import sommar from "../img/tour/sommar.webp";
import backgroundImg from "../img/about/background.svg";

const Tour = () => {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  const openBookingForm = () => setIsBookingFormOpen(true);
  const closeForm = () => setIsBookingFormOpen(false);

  return (
    <>
      <SEOHelmet
        title="Topptur för alla årstider | Tak Mat o Tur"
        description="Upplev fantastiska toppturer året runt i Jämtland. Boka ditt äventyr idag!"
        keywords="topptur, Jämtland, äventyr, sommar, vinter, natur"
        url="http://takmatotur.se/topptur"
        image={vinter}
      />

      <section className="section flex flex-col p-4 items-center relative 3xl:w-[70%] 3xl:m-auto text-PrimaryColor">
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "300%",
            backgroundRepeat: "no-repeat",
            opacity: 0.08,
            zIndex: -1,
            transform: "translateX(-30%)",
          }}
        ></div>
        <header className="text-center mb-2">
          <h1 className="font-bold">
            Topptur
            <span className="block sm:hidden">för alla årstider</span>
            <span className="hidden sm:inline"> – för alla årstider</span>
          </h1>
        </header>
        <div className="text-center flex justify-center p-5 md:w-[80%]">
          <button
            className="custom-button bg-amber-700"
            onClick={openBookingForm}
          >
            <span className="relative z-10">Bokningsförfrågan</span>
          </button>
        </div>

        {/* Updated Article Section */}
        <article className="p-3 md:p-20 xl:p-8 xl:w-2/3 m-auto font-semibold text-lg">
          <p>
            Oavsett om det är höst, vinter, vår eller sommar så erbjuder vi
            toppturer som passar era önskemål. Våran vision är att blanda
            äventyr, utmaningar och samtidigt känna på lugnet ute i naturen.
          </p>
          <p className="mt-5">
            Våra toppturer ska passa alla enligt önskemål. Våra mål är att ni
            ska få uppleva det fina med vår natur här uppe i Jämtland.
          </p>
        </article>

        <header className="text-center my-10">
          <h2 className="text-xl  text-amber-700 font-semibold">
            Olika äventyr för olika årstider
          </h2>
        </header>
        <div className="card-container md:w-[70%] flex flex-col space-y-8 xl:flex-row xl:space-y-0  xl:space-x-12">
          <div className="flex flex-col flex-grow">
            <Card
              image={vinter}
              title="Vinter"
              link="/topptur/vinter"
              description="Ett äventyr både uppför och nerför - Upptäck vårt fantastiska vinterlandskap och följ med på en topptur där du slipper folkmassan. Detta är lika mycket en naturupplevelse som ett äventyr."
              imageProps={{ loading: "lazy" }} // Lazy-load the image
            />
          </div>
          <div className="flex flex-col flex-grow">
            <Card
              image={sommar}
              title="Sommar / Höst / Vår"
              link="/topptur/sommar"
              description="Här finns inga gränser. Vill du bara njuta av naturen eller springa dig trött? Kanske ha en personlig kock uppe på fjället som förgyller detta unika tillfälle. Oavsett var du väljer så är möjligheterna oändliga."
              imageProps={{ loading: "lazy" }} // Lazy-load the image
            />
          </div>
        </div>

        <div className="text-center p-5 md:w-[80%] my-10">
          <p>
            Börja ditt äventyr redan idag!
            <span className="font-extrabold"></span>
            <br />
            Kontakta oss så hjälper vi dig att planera en oförglömlig topptur
            som passar just dina eller era önskemål.
          </p>
        </div>

        <div className="text-center flex justify-center mb-12 p-5 mt-10 md:w-[80%]">
          <button
            className="custom-button bg-amber-700"
            onClick={openBookingForm}
          >
            <span className="relative z-10">Bokningsförfrågan</span>
          </button>
        </div>

        <AnimatePresence>
          {isBookingFormOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <BookingForm closeForm={closeForm} />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Tour;
