import "../../App.css";
import VideoSection from "../LandingComponent";
import About from "./AboutPage";
import RandomCards from "./RandomizePage";
import Contact from "./ContactPage";

function Landing() {
  return (
    <div id="send_to_back">
      <VideoSection />
      <About />
      <RandomCards />
      <Contact />
    </div>
  );
}

export default Landing;
