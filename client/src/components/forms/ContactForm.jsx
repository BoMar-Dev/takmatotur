/* eslint-disable react/prop-types */
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
// import icons
import { GiConfirmed } from "react-icons/gi";
import { MdOutlineDisabledByDefault } from "react-icons/md";

const ContactForm = ({ handleSubmit, defaults, emailSent, emailError }) => {
  const [capVal, setCapVal] = useState(null);

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 mt-5 w-full max-w-full xl:max-w-[50%] mx-auto" // Ensure it scales on mobile
    >
      {/* Input fields */}
      <div className="flex flex-col mb-5">
        <label htmlFor="name" className="mb-2 font-bold text-primary">
          Namn
        </label>
        <input
          id="name"
          {...defaults("name", "", {
            placeholder: "Ditt namn",
            className: "p-2 border border-gray-300 rounded",
          })}
        />
      </div>
      {/* ... other fields ... */}

      <ReCAPTCHA
        sitekey="6LcdrzIqAAAAAIC23Ad4rAiN-Qi2vkIdVaH70UOi"
        onChange={(val) => setCapVal(val)}
        className="mb-3"
      />

      <button
        type="submit"
        className={`p-2 text-white rounded transform transition-all duration-150 ease-in-out ${
          capVal
            ? "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 active:scale-95 active:shadow-lg"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!capVal}
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
};

export default ContactForm;
