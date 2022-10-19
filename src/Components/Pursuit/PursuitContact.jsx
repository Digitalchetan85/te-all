import React, { useEffect, useState } from "react";
import { Button, Row, Col, Container, InputGroup, Form } from "react-bootstrap";
import * as Yup from "yup";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { formatPhoneNumberIntl } from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const PursuitContact = () => {
  const [formStatus, setformStatus] = useState("");
  const [display, setDisplay] = useState(false);
  const [Loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    let sendingdata = {
      apikey: "897ec314-c85b-4291-96ee-48648d5dcfbd",
      firstname: data.name,
      lastname: "",
      source: "Total Enviroment - Pursuit Of A Radical Rhapsody",
      mobile: formatPhoneNumberIntl(data.phoneinput),
      CreatedDate: "17/02/2022",
      email: data.email,
      Remark: "Brochure Downloaded",
      ProjectUID: "3a8e3a33-49c3-492e-8ea9-f7c2040b8981",
    };
    // console.log("data", sendingdata);
    setformStatus(
      "You're All Set! Thanks you for expressing interest on our Project. Our expert will get in touch with you shortly."
    );
    setLoading(false);
    setDisplay(true);

    axios
      .post("https://buildeskapi.azurewebsites.net/api/Webhook", sendingdata)
      .then(function (response) {
        // console.log(response);
        if (response.data.Success) {
          // setformStatus(
          //   "Thanks for contacting us. We will get back to you soon."
          // );
        } else {
          setformStatus("Sorry!!! Something went wrong. Please try again");
        }
      })
      .catch(function (error) {
        setformStatus("Sorry!!! Something went wrong. Please try again");
      });
  };

  return (
    <div className="py-3 py-md-5 mx-md-4 " id="contact">
      <Container className="pt-md-3">
        <Row className="justify-content-center">
          {display ? (
            <Row className="my-5">
              <Col md={12}>
                {formStatus ? (
                  <div>
                    <div className="alert alert-success p-3 fs-4 fw-bold text-center">
                      {formStatus}
                    </div>
                    <div className="text-center">
                      <a
                        className="btn btn-info text-white"
                        href="https://totalenvironmentproject.in/radical-raphsody-brochure.pdf"
                        target="_blank"
                      >
                        Download Brochure Here
                      </a>
                    </div>
                  </div>
                ) : null}
                {Loading ? (
                  <div
                    className="text-center spinner-border text-success"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : null}
              </Col>
            </Row>
          ) : (
            <Form
              onSubmit={handleSubmit(onSubmit)}
              className="pb-3 pb-md-5 pt-md-2 mx-md-5 sticky-top bg-white rounded shadow"
              id="contact"
            >
              <div className="text-center">
                <h3 className="text-center text-info pt-3">
                  Get in touch with us
                </h3>
                <h5 className="text-center text-dark">Enquire Now!!!</h5>
              </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Name</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  className={errors.name ? "is-invalid" : ""}
                  {...register("name", {
                    required: "Name Field Required",
                    minLength: {
                      value: 3,
                      message: "Name should be at least 3 characters",
                    },
                    maxLength: {
                      value: 29,
                      message: "Name should not be more than 20 characters",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.name?.message}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Email address</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className={errors.email ? "is-invalid" : ""}
                  {...register("email", {
                    required: "Email field required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.email?.message}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                {/* <Form.Label>Phone No</Form.Label> */}
                <Controller
                  name="phoneinput"
                  control={control}
                  rules={{
                    required: "Required",
                    validate: (value) => isValidPhoneNumber(value),
                  }}
                  render={({ field: { onChange, value } }) => (
                    <PhoneInput
                      international
                      className={`form-control ${
                        errors["phoneinput"] ? "is-invalid" : ""
                      }`}
                      placeholder="Enter Phone Number"
                      defaultCountry="IN"
                      value={value}
                      onChange={onChange}
                      id="phoneinput"
                    />
                  )}
                />
                {errors["phoneinput"] ? (
                  <Form.Text className="text-danger">
                    Invalid Phone number
                  </Form.Text>
                ) : null}
              </Form.Group>
              <div className="text-center">
                <Button
                  variant="info"
                  className="text-white px-3 form-control"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default PursuitContact;
