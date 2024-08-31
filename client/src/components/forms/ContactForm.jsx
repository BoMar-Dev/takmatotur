/* eslint-disable react/prop-types */
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
// import icons
import { GiConfirmed } from "react-icons/gi";
import { MdOutlineDisabledByDefault } from "react-icons/md";

const ContactForm = ({ handleSubmit, defaults, emailSent, emailError }) => {
  const [capVal, setCapVal] = useState(null);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleCaptchaChange = (val) => {
    setCapVal(val);
    setTimeout(() => {
      setIsCaptchaVerified(true);
    }, 1200); // Add a 1.2 second delay before enabling the submit button
  };

  return (
    <form onSubmit={handleSubmit} className=" xl:w-[50%] mt-10">
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
      <div className="flex flex-col mb-5">
        <label htmlFor="email" className="mb-2 font-bold text-primary">
          Email
        </label>
        <input
          id="email"
          {...defaults("email", "", {
            type: "email",
            placeholder: "Din e-postadress",
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

      <div className="max-w-xs mx-auto">
        <ReCAPTCHA
          sitekey="6LcdrzIqAAAAAIC23Ad4rAiN-Qi2vkIdVaH70UOi"
          onChange={handleCaptchaChange}
          className="g-recaptcha"
          style={{
            transform: "scale(0.77)",
            WebkitTransform: "scale(0.77)",
            transformOrigin: "0 0",
            WebkitTransformOrigin: "0 0",
          }}
        />
      </div>

      <button
        type="submit"
        className={`p-2 text-white rounded transform transition-all duration-150 ease-in-out ${
          isCaptchaVerified
            ? "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 active:scale-95 active:shadow-lg"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!isCaptchaVerified}
      >
        Skicka
      </button>

      {/* Will popup if email was succesfully sent */}
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
