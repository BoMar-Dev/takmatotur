export const getImgLoader = async (pathname) => {
  switch (pathname) {
    case "/":
      return import("./img/header/landing.webp");
    case "/om":
      return import("./img/header/about.webp");
    case "/kontakt":
      return import("./img/contact/contactHeader.webp");
    case "/coach":
    case "/coach/foretag":
    case "/coach/mandagslopning":
    case "/coach/personlig":
      return import("./img/coach/coachHeader.webp");
    case "/trailcamp":
      return import("./img/trailcamp/campHeader.webp");
    case "/topptur":
    case "/topptur/vinter":
    case "/topptur/sommar":
      return import("./img/tour/tourHeader.webp");
    case "/boende":
      return import("./img/accommodation/accoHeader.webp");
    default:
      return import("./img/header/landing.webp");
  }
};
