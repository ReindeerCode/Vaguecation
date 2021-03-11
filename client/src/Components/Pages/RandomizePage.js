import React, { useState, useEffect } from "react";
import "./Randomize.css";
import { Container, CardColumns, Card, Button, Row } from "react-bootstrap";
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
      console.log(res, "this is results");
    });
  }, []);

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        email: data.email,
        Zipcode: data.Zipcode,
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
  console.log(results, "this out function results");
  return (
    <>
      <Container id="randomize">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Card
              style={{ maxWidth: "20rem" }}
              bg="primary"
              text="white"
              className="text-center "
            >
              <div className="blockquote mb-0 card-body">
                <h4 style={{ marginTop: "1rem" }}>
                  Step 1 - Enter your Email and Zipcode
                </h4>
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
                {/* Zipcode INPUT */}
                <input
                  type="number"
                  style={{ marginTop: "1rem" }}
                  placeholder="Zipcode"
                  name="Zipcode"
                  ref={register({
                    required: "Zipcode Required",

                    maxLength: {
                      value: 5,
                      message: "Zipcode are 5 digits",
                    },
                  })}
                ></input>
                <span className="error-message">
                  {errors.Zipcode && errors.Zipcode.message}
                </span>

                <h4 style={{ marginTop: "1rem" }}>
                  Step 2 - Click any image to be emailed a Vaguecation
                </h4>
              </div>
              <div>
                <span>{successMessage}</span>
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
