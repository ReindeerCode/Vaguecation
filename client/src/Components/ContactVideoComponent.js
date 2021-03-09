import React from "react";
import "./VideoSection.css";

function ContactVideoSection() {
  return (
    <div className="video-container">
      <video src="/contactVid.mp4" autoPlay loop muted />

      <img
        src="/logo.png"
        width="auto"
        height="auto"
        className="d-inline-block align-top"
        alt="Vaguecation Logo"
      />
    </div>
  );
}

export default ContactVideoSection;
