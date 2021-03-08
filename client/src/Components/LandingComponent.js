import React from "react";
// import "./App.css";
// import { Button } from "react-bootstrap";
import "./LandingComponent.css";

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
    </div>
  );
}

export default VideoSection;
