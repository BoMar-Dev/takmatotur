/* eslint-disable react/prop-types */
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
// import icons
import { MdOutlineDisabledByDefault } from "react-icons/md";

const ContactForm = ({ handleSubmit, defaults, emailSent, emailError }) => {
  const [capVal, setCapVal] = useState(null);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCaptchaChange = (val) => {
    setCapVal(val);
    setTimeout(() => {
      setIsCaptchaVerified(true);
    }, 1000); // Add a 1-second delay before enabling the submit button
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await handleSubmit(e);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleFormSubmit} className="xl:w-[50%] mt-10">
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
          isSubmitting
            ? "bg-yellow-500 cursor-wait"
            : emailSent
            ? "bg-green-500"
            : emailError
            ? "bg-red-500 hover:bg-red-600 active:bg-red-700 active:scale-95 active:shadow-lg"
            : isCaptchaVerified
            ? "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 active:scale-95 active:shadow-lg"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!isCaptchaVerified || isSubmitting}
      >
        {isSubmitting
          ? "Skickar..."
          : emailSent
          ? "Skickat"
          : emailError
          ? "Ej skickad"
          : "Skicka"}
      </button>

      {/* Will popup if there's an email error */}
      {emailError && (
        <p className="text-red-500 text-[12px] mt-2 flex flex-col items-center w-[80%] m-auto">
          <MdOutlineDisabledByDefault className="mr-2 text-xl" />
          Vänligen skicka ett manuellt mail till
          <br />
          takmatotur@gmail.com
        </p>
      )}
    </form>
  );
};

export default ContactForm;

// //How It Fits Together:
// Parent (Contact) Component:

// Contains the actual handleSubmit function that processes form data and communicates with the backend.
// Passes this handleSubmit function to the ContactForm as a prop.
// Child (ContactForm) Component:

// Uses handleFormSubmit as the event handler for the form's onSubmit event.
// Manages the form's UI state (like disabling the submit button and showing a loading state) during the submission process.
// Calls the parent's handleSubmit function to actually handle the form data.
