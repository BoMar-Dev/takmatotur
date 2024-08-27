import { useState } from "react";

// import icons
import { IoClose } from "react-icons/io5";
import { MdOutlineDisabledByDefault } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";

// eslint-disable-next-line react/prop-types
const GeneralRunningForm = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    subject: "Måndagslöpning",
    peopleCount: "",
    date: "",
    message: "",
  });
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [dateError, setDateError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const today = new Date().toISOString().split("T")[0];

    if (formData.date < today) {
      setDateError("Datumet måste vara idag eller senare.");
      return;
    }

    setDateError(""); // Clear any previous date errors

    try {
      const response = await fetch("http://localhost:5000/coach", {
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
      className="bg-white p-5 rounded-lg shadow-lg w-[90%] max-w-md h-[70vh] max-h-[70vh] md:h-[70vh] md:max-h-[70vh] lg:h-[70vh] lg:max-h-[70vh] relative overflow-y-auto"
    >
      <button
        type="button"
        className="absolute top-2 left-2 p-2 text-3xl text-gray-700"
        onClick={closeForm}
      >
        <IoClose />
      </button>
      <h2 className="text-3xl font-bold text-center mt-8 p-4 mb-4">
        Dags att springa
      </h2>
      <div className="mb-4">
        <label className="block mb-2 font-bold">
          Företag <span className="text-sm text-gray-500">(frivilligt)</span>
        </label>
        <input
          type="text"
          name="company"
          className="w-full p-2 border border-gray-300 rounded"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold">Namn</label>
        <input
          type="text"
          name="name"
          className="w-full p-2 border border-gray-300 rounded"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Telefon</label>
        <input
          type="tel"
          name="phone"
          className="w-full p-2 border border-gray-300 rounded"
          required
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Email</label>
        <input
          type="email"
          name="email"
          className="w-full p-2 border border-gray-300 rounded"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Ämne</label>
        <select
          name="subject"
          className="w-full p-2 border border-gray-300 rounded"
          required
          value={formData.subject}
          onChange={handleChange}
        >
          <option value="Måndagslöpning">Måndagslöpning</option>
          <option value="Företagscoachning">Företagscoachning</option>
          <option value="Personlig coachning">Personlig coachning</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Antal personer</label>
        <input
          type="number"
          name="peopleCount"
          className="w-full p-2 border border-gray-300 rounded"
          required
          value={formData.peopleCount}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold">Önskat datum</label>
        <input
          type="date"
          name="date"
          className="w-full p-2 border border-gray-300 rounded"
          required
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      {dateError && <p className="text-red-500 text-sm mt-2">{dateError}</p>}
      <div className="mb-4">
        <label className="block mb-2 font-bold">
          Övriga information/önskemål/fokus/mål
        </label>
        <textarea
          name="message"
          className="w-full p-2 border border-gray-300 rounded"
          rows="4"
          value={formData.message}
          onChange={handleChange}
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

export default GeneralRunningForm;
