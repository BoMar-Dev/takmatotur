import { useState, useEffect } from "react";
import { useFormDefaults } from "../functions/useFormDefaults";

// import img
import map from "../img/contact/map.jpg";
import backgroundImg from "../img/about/background.svg";

// import components
import ContactForm from "../components/forms/ContactForm";
import SEOHelmet from "../components/SEOHelment";
import SkeletonLoader from "../components/SkeletonLoader";

import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  const { defaults, formData } = useFormDefaults({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state for the map image

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://takmatotur.onrender.com/kontakt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.text();

      if (response.ok) {
        console.log("Server response:", data);
        setEmailSent(true);
        setEmailError(false);
      } else {
        console.log("Error response from server:", data);
        setEmailSent(false);
        setEmailError(true);
      }
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      setEmailSent(false);
      setEmailError(true);
    }
  };

  return (
    <>
      <SEOHelmet
        title="Kontakta oss | Tak Mat o Tur i Duved"
        description="Kontakta oss på Tak Mat o Tur i Duved. Vi finns här för att svara på alla dina frågor och ge dig bästa möjliga service."
        keywords="kontakt, Tak Mat o Tur, Duved, Åre, Jämtland, telefon, e-post, karta, boende, ring, maila, takmatotur"
        url="http://takmatotur.se/kontakt"
        image={map}
      />

      <section className="section flex flex-col p-5 mb-10 relative">
        <div
          className="absolute top-[-400px] left-[-100px] w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "120%",
            backgroundRepeat: "repeat-x",
            opacity: 0.05,
            zIndex: -1,
            transform: "translateX(-20%) translateY(20%)",
          }}
        ></div>

        <header className="text-center mb-5">
          <h1 className="font-bold ">Kontakta oss</h1>
        </header>

        <div className="p-3 mb-10 w-full max-w-[100%] lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[80%] 3xl:w-[40%] m-auto relative lg:rounded-lg">
          <div className="hidden xl:flex xl:space-x-10 p-5">
            <div className="flex-1 xl:order-1 text-center">
              <div className="text-lg font-bold text-amber-700 m-auto">
                <h2>Vi svarar så fort vi kan</h2>
              </div>
              <p className="p-3 text-primary">
                Är det något ni funderar över som inte står på vår hemsida så är
                ni varmt välkommen att kontakta oss via telefon eller epost. Vi
                finns tillgängliga för att ni ska få bästa tänkbara service.
              </p>
              <div className="flex flex-col font-bold text-primary p-5 mb-5">
                <div className="flex items-center space-x-2">
                  <BsFillTelephoneFill />
                  <h2>&#48;&#55;&#48;&#55;&#53;&#56;&#50;&#54;&#48;&#54;</h2>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <IoMdMail />
                  <h2>
                    &#116;&#97;&#107;&#109;&#97;&#116;&#111;&#116;&#117;&#114;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex-1 xl:order-2">
              {loading && <SkeletonLoader height="100%" width="100%" />}
              <a
                href="https://www.google.com/maps/place/Tegebacken+5,+837+71+Duved,+Sweden"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visa karta till Tak Mat O Tur på Google Maps"
              >
                <img
                  className={`rounded-lg shadow-xl w-full cursor-pointer ${
                    loading ? "opacity-0" : "opacity-100 ease-in-out"
                  }`}
                  src={map}
                  alt="Karta till Tak Mat O Tur"
                  onLoad={() => setLoading(false)}
                />
              </a>
            </div>
          </div>

          {/* // smaller than xl */}
          <div className="xl:hidden">
            <div className="text-container text-center">
              <div className="text-lg font-bold  m-auto text-amber-700">
                <h2>Vi svarar så fort vi kan</h2>
              </div>
              <p className="p-2  text-primary">
                Är det något ni funderar över som inte står på vår hemsida så är
                ni varmt välkommen att kontakta oss via telefon eller epost. Vi
                finns tillgängliga för att ni ska få bästa tänkbara service.
              </p>
              <div className="flex flex-col font-bold text-primary p-5 mb-5">
                <div className="flex items-center space-x-2">
                  <BsFillTelephoneFill />
                  <h2>&#48;&#55;&#48;&#55;&#53;&#56;&#50;&#54;&#48;&#54;</h2>
                </div>
                <div className="flex items-center space-x-2 mt-2">
                  <IoMdMail />
                  <h2>
                    {" "}
                    &#116;&#97;&#107;&#109;&#97;&#116;&#111;&#116;&#117;&#114;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
                  </h2>
                </div>
              </div>
            </div>
            {loading && <SkeletonLoader height="300px" width="100%" />}
            <a
              href="https://www.google.com/maps/place/Tegebacken+5,+837+71+Duved,+Sweden"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visa karta till Tak Mat O Tur på Google Maps"
            >
              <img
                className={`rounded-lg shadow-xl w-full cursor-pointer mt-10 ${
                  loading ? "opacity-0" : "opacity-100"
                }`}
                src={map}
                alt="Karta till Tak Mat O Tur"
                onLoad={() => setLoading(false)}
              />
            </a>
          </div>

          {/* Use ContactForm component here */}
          <ContactForm
            handleSubmit={handleSubmit}
            defaults={defaults}
            emailSent={emailSent}
            emailError={emailError}
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
