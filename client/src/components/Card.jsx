import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ image, title, link, description }) => {
  return (
    <Link to={link} className="block h-full">
      <div className="bg-white flex flex-col p-5 shadow-xl rounded-lg h-full hover:scale-105 transform transition-transform duration-300">
        <img className="rounded-md" src={image} alt={title} />
        <div className=" font-bold text-xl flex-grow mt-5">{title}</div>
        <p className="text-[16px] mt-5">{description}</p>
      </div>
    </Link>
  );
};

export default Card;
