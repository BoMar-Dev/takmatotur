import { Link } from "react-router-dom";
import { useState } from "react";

import SkeletonLoader from "./SkeletonLoader";

// eslint-disable-next-line react/prop-types
const Card = ({ image, title, link, description }) => {
  const [loading, setLoading] = useState(true);

  return (
    <Link to={link} className="block h-full">
      <div className="bg-white flex flex-col p-5 shadow-lg rounded-lg h-full hover:scale-105 transform transition-transform duration-300">
        <div className="relative">
          {loading && <SkeletonLoader height="200px" width="100%" />}
          <img
            className={`rounded-md transition-opacity duration-500 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            src={image}
            alt={title}
            onLoad={() => setLoading(false)}
            style={{
              display: loading ? "none" : "block",
              transition: "opacity 1s ease-in-out",
            }}
          />
        </div>
        <div className="font-bold text-xl flex-grow mt-5 text-amber-700">
          {title}
        </div>
        <p className="text-[16px] mt-5">{description}</p>
      </div>
    </Link>
  );
};

export default Card;
