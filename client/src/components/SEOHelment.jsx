/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";

const SEOHelmet = ({ title, description, keywords, url, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Tak Mat O Tur",
          url: url,
          logo: image,
          sameAs: [
            "https://www.instagram.com/tak_mat_o_tur?igsh=dmlvaWVwc3EzdHR2",
            "https://www.facebook.com/profile.php?id=61558195943539",
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEOHelmet;
