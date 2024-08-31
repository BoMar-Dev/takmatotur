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
        title="Toppturer | Tak Mat o Tur"
        description="Upplev fantastiska toppturer året runt i Jämtland. Boka ditt äventyr idag!"
        keywords="topptur, Jämtland, äventyr, sommar, vinter, natur"
        url="http://takmatotur.se/topptur"
        image={vinter}
      />

      <section className="relative flex flex-col items-center p-4 pb-16">
        <div
          className="absolute top-[-700px] left-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "300%",
            opacity: 0.05,
            zIndex: -1,
            transform: "translateX(-30%)",
          }}
        ></div>

        <header className="text-center mb-5">
          <h1 className="font-bold">
            Topptur
            <span className="block sm:hidden">för alla årstider</span>
            <span className="hidden sm:inline"> – för alla årstider</span>
          </h1>
        </header>

        <div className="text-center flex justify-center mb-10">
          <button
            className="custom-button bg-amber-700 text-white"
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

        <article className="max-w-screen-xl mx-auto p-3 mb-10">
          <p className="text-base md:text-md xl:text-xl font-semibold">
            Oavsett om det är höst, vinter, vår eller sommar så erbjuder vi
            toppturer som passar era önskemål. Vår vision är att blanda äventyr,
            utmaningar och samtidigt känna på lugnet ute i naturen.
          </p>
          <p className="mt-5 text-base md:text-md xl:text-xl font-semibold">
            Våra toppturer ska passa alla enligt önskemål. Våra mål är att ni
            ska få uppleva det fina med vår natur här uppe i Jämtland.
          </p>
        </article>

        <div className="xl:flex xl:space-x-10 xl:items-start max-w-screen-xl mx-auto">
          <article className="p-5 xl:w-1/2">
            <Card
              image={vinter}
              title="Vinter"
              link="/topptur/vinter"
              description="Ett äventyr både uppför och nerför - Upptäck vårt fantastiska vinterlandskap och följ med på en topptur där du slipper folkmassan. Detta är lika mycket en naturupplevelse som ett äventyr."
              imageProps={{ loading: "lazy" }}
            />
          </article>
          <aside className="p-5 xl:w-1/2 flex items-center">
            <Card
              image={sommar}
              title="Sommar / Höst / Vår"
              link="/topptur/sommar"
              description="Här finns inga gränser. Vill du bara njuta av naturen eller springa dig trött? Kanske ha en personlig kock uppe på fjället som förgyller detta unika tillfälle. Oavsett vad du väljer så är möjligheterna oändliga."
              imageProps={{ loading: "lazy" }}
            />
          </aside>
        </div>

        <div className="text-center my-10 p-5 ">
          <h2 className="text-xl font-semibold text-amber-700 mb-2">
            Börja ditt äventyr redan idag!
          </h2>
          <p>
            Kontakta oss så hjälper vi dig att planera en oförglömlig topptur
            som passar just dina eller era önskemål.
          </p>
        </div>

        <div className="text-center flex justify-center mb-10 p-5">
          <button
            onClick={openBookingForm}
            className="custom-button bg-amber-700 text-white"
          >
            <span className="relative z-10">Bokningsförfrågan</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Tour;
