import { useState, useEffect } from "react";

// import img
import map from "../img/contact/map.jpg";

// import icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.text();
      alert(data);
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <section className="section flex flex-col p-5 bg-red">
      <div className="p-5 mb-10 md:w-[80%] m-auto relative 3xl:w-[50%] lg:rounded-lg shadow-xl bg-white">
        <div className="hidden xl:flex xl:space-x-10 items-center p-5">
          <div className="flex-1 xl:order-1 text-center">
            <header className="text-2xl font-bold m-auto">
              <h1>Kontakta oss!</h1>
            </header>
            <p className="p-5">
              Är det någon ni funderar över som inte står på vår hemsida så är
              ni varmt välkommen att kontakta oss via telefon eller epost. Vi
              finns tillgängliga för att ni ska få bästa tänka bara service.
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
            <header className="text-2xl font-bold m-auto">
              <h1>Kontakta oss!</h1>
            </header>
            <p className="p-5">
              Är det någon ni funderar över som inte står på vår hemsida så är
              ni varmt välkommen att kontakta oss via telefon eller epost. Vi
              finns tillgängliga för att ni ska få bästa tänka bara service.
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
        {/* form börjar här  */}
        <form onSubmit={handleSubmit} className="p-5 mt-5 xl:w-[50%] ">
          <div className="flex flex-col mb-5">
            <label htmlFor="name" className="mb-2 font-bold">
              Namn
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="email" className="mb-2 font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="phone" className="mb-2 font-bold">
              Telefon
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="message" className="mb-2 font-bold">
              Meddelande
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Skicka
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
