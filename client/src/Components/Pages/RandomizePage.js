import React, { useState, useEffect } from "react";
import "./Randomize.css";
import { Container, CardColumns, Card, Row } from "react-bootstrap";
import { VacationCard } from "../customs/VacationCard";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { API } from "../Utils/API";
require("dotenv").config();

const {
  REACT_APP_SERVICE_ID,
  REACT_APP_VACATION_TEMPLATE_ID,
  REACT_APP_USER_ID,
} = process.env;

//* generates random vacation images in Randomize section on page load
function RandomCards() {
  const [results, setResults] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();
  const serviceID = `${REACT_APP_SERVICE_ID}`;
  const templateID = `${REACT_APP_VACATION_TEMPLATE_ID}`;
  const userID = `${REACT_APP_USER_ID}`;

  useEffect(() => {
    API.getRandom().then((res) => {
      setResults(res.data.response);
    });
  }, []);

  //* clicking any image button submits form does three things//
  //* 1 - calls api to retrieve random city information
  //* 2 - writes random city information and user email to mongoDB
  //* 3- emails random city information to email entered by user

  const onSubmit = async (data, r) => {
    let random_city = await API.createLocation();
    // console.log(random_city, "here is random_city");
    let new_trip = await API.createTrip({
      email: data.email,
      trip: [{ ...random_city.data }],
    });
    console.log({ new_trip, random_city });
    let trip_city = random_city.data.city;
    console.log(trip_city, "here is trip_city");
    let trip_region = random_city.data.region;
    let trip_country = random_city.data.country;

    sendEmail(
      serviceID,
      templateID,
      {
        email: data.email,
        trip_info: JSON.stringify(new_trip),
        trip_city: JSON.stringify(trip_city),
        trip_region: JSON.stringify(trip_region),
        trip_country: JSON.stringify(trip_country),
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Email sent successfully! Have fun!");
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };
  return (
    <>
      <Container id="randomize">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row id="stepsCard">
            <Card
              style={{ maxWidth: "35rem" }}
              bg="primary"
              text="white"
              className="text-center "
            >
              <div className="blockquote mb-0 card-body">
                <h4 style={{ marginTop: "1rem" }}>Step 1 - Enter your Email</h4>
                {/* EMAIL INPUT */}
                <input
                  type="email"
                  style={{ marginTop: "1rem" }}
                  placeholder="Email"
                  name="email"
                  ref={register({
                    required: "Email Required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid Email",
                    },
                  })}
                ></input>
                <h4 style={{ color: "orange", marginTop: "1rem" }}>
                  {errors.email && errors.email.message}
                </h4>
                <h4 style={{ marginTop: "1rem" }}>
                  Step 2 - Click any image to be emailed a Vaguecation
                </h4>
              </div>
              <div>
                <h4 style={{ color: "orange", marginTop: "1rem" }}>
                  {successMessage}
                </h4>
              </div>
            </Card>
          </Row>

          <CardColumns>
            {results.length
              ? results.map((result, index) => {
                  return (
                    <VacationCard key={result.id} src={result.urls.small} />
                  );
                })
              : ""}
          </CardColumns>
        </form>
      </Container>
    </>
  );
}

export default RandomCards;
