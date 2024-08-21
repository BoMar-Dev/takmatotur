import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useFormDefaults } from "../../useFormDefaults";
import { MdOutlineDisabledByDefault } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/topptur", {
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
      className="bg-white p-5 rounded-lg shadow-lg w-[90%] max-w-md h-[450px] md:h-[550px] lg:h-[600px] relative overflow-y-auto"
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
      <div className="mb-4">
        <label className="block mb-2 font-bold">
          Övrig information så som utrustning eller annat vi behöver veta
        </label>
        <textarea
          {...defaults("message", "", { rows: 4, placeholder: "" })}
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
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

export default BookingForm;
