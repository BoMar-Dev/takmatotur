//This form is used to get an offer when on the "Företagscoachning" page

//Import icons
import { IoClose } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const OfferForm = ({ closeForm }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg w-[90%] max-w-md h-[450px] md:h-[550px] lg:h-[600px] relative overflow-y-auto">
      <button
        className="absolute top-2 left-2 p-2 text-3xl text-gray-700"
        onClick={closeForm}
      >
        <IoClose />
      </button>
      <h2 className="text-3xl font-bold text-center p-4 mb-4">Få en offert</h2>
      <form>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Företagsnamn</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Kontaktperson</label>
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
          <label className="block mb-2 font-bold">Antal personer</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-bold">
            Övriga information/önskemål/fokus/mål
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

export default OfferForm;
