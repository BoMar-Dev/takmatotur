import { useState, useEffect } from "react";
import { useFormDefaults } from "../useFormDefaults";

// import images
import map from "../img/contact/map.jpg";
import backgroundImg from "../img/about/background.svg";
import { MdOutlineDisabledByDefault } from "react-icons/md";

// import icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { GiConfirmed } from "react-icons/gi";

const Contact = () => {
  const { defaults, formData } = useFormDefaults({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/kontakt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.text();

      if (response.ok) {
        console.log("Server response:", data);
        setEmailSent(true);
        setEmailError(false);
      } else {
        console.log("Error response from server:", data);
        setEmailSent(false);
        setEmailError(true);
      }
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      setEmailSent(false);
      setEmailError(true);
    }
  };

  return (
    <section className="section flex flex-col p-5 bg-red mb-10 relative">
      <div
        className="absolute top-[-400px] left-[-100px] w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "120%",
          backgroundRepeat: "repeat-x",
          opacity: 0.08,
          zIndex: -1,
          transform: "translateX(-20%) translateY(20%)",
        }}
      ></div>

      <header className="text-center mb-5">
        <h1 className="font-bold">Kontakta oss</h1>
      </header>

      <div className="p-5 mb-10 md:w-[80%] m-auto relative 3xl:w-[50%] lg:rounded-lg ">
        <div className="hidden xl:flex xl:space-x-10 items-center p-5">
          <div className="flex-1 xl:order-1 text-center">
            <div className="text-lg font-bold m-auto">
              <h2>Vi svarar så fort vi kan</h2>
            </div>
            <p className="p-5">
              Är det något ni funderar över som inte står på vår hemsida så är
              ni varmt välkommen att kontakta oss via telefon eller epost. Vi
              finns tillgängliga för att ni ska få bästa tänkbara service.
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
        <div className="xl:hidden">
          <div className="text-container text-center">
            <div className="text-lg font-bold m-auto">
              <h2>Vi svarar så fort vi kan</h2>
            </div>
            <p className="p-5">
              Är det något ni funderar över som inte står på vår hemsida så är
              ni varmt välkommen att kontakta oss via telefon eller epost. Vi
              finns tillgängliga för att ni ska få bästa tänkbara service.
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
        {/* Form starts here */}
        <form onSubmit={handleSubmit} className="p-4 mt-5 xl:w-[50%]">
          <div className="flex flex-col mb-5">
            <label htmlFor="name" className="mb-2 font-bold">
              Namn
            </label>
            <input
              {...defaults("name", "", {
                placeholder: "",
                className: "p-2 border border-gray-300 rounded",
              })}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="email" className="mb-2 font-bold">
              Email
            </label>
            <input
              {...defaults("email", "", {
                type: "email",
                placeholder: "",
                className: "p-2 border border-gray-300 rounded",
              })}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="phone" className="mb-2 font-bold">
              Telefon
            </label>
            <input
              {...defaults("phone", "", {
                type: "tel",
                placeholder: "",
                className: "p-2 border border-gray-300 rounded",
              })}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="message" className="mb-2 font-bold">
              Meddelande
            </label>
            <textarea
              {...defaults("message", "", {
                rows: 4,
                placeholder: "",
                className: "p-2 border border-gray-300 rounded",
              })}
            ></textarea>
          </div>
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Skicka
          </button>
          {emailSent && (
            <p className="text-green-500 text-sm mt-2">
              <GiConfirmed /> Skickat
            </p>
          )}
          {emailError && (
            <p className="text-red-500 text-sm mt-2">
              <MdOutlineDisabledByDefault /> Inte skickat - något gick fel.
              Vänligen skicka ett manuellt mail till takmatotur@gmail.com. Tack
              för er förståelse.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
