/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";

const SEOHelmet = ({ title, description, keywords, url, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Tak Mat o Tur" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEOHelmet;
