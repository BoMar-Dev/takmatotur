
// import pages 
import Home from "../pages/Home"
import About from "../pages/About"
import Tour from "../pages/Tour"
import Coach from "../pages/Coach"
import TrailCamp from "../pages/TrailCamp"
import Contact from "../pages/Contact"
import Accommodation from "../pages/Accommodation"

// import routes route and useLocation
import {Routes, Route,  useLocation} from "react-router-dom"

const ARoutes = () => {
  return (
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/om" element={<About/>} />
    <Route path="/topptur" element={<Tour/>} />
    <Route path="/coach" element={<Coach/>} />
    <Route path="/trailcamp" element={<TrailCamp/>} />
    <Route path="/kontakt" element={<Contact/>} />
    <Route path="/boende" element={<Accommodation/>} />
  </Routes>
 );
  
}
export default ARoutes