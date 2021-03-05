import "../../App.css";
import VideoSection from "../LandingComponent";
import About from "./AboutPage";
import RandomCards from "./RandomizePage";
import Contact from "./ContactPage";

function Landing() {
  return (
    <>
      <VideoSection />
      <About />
      <RandomCards />
      <Contact />
    </>
  );
}

export default Landing;
