import { BrowserRouter as Router } from "react-router-dom";

// import components
import Header from "./components/Header";
import ARoutes from "./components/ARoutes";
import Footer from "./components/Footer";
//import SEO
import { HelmetProvider } from "react-helmet-async";
// import functions
import ScrollToTopSection from "./functions/ScrollToSection";
//import cookie banner

// import router
import CookieBanner from "./components/CookieBanner";

function App() {
  return (
    <>
      <HelmetProvider>
        <Router>
          <ScrollToTopSection />
          <Header />
          <ARoutes />
          <CookieBanner />
          <Footer />
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
