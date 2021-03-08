import React from "react";
import rock_travel from "../../assets/rock_travel.jpg";
import color_travel from "../../assets/color_tunnel.jpg";
import waterfall from "../../assets/waterfall.jpg";
import drive from "../../assets/drive.jpg";
import "./AboutPage.css";
// import { Container, Row, Col } from "react-bootstrap";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

function rockTravelImg() {
  return (
    <div>
      <img
        src={rock_travel}
        style={{ maxWidth: "100%", maxHeight: "100%", marginTop: "75%" }}
        alt="rock and escalator"
      />
    </div>
  );
}

function colorTravelImg() {
  return (
    <div>
      <img
        src={color_travel}
        style={{ maxWidth: "100%", maxHeight: "100%", marginTop: "20rem" }}
        alt="colorful tunnel"
      />
    </div>
  );
}

function waterfallTravelImg() {
  return (
    <div>
      <img
        src={waterfall}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
        alt="waterfall"
      />
    </div>
  );
}

function driveTravelImg() {
  return (
    <div>
      <img
        src={drive}
        style={{ maxWidth: "100%", maxHeight: "100%", marginBottom: "2rem" }}
        alt="drive in desert"
      />
    </div>
  );
}

const About = () => {
  return (
    <>
      <MDBContainer id="about" className="about">
        <MDBRow className="text-center">
          <MDBCol md="3"></MDBCol>
          <MDBCol md="6">
            <h1 className="display-1">What Vaguecation is all about...</h1>
          </MDBCol>
          <MDBCol md="3"></MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol id="rock-img" md="3">
            {rockTravelImg()}
          </MDBCol>
          <MDBCol style={{ marginTop: "2rem" }} id="about-text" md="6">
            <p>
              Here at Vaguecation we hate CV. Like you, we're tired of sitting
              at home. Want to be out there, vacationing. Eating unique food,
              seeing amazing sights, meeting new people - that's the life for
              us.
            </p>
            <p>
              The first thought in our heads when we got stuck at home was to
              plan an awesome vacation. With all this extra time on our hands
              you'd think we would come up with the vacation to end all
              vacations. We'll what really happened.
            </p>
            <p>
              Instead we realized that, while we love vacationing, we hate
              planning vacations. "Wouldn't it be great id we could push a
              button and someone would just tell us where to go and what to do?
              It could even be completely random, that would be a fun
              adventure."
            </p>
            <p>
              In that moment{" "}
              <span>
                <u>vaguecation</u>
              </span>{" "}
              was born.{" "}
            </p>
            <p>
              We decided with this time at home we'd create a website that would
              do the work for us. Now all anyone has to do know they want to go
              somewhere and Vaguecation with send you an email with the details.{" "}
            </p>

            <h1 className="display-1">What's the catch?</h1>
            <p>
              There's no catch. Go, don't go. Just click the button a hundred
              times since you have time to. It doesn't cost you a dime and
              maybe, just maybe, you'll have the vacation of a lifetime.
            </p>
          </MDBCol>
          <MDBCol md="3">
            <MDBRow>{waterfallTravelImg()}</MDBRow>

            <MDBRow id="tunnel">{colorTravelImg()}</MDBRow>
          </MDBCol>
        </MDBRow>
        <MDBRow className="text-center">
          <MDBCol md="3"></MDBCol>
          <MDBCol md="6">{driveTravelImg()}</MDBCol>
          <MDBCol md="3"></MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default About;
