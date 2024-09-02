import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPolicyVisible, setIsPolicyVisible] = useState(false);

  useEffect(() => {
    const consent = getCookie("cookiesAccepted");
    if (consent === "true" || consent === "necessary") {
      setIsVisible(false); // Dölj bannern om användaren redan har valt
      if (consent === "true") {
        loadGoogleAnalytics(); // Ladda Google Analytics om användaren har accepterat
      }
    }
  }, []);

  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  };

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  const loadGoogleAnalytics = () => {
    console.log("Google Analytics har aktiverats");
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-B4TB5R75M4";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-B4TB5R75M4");
    };
  };

  const handleAccept = () => {
    setCookie("cookiesAccepted", "true", 365); // Spara valet i en cookie i 1 år
    loadGoogleAnalytics(); // Ladda och initiera Google Analytics när användaren accepterar
    setIsVisible(false); // Dölj bannern efter godkännande
  };

  const handleNecessary = () => {
    setCookie("cookiesAccepted", "necessary", 365); // Spara valet i en cookie i 1 år
    setIsVisible(false); // Dölj bannern efter att endast nödvändiga cookies har valts
  };

  const togglePolicy = () => {
    setIsPolicyVisible(!isPolicyVisible);
  };

  if (!isVisible) {
    return null; // Rendera inte bannern om den inte ska vara synlig
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[3000] bg-slate-300 text-black p-4 border-t border-gray-300">
      <div className="w-full max-w-md p-2 mx-auto flex flex-col items-center space-y-4">
        <p className="text-center text-gray-800">
          Tak Mat o Tur använder cookies för att samla statistik om besökare och
          vilka sidor de interagerat med. Läs mer i vår{" "}
          <button
            onClick={togglePolicy}
            className="underline text-blue-600 focus:outline-none"
          >
            cookiepolicy
          </button>
          .
        </p>

        {isPolicyVisible && (
          <div className="w-full max-h-[50vh] overflow-y-auto bg-gray-100 p-4 rounded-md shadow-md">
            <h2 className="text-lg font-semibold">Cookiepolicy</h2>
            <p>
              Tak Mat o Tur använder vi cookies för att förbättra din upplevelse
              och för att samla in anonym besöksstatistik via Google Analytics.
              Cookies hjälper oss att förstå hur vår webbplats används så att vi
              kan förbättra den över tid.
            </p>

            <h3 className="text-md font-semibold mt-2">
              Vad innebär ditt val?
            </h3>
            <p>
              Om du{" "}
              <strong className="text-blue-600">
                "Accepterar alla cookies"
              </strong>{" "}
              kommer vi att lagra en cookie på din enhet som indikerar att du
              har godkänt användningen av Google Analytics, och vi kommer att
              samla in anonym statistik om hur du använder vår webbplats.
            </p>
            <p className="mt-5">
              Om du väljer{" "}
              <strong className="text-blue-600">"Endast nödvändiga"</strong>{" "}
              kommer vi endast att lagra en cookie som sparar ditt val, så att
              du inte behöver ange dessa vid varje återkommande besök, och ingen
              besöksstatistik kommer att samlas in.
            </p>

            <h3 className="text-md font-semibold mt-7">Besöksstatistik</h3>
            <p>
              Dessa cookies används för att samla statistik om besökare, vilka
              sidor de besöker och vad de gör på webbplatsen.
            </p>
            <ul className="list-disc list-inside">
              <li>
                <strong>Namn:</strong> _ga_.*
              </li>
              <li>
                <strong>Ändamål:</strong> Används för att spara och följa besök
                på webbplatser.
              </li>
              <li>
                <strong>Policy:</strong>{" "}
                <a href="" target="_blank" className="underline text-blue-600">
                  Länk till policy
                </a>{" "}
                (policies.google.com)
              </li>
              <li>
                <strong>Tas bort efter:</strong> 1 år, 11 månader
              </li>
              <li>
                <strong>Domän:</strong> .takmatotur.se
              </li>
            </ul>

            <h3 className="text-md font-semibold mt-5">Kontakt</h3>
            <p>
              Om du har några frågor om vår användning av cookies eller om du
              vill ändra ditt val, vänligen kontakta oss på{" "}
              <a
                href="&#116;&#97;&#107;&#109;&#97;&#116;&#111;&#116;&#117;&#114;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
                className="underline text-blue-600"
              >
                &#116;&#97;&#107;&#109;&#97;&#116;&#111;&#116;&#117;&#114;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
              </a>
              .
            </p>
            <button
              onClick={togglePolicy}
              className="mt-4 underline text-blue-600 focus:outline-none mb-5"
            >
              Stäng policy
            </button>
          </div>
        )}

        <div className="flex flex-col space-y-2 w-[90%] md:flex-row md:space-y-0 md:space-x-2">
          <button
            onClick={handleAccept}
            className="relative flex h-[50px] w-full items-center justify-center overflow-hidden bg-blue-700 text-white shadow-2xl transition-all rounded-md hover:bg-blue-800"
          >
            <span className="relative z-10">Acceptera alla</span>
          </button>
          <button
            onClick={handleNecessary}
            className="relative flex h-[50px] w-full items-center justify-center overflow-hidden bg-white border border-blue-700 text-blue-700 shadow-2xl transition-all rounded-md hover:bg-blue-100 whitespace-nowrap"
          >
            <span className="relative z-10">Endast nödvändiga</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
