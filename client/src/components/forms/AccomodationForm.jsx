import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

// import icons
import { IoClose } from "react-icons/io5";
import { useFormDefaults } from "../../functions/useFormDefaults";
import { MdOutlineDisabledByDefault } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";

// eslint-disable-next-line react/prop-types
const AccomodationForm = ({ closeForm }) => {
  const { defaults, formData } = useFormDefaults({
    company: "",
    name: "",
    phone: "",
    email: "",
    subject: "Lägenhet",
    peopleCount: "",
    message: "",
    dateFrom: "",
    dateTo: "",
  });

  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [dateError, setDateError] = useState("");
  const [capVal, setCapVal] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const today = new Date().toISOString().split("T")[0];

    if (formData.dateFrom < today || formData.dateTo < today) {
      setDateError("Datumet måste vara idag eller senare.");
      return;
    }

    setDateError(""); // Clear any previous date errors

    try {
      const response = await fetch("https://takmatotur.onrender.com/boende", {
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
    <form
      onSubmit={handleSubmit}
      className="bg-white p-5  mb-10  rounded-lg shadow-lg w-[90%] max-w-md h-[70vh] max-h-[60vh] md:h-[70vh] md:max-h-[70vh] lg:h-[70vh] lg:max-h-[70vh] relative overflow-y-auto"
    >
      <button
        className="absolute top-2 left-2 p-2 text-3xl text-gray-700"
        onClick={closeForm}
      >
        <IoClose />
      </button>
      <h2 className="text-3xl font-bold text-center mt-8 p-4 mb-4">
        Bokningsförfrågan
      </h2>
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
          {...defaults("subject", "", { type: "select", placeholder: "" })}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="Lägenhet">Lägenhet</option>
          <option value="Större sällskap">Större sällskap</option>
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
        <label className="block mb-2 font-bold">Önskat datum FRÅN</label>
        <input
          {...defaults("dateFrom", "", { type: "date", placeholder: "" })}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Önskat datum TILL</label>
        <input
          {...defaults("dateTo", "", { type: "date", placeholder: "" })}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      {dateError && <p className="text-red-500 text-sm mt-2">{dateError}</p>}
      <div className="mb-4">
        <label className="block mb-2 font-bold">
          Övrig information så som utrustning eller annat vi behöver veta
        </label>
        <textarea
          {...defaults("message", "", {
            type: "textarea",
            rows: 4,
            placeholder: "",
          })}
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
      </div>
      <ReCAPTCHA
        sitekey="6LcdrzIqAAAAAIC23Ad4rAiN-Qi2vkIdVaH70UOi"
        onChange={(val) => setCapVal(val)}
        className="mb-3"
      ></ReCAPTCHA>

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

export default AccomodationForm;
