/* eslint-disable react/prop-types */
const SkeletonLoader = ({ height, width }) => (
  <div
    className="animate-pulse bg-gray-200"
    style={{ height: height, width: width }}
  ></div>
);

export default SkeletonLoader;
