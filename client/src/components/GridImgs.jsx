/* eslint-disable react/prop-types */
// gridImgs.jsx

import { useState } from "react";
import SkeletonLoader from "./SkeletonLoader";

const GridImgs = ({ src, alt, title, description, reverse }) => {
  const [loading, setLoading] = useState(true);

  return (
    <section
      className={`flex flex-col mb-14 md:mb-4 xl:mb-0 ${
        reverse ? "xl:flex-row-reverse" : "xl:flex-row"
      } xl:items-center xl:justify-between rounded-lg xl:rounded-none`}
    >
      <div className="w-full xl:w-[50%] rounded-lg xl:rounded-none">
        {loading && <SkeletonLoader height="100%" width="100%" />}
        <img
          className={`w-full rounded-lg xl:rounded-none transition-opacity duration-500 ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          src={src}
          alt={alt}
          onLoad={() => setLoading(false)}
          style={{ display: loading ? "none" : "block" }}
        />
      </div>
      <div className="w-full xl:w-[50%] p-4">
        <h3 className="mb-2 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] xl:text-[22px] font-semibold text-amber-700">
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default GridImgs;

// loading är ett state som börjar som true, vilket betyder att bilden håller på att laddas.
// När bilden har laddats klart (onLoad-händelsen), sätts loading till false.
// SkeletonLoader visas medan bilden laddas:
// Om loading är true (dvs. bilden laddas fortfarande), visas SkeletonLoader.
// När bilden är färdigladdad (loading är false), försvinner SkeletonLoader och bilden visas istället.
