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

//* generates random vacation images on page load
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
  //* 2 - writes random city information, user email, and  to mongoDB
  //* 3- emails random city information to user

  const onSubmit = async (data, r) => {
    let random_city = await API.createLocation();
    let new_trip = await API.createTrip({
      email: data.email,
      trip: [{ ...random_city.data }],
    });
    sendEmail(
      serviceID,
      templateID,
      {
        email: data.email,
        trip_info: JSON.stringify(new_trip),
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
              style={{ maxWidth: "30rem" }}
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
                <span className="error-message">
                  {errors.email && errors.email.message}
                </span>

                <h4 style={{ marginTop: "1rem" }}>
                  Step 2 - Click any image to be emailed a Vaguecation
                </h4>
              </div>
              <div>
                <span style={{ color: "black" }}>{successMessage}</span>
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
