// preLoad.js
export const preloadImagesForPath = (pathname) => {
  let imagesToPreload = [];

  switch (pathname) {
    case "/":
      imagesToPreload.push("../img/header/landing.webp");
      break;
    case "/om":
      imagesToPreload.push("../img/header/about.webp");
      break;
    case "/kontakt":
      imagesToPreload.push("../img/contact/contactHeader.webp");
      break;
    case "/coach":
    case "/coach/foretag":
    case "/coach/mandagslopning":
    case "/coach/personlig":
      imagesToPreload.push("../img/coach/coachHeader.webp");
      break;
    case "/trailcamp":
      imagesToPreload.push("../img/trailcamp/campHeader.webp");
      break;
    case "/topptur":
    case "/topptur/vinter":
    case "/topptur/sommar":
      imagesToPreload.push("../img/tour/tourHeader.webp");
      break;
    case "/boende":
      imagesToPreload.push("../img/accommodation/accoHeader.webp");
      break;
    default:
      imagesToPreload.push("../img/header/landing.webp");
      break;
  }

  imagesToPreload.forEach((image) => {
    const img = new Image();
    img.src = image;
  });
};
