/* eslint-disable react/prop-types */
// gridImgs.jsx

const GridImgs = ({ src, alt, title, description, reverse }) => (
  <section
    className={`flex flex-col  mb-14 md:mb-4 xl:mb-0 ${
      reverse ? "xl:flex-row-reverse" : "xl:flex-row"
    } xl:items-center xl:justify-between rounded-lg xl:rounded-none`}
  >
    <img
      className="w-full xl:w-[50%] rounded-lg xl:rounded-none"
      src={src}
      alt={alt}
    />
    <div className="w-full xl:w-[50%] p-4">
      <h3 className="mb-2 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[22px] xl:text-[22px] font-semibold text-amber-700">
        {title}
      </h3>
      <p>{description}</p>
    </div>
  </section>
);

export default GridImgs;
