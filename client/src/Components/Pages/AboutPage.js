import React from "react";
import rock_travel from "../../assets/rock_travel.jpg";
import color_travel from "../../assets/color_tunnel.jpg";
import waterfall from "../../assets/waterfall.jpg";
import drive from "../../assets/drive.jpg";
import "./AboutPage.css";
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
              Like you, we at Vaguecation are tired of sitting at home. We want
              to be out there, vacationing. Eating unique food, seeing amazing
              sights, meeting new people - that's the life for us.
            </p>
            <p>
              When we realized we were going to be stuck at home for a while the
              first thought in our heads was to plan an awesome vacation. With
              all this extra time on our hands you'd think we would come up with
              the vacation to end all vacations. We'll that didn't happen.
            </p>
            <p>
              Instead we realized that, while we love vacationing, we hate
              planning vacations. Then we thought, "Wouldn't it be great we
              could push a button and someone would just tell us where to go and
              what to do? It could even be completely random, that would be a
              fun vacation."
            </p>
            <p>
              In that moment{" "}
              <span>
                <strong>vaguecation</strong>
              </span>{" "}
              was born.{" "}
            </p>
            <p>
              We spent our time at home creating a website that could do the
              planning work for us. Now all we have to do know is decided want
              to go somewhere and Vaguecation will send us an email with the
              details.{" "}
            </p>

            <h1 className="display-1">What's the catch?</h1>
            <p>
              There's no catch. Go or don't go, it is totally up to you. We
              don't charge you a dime and maybe, just maybe, you'll have the
              vacation of a lifetime.
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
