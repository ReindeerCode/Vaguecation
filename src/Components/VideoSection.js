import React from "react";
// import "./App.css";
import { Button } from "react-bootstrap";
import "./VideoSection.css";

function VideoSection() {
  return (
    <div className="video-container" id="home">
      <video src="/landingVid.mp4" autoPlay loop muted />

      <img
        id="logo"
        src="/logo.png"
        className="d-inline-block align-top"
        alt="Vaguecation Logo"
      />
      <h1>Where will life take you?</h1>
      <div className="video-btns">
        <Button id="videoBTN" variant="primary" size="lg">
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default VideoSection;
