import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ image, title, link, description }) => {
  return (
    <div className="bg-white flex flex-col p-5 w-full md:w-[80%] lg:w-[50%] md:m-auto shadow-xl mt-10 mb-10 rounded-lg flex-grow">
      <img className="rounded-md" src={image} alt={title} />
      <Link to={link}>
        <h2 className="text-xl mt-2 font-medium">{title}</h2>
      </Link>
      <p className="text-[16px] mt-5">{description}</p>
    </div>
  );
};

export default Card;
