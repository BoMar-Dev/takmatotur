// Import pages
import Home from "../pages/Home";
import About from "../pages/About";
import Tour from "../pages/Tour";
import Coach from "../pages/Coach";
import TrailCamp from "../pages/TrailCamp";
import Accommodation from "../pages/Accommodation";
import Contact from "../pages/Contact";
// Import Sub Pages
import ForetagsCoach from "../pages/ForetagsCoach";
import PersonligCoach from "../pages/PersonligCoach";
import MandagsLopning from "../pages/MandagsLopning";
import TourWinter from "../pages/TourWinter";
import TourSummer from "../pages/TourSummer";

// Import routes, route and useLocation
import { Routes, Route } from "react-router-dom";

const ARoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/om" element={<About />} />
      <Route path="/topptur" element={<Tour />} />
      <Route path="/topptur/sommar" element={<TourSummer />} />
      <Route path="/topptur/vinter" element={<TourWinter />} />
      <Route path="/coach" element={<Coach />} />
      <Route path="/coach/foretag" element={<ForetagsCoach />} />
      <Route path="/coach/personlig" element={<PersonligCoach />} />
      <Route path="/coach/mandagslopning" element={<MandagsLopning />} />
      <Route path="/trailcamp" element={<TrailCamp />} />
      <Route path="/kontakt" element={<Contact />} />
      <Route path="/boende" element={<Accommodation />} />
    </Routes>
  );
};

export default ARoutes;
