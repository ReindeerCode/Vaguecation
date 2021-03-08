import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import "./ContactPage.css";
import { Container } from "react-bootstrap";

const {
  REACT_APP_SERVICE_ID,
  REACT_APP_CONTACT_TEMPLATE_ID,
  REACT_APP_USER_ID,
} = process.env;

const Contact = () => {
  // <ContactVideoSection />;
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const serviceID = `${REACT_APP_SERVICE_ID}`;
  const templateID = `${REACT_APP_CONTACT_TEMPLATE_ID}`;
  const userID = `${REACT_APP_USER_ID}`;

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        m: data.m,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "Email sent successfully! I look forward to chatting with you."
        );
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  return (
    <>
      <Container id="contact" className="contact">
        <div>
          <div className="text-center">
            <h1 className="display-1">Contact Us</h1>
            <p id="contactP">
              Please fill out the form below and we'll get back to you as soon
              as possible.
            </p>
            <span className="success-message">{successMessage}</span>
          </div>

          <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-6 col-xs-12">
                  {/* NAME INPUT */}
                  <div className="text-center">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      ref={register({
                        required: "Please enter your name",
                        maxLength: {
                          value: 20,
                          message: "Please enter fewer than 20 characters",
                        },
                      })}
                    />
                    <div className="line"></div>
                  </div>
                  <span className="error-message">
                    {errors.name && errors.name.message}
                  </span>
                  {/* PHONE INPUT */}
                  <div className="text-center">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      name="phone"
                      ref={register({
                        required: "Please add your phone number",
                      })}
                    />
                    <div className="line"></div>
                  </div>
                  <span className="error-message">
                    {errors.phone && errors.phone.message}
                  </span>
                  {/* EMAIL INPUT */}
                  <div className="text-center">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      ref={register({
                        required: "Please provide your email",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "invalid Email",
                        },
                      })}
                    />
                    <div className="line"></div>
                  </div>
                  <span className="error-message">
                    {errors.email && errors.email.message}
                  </span>
                  {/* SUBJECT INPUT */}
                  <div className="text-center">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                      ref={register({
                        required: "OOPS, please add a subject",
                      })}
                    />
                    <div className="line"></div>
                  </div>
                  <span className="error-message">
                    {errors.subject && errors.subject.message}
                  </span>
                </div>
                <div className="col-md-6 col-xs-12">
                  {/* DESCRIPTION */}
                  <div className="text-center">
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Message"
                      name="m"
                      ref={register({
                        required: "Please enter a message",
                      })}
                    ></textarea>
                    <div className="line"></div>
                  </div>
                  <span className="error-message">
                    {errors.m && errors.m.message}
                  </span>
                  <button
                    className="btn-main-offer contact-btn2  btn btn-outline-warning"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
