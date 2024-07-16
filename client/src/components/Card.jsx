import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ image, title, link, description }) => {
  return (
    <div className="bg-white flex flex-col p-5 shadow-xl rounded-lg flex-grow mb-12 hover:scale-105 transform transition-transform duration-300">
      <img className="rounded-md" src={image} alt={title} />
      <Link to={link} className="mt-2 font-bold text-xl flex-grow">
        {title}
      </Link>
      <p className="text-[16px] mt-5 md:w-[80%]">{description}</p>
    </div>
  );
};

export default Card;
