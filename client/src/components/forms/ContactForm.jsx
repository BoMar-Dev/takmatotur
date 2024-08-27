/* eslint-disable react/prop-types */

// import icons
import { GiConfirmed } from "react-icons/gi";
import { MdOutlineDisabledByDefault } from "react-icons/md";

const ContactForm = ({ handleSubmit, defaults, emailSent, emailError }) => (
  <form onSubmit={handleSubmit} className="p-4 mt-5 xl:w-[50%]">
    <div className="flex flex-col mb-5">
      <label htmlFor="name" className="mb-2 font-bold text-primary">
        Namn
      </label>
      <input
        id="name" // Ensure id matches the label's htmlFor
        {...defaults("name", "", {
          placeholder: "Ditt namn", // Optional: add placeholder for better UX
          className: "p-2 border border-gray-300 rounded",
        })}
      />
    </div>
    <div className="flex flex-col mb-5">
      <label htmlFor="email" className="mb-2 font-bold text-primary">
        Email
      </label>
      <input
        id="email" // Ensure id matches the label's htmlFor
        {...defaults("email", "", {
          type: "email",
          placeholder: "Din e-postadress", // Optional: add placeholder for better UX
          className: "p-2 border border-gray-300 rounded",
        })}
      />
    </div>
    <div className="flex flex-col mb-5">
      <label htmlFor="phone" className="mb-2 font-bold text-primary">
        Telefon
      </label>
      <input
        id="phone"
        {...defaults("phone", "", {
          type: "tel",
          placeholder: "Ditt telefonnummer",
          className: "p-2 border border-gray-300 rounded",
        })}
      />
    </div>
    <div className="flex flex-col mb-5">
      <label htmlFor="message" className="mb-2 font-bold text-primary">
        Meddelande
      </label>
      <textarea
        id="message"
        {...defaults("message", "", {
          rows: 4,
          placeholder: "Ditt meddelande",
          className: "p-2 border border-gray-300 rounded",
        })}
      ></textarea>
    </div>
    <button
      type="submit"
      className="p-2 bg-blue-500 text-white rounded hover:bg-opacity-90 transition-opacity duration-300"
    >
      Skicka
    </button>
    {emailSent && (
      <p className="text-green-500 text-sm mt-2 flex items-center">
        <GiConfirmed className="mr-2" /> Skickat
      </p>
    )}
    {emailError && (
      <p className="text-red-500 text-[12px] mt-2 flex flex-col items-center w-[80%] m-auto">
        <MdOutlineDisabledByDefault className="mr-2 text-xl" />
        Inte skickat - något gick fel. Vänligen skicka ett manuellt mail till
        takmatotur@gmail.com. Tack för er förståelse.
      </p>
    )}
  </form>
);

export default ContactForm;
