// // Montserrat
import { useEffect } from "react";

// import img
import map from "../img/contact/map.jpg";

// import icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="section flex flex-col p-5 bg-red">
      <h1 className="text-2xl font-bold m-auto">Kontakta oss</h1>
      {/* Div that holds all content */}
      <div className="p-5 mb-10 md:w-[80%] m-auto relative 3xl:w-[50%] lg:rounded-lg shadow-xl bg-white">
        {/* Image and text div for xl and above */}
        <div className="hidden xl:flex xl:space-x-10 items-center p-5">
          <div className="flex-1 xl:order-1 text-center">
            <header className="text-xl font-semibold m-auto">
              <h1>Hör av er</h1>
            </header>
            <p className="p-5">
              Är det information ni söker som ni inte finner på hemsidan eller
              önskar ni kanske ett skräddarsytt paket? Tveka inte på att höra av
              er, vi finns tillgängliga för att ni ska få bästa tänkbara
              service.
            </p>
            <div className="flex flex-col font-bold p-5 mb-5">
              <div className="flex items-center space-x-2">
                <BsFillTelephoneFill />
                <h2>+4670123456</h2>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <IoMdMail />
                <h2>takmatotur@gmail.com</h2>
              </div>
            </div>
          </div>
          <div className="flex-1 xl:order-2">
            <a
              href="https://maps.app.goo.gl/1q72xMDJvq3WwuQu8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="rounded-lg shadow-xl w-full cursor-pointer"
                src={map}
                alt="Karta till Tak Mat O Tur"
              />
            </a>
          </div>
        </div>

        {/* Layout for lg and below */}
        <div className="xl:hidden">
          <div className="text-container text-center">
            <header className="text-xl font-semibold m-auto">
              <h1>Hör av er</h1>
            </header>
            <p className="p-5">
              Är det information ni söker som ni inte finner på hemsidan eller
              söker ni kanske ett skräddarsytt paket? Tveka inte på att höra av
              er, vi finns tillgängliga för att ni ska få bästa tänkbara
              service.
            </p>
            <div className="flex flex-col font-bold p-5 mb-5">
              <div className="flex items-center space-x-2">
                <BsFillTelephoneFill />
                <h2>+4670123456</h2>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <IoMdMail />
                <h2>takmatotur@gmail.com</h2>
              </div>
            </div>
          </div>
          <a
            href="https://maps.app.goo.gl/1q72xMDJvq3WwuQu8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="cursor-pointer rounded-lg shadow-xl w-full md:w-3/4 lg:w-3/5 m-auto"
              src={map}
              alt="Karta till Tak Mat O Tur"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
