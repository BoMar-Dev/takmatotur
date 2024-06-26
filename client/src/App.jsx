// import components
import Header from "./components/Header";
import ARoutes from "./components/ARoutes";
import MobileNav from "./components/MobileNav";
import Social from "./components/Social";
import Footer from "./components/Footer";

// import router
import { BrowserRouter as Router } from "react-router-dom";

// import motion
import { motion } from "framer-motion";

function App() {
  return (
    <>
  <Router>
    <Header/>
  <ARoutes/>
  <Footer/>
  </Router>
    </>
  );
}

export default App;
