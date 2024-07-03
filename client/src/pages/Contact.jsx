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
    <section className="section flex flex-col p-5 bg-red ">
      {/* Div that holds all content */}
      <div className=" lg:flex lg:shadow-2xl mb-10 lg:rounded-md">
        <div className="text-container text-center">
          <header className="text-2xl font-bold m-auto">
            <h1>Kontakta oss!</h1>
          </header>
          <p className="p-5">
            Är det någon ni funderar över som inte står på vår hemsida så är ni
            varmt välkommen att kontakta oss via telefon eller epost. Vi finns
            tillgängliga för att ni ska få bästa tänka bara service.
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
            className="cursor-pointer"
            src={map}
            alt="Karta till Tak Mat O Tur"
          />
        </a>
      </div>
    </section>
  );
};
export default Contact;
