import React from "react";
import "../../App.css";
import NavBar from "../NavBarComponent";
import VideoSection from "../LandingComponent";
import About from "./AboutPage";
import RandomCards from "./RandomizePage";
import Contact from "./ContactPage";
import Footer from "../FooterComponent";

function Landing() {
  return (
    <div id="send_to_back">
      <NavBar />
      <VideoSection />
      <About />
      <RandomCards />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;
