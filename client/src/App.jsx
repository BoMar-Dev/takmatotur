// import components
import Header from "./components/Header";
import ARoutes from "./components/ARoutes";
import Footer from "./components/Footer";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTopSection from "./functions/ScrollToSection";

// import router
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <HelmetProvider>
        <Router>
          <ScrollToTopSection />
          <Header />
          <ARoutes />
          <Footer />
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
