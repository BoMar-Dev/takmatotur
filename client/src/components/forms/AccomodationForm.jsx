// This form is used when booking Accomodation on the "Boende" page

//Import icons
import { IoClose } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const AccomodationForm = ({ closeForm }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg w-[90%] max-w-md h-[450px] md:h-[550px] lg:h-[600px] relative overflow-y-auto">
      <button
        className="absolute top-2 left-2 p-2 text-3xl text-gray-700"
        onClick={closeForm}
      >
        <IoClose />
      </button>
      <h2 className="text-3xl font-bold text-center mt-8 p-4 mb-4">
        Bokningsförfrågan
      </h2>
      <form>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Namn</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Telefon</label>
          <input
            type="tel"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Ämne</label>
          <select className="w-full p-2 border border-gray-300 rounded">
            <option value="Sommar">Lägenhet</option>
            <option value="Vinter">Större sällskap</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Antal personer</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Önskat datum FRÅN</label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Önskat datum TILL</label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">
            Övrig information så som utrustning eller annat vi behöver veta
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Skicka
        </button>
      </form>
    </div>
  );
};

export default AccomodationForm;
