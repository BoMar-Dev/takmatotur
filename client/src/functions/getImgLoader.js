export const getImgLoader = async (pathname) => {
  switch (pathname) {
    case "/":
      return {
        lowQualityImg: await import("../img/header/low.landing.webp"),
        highQualityImg: await import("../img/header/landing.webp"),
      };
    case "/om":
      return {
        lowQualityImg: await import("../img/header/low.about.webp"),
        highQualityImg: await import("../img/header/about.webp"),
      };
    case "/kontakt":
      return {
        lowQualityImg: await import("../img/contact/low.contactHeader.webp"),
        highQualityImg: await import("../img/contact/contactHeader.webp"),
      };
    case "/coach":
    case "/coach/foretag":
    case "/coach/mandagslopning":
    case "/coach/personlig":
      return {
        lowQualityImg: await import("../img/coach/low.coachHeader.webp"),
        highQualityImg: await import("../img/coach/coachHeader.webp"),
      };
    case "/trailcamp":
      return {
        lowQualityImg: await import("../img/trailcamp/low.campHeader.webp"),
        highQualityImg: await import("../img/trailcamp/campHeader.webp"),
      };
    case "/topptur":
    case "/topptur/vinter":
    case "/topptur/sommar":
      return {
        lowQualityImg: await import("../img/tour/low.tourHeader.webp"),
        highQualityImg: await import("../img/tour/tourHeader.webp"),
      };
    case "/boende":
      return {
        lowQualityImg: await import("../img/accommodation/low.accoHeader.webp"),
        highQualityImg: await import("../img/accommodation/accoHeader.webp"),
      };
    default:
      return {
        lowQualityImg: await import("../img/header/low.landing.webp"),
        highQualityImg: await import("../img/header/landing.webp"),
      };
  }
};
