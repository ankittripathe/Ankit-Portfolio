import { BrowserRouter } from "react-router-dom";

import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Contact,
  Feedbacks,
  StarsCanvas,
  // Footer,
} from "./components";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          {/* <StarsCanvas /> */}
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
