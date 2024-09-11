import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useFormDefaults } from "../../functions/useFormDefaults";
import { MdOutlineDisabledByDefault } from "react-icons/md";
import ReCAPTCHA from "react-google-recaptcha";

// eslint-disable-next-line react/prop-types
const BookingForm = ({ closeForm }) => {
  const { defaults, formData } = useFormDefaults({
    name: "",
    phone: "",
    email: "",
    subject: "Sommar",
    peopleCount: "",
    date: "",
    message: "",
  });

  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [dateError, setDateError] = useState("");
  const [capVal, setCapVal] = useState(null);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // breaking out the time from the date object
    const today = new Date().toISOString().split("T")[0];

    if (formData.date < today) {
      setDateError("Datumet måste vara idag eller senare.");
      return;
    }

    setDateError(""); // Clear any previous date errors
    setIsSubmitting(true); // Indicate form submission is in progress

    try {
      const response = await fetch("https://takmatotur.onrender.com/topptur", {
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
        setTimeout(() => {
          closeForm(); // coming as a callbackfunction from the parent
        }, 1800);
      } else {
        console.log("Error response from server:", data);
        setEmailSent(false);
        setEmailError(true);
      }
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      setEmailSent(false);
      setEmailError(true);
    } finally {
      setIsSubmitting(false); // Reset the submitting state
    }
  };

  const handleCaptchaChange = (val) => {
    setCapVal(val);
    setTimeout(() => {
      setIsCaptchaVerified(true);
    }, 1200); // Add a 1.2 second delay before enabling the submit button
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-5 mb-10  rounded-lg shadow-lg w-[90%] max-w-md h-[70vh] max-h-[60vh] md:h-[70vh] md:max-h-[70vh] lg:h-[70vh] lg:max-h-[70vh] relative overflow-y-auto"
    >
      <button
        className="absolute top-2 left-2 p-2 text-3xl text-gray-700"
        onClick={closeForm}
      >
        <IoClose />
      </button>
      <h2 className="text-3xl font-bold mt-10 p-2 mb-4">Bokningsförfrågan</h2>

      <div className="mb-4">
        <label className="block mb-2 font-bold">Namn</label>
        <input
          {...defaults("name", "", { placeholder: "" })}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Telefon</label>
        <input
          {...defaults("phone", "", { type: "tel", placeholder: "" })}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Email</label>
        <input
          {...defaults("email", "", { type: "email", placeholder: "" })}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Ämne</label>
        <select
          {...defaults("subject", "", { placeholder: "" })}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="Sommar"> Sommar / Höst / Vår</option>
          <option value="Vinter">Vinter</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Antal personer</label>
        <input
          {...defaults("peopleCount", "", { type: "number", placeholder: "" })}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Önskat datum</label>
        <input
          {...defaults("date", "", { type: "date", placeholder: "" })}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      {dateError && <p className="text-red-500 text-sm mt-2">{dateError}</p>}
      <div className="mb-4">
        <label className="block mb-2 font-bold">
          Övrig information så som utrustning eller annat vi behöver veta
        </label>
        <textarea
          {...defaults("message", "", { rows: 4, placeholder: "" })}
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
      </div>

      <div className="max-w-xs mx-auto mb-3">
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

export default BookingForm;
