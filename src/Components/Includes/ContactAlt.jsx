import React, { useEffect, useState } from "react";
import { Button, Row, Col, Container, InputGroup, Form, Image } from "react-bootstrap";
import * as Yup from "yup";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { formatPhoneNumberIntl } from "react-phone-number-input";
import {
  isValidPhoneNumber,
  getCountryCallingCode,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import Logo from '../Images/te-logo.png'

const ContactAlt = () => {
  const [formStatus, setformStatus] = useState("");
  const [display, setDisplay] = useState(false);
  const [Loading, setLoading] = useState(false);

  const navigate = useNavigate();

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
      source: "Total Enviroment",
      mobile: formatPhoneNumberIntl(data.phoneinput),
      CreatedDate: "18/10/2022",
      email: data.email,
      Remark: data.project,
      ProjectUID: "ea347ee5-bc4f-4686-bfc5-b47ea1eea9a8",
    };
    // console.log("data", sendingdata);
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

    //navigate("/thank-you"); 
    window.open('/thank-you', '_blank');
    // setformStatus(
    //   "You're All Set! Thanks you for expressing interest on our Project. Our expert will get in touch with you shortly."
    // );
    // setLoading(false);
    // setDisplay(true);

   
  };

  return (
    <div className="py-3 mx-md-4" id="contact">
      <div className="new" style={{ backgroundColor: '#fff' }}>
        <div closeButton className="border-0" style={{ backgroundColor: '#fff' }}>

        </div>
        <div className="p-0" style={{ backgroundColor: '#fff', borderRadius: "10px", borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
          <div className="">
            <div className="text-center py-3">
              <Image src={Logo} className="img-fluid mx-auto"></Image>
            </div>
            <div className="d-flex bd-highlight mt-3" id="form-setting1">
              <div className="flex-fill bd-highlight align-self-center">
                <h3 className="text-center fs-5" style={{ fontWeight: "600" }}>

                </h3>
                <Row className="pb-3">
                  <Col md={4} xs={4} sm={4} className="p-0">
                    <div className="text-center">
                      <i className="fa fa-phone-volume"></i>
                      <h6 style={{ fontSize: '13px' }}>24/7 <br />Support</h6>
                    </div>
                  </Col>
                  <Col md={4} xs={4} sm={4} className="p-0">
                    <div className="text-center">
                      <i className="fa fa-building"></i>
                      <h6 style={{ fontSize: '13px' }}>Free <br />Site Visit</h6>
                    </div>
                  </Col>
                  <Col md={4} xs={4} sm={4} className="p-0">
                    <div className="text-center">
                      <i className="fa fa-tag"></i>
                      <h6 style={{ fontSize: '13px' }}>Unmatched <br />Price</h6>
                    </div>
                  </Col>
                </Row>
                <h3 className="text-center fs-5" style={{ fontWeight: "600" }}>
                  Download Project Brochure
                </h3>
                <div className="px-3">
                  <div className="justify-content-center">
                    {display ? (
                      <Row className="">
                        <Col md={12}>
                          {formStatus ? (
                            <div>
                              <div className="alert alert-success p-3 fs-4 fw-bold text-center">
                                {formStatus}
                              </div>
                              {/* <div className="text-center">
                      <a
                        className="btn btn-info"
                        href="https://totalenvironmentproject.in/radical-raphsody-brochure.pdf"
                        target="_blank"
                      >
                        Download Brochure Here
                      </a>
                    </div> */}
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
                        className="rounded"
                        id="contact1"
                      >
                        <Form.Group className="mb-1" controlId="formBasicEmail">
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
                          {/* <Form.Text className="text-danger">
                            {errors.name?.message}
                          </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formBasicEmail">
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
                                className={`form-control ${errors["phoneinput"] ? "is-invalid" : ""
                                  }`}
                                placeholder="Enter Phone Number"
                                defaultCountry="IN"
                                value={value}
                                onChange={onChange}
                                id="phoneinput"
                              />
                            )}
                          />
                          {/* {errors["phoneinput"] ? (
                            <Form.Text className="text-danger">
                              Invalid Phone number
                            </Form.Text>
                          ) : null} */}
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formBasicEmail">
                          {/* <Form.Label>Email address</Form.Label> */}
                          <Form.Control
                            type="email"
                            placeholder="Enter Email"
                            className={errors.email ? "is-invalid" : ""}
                            {...register("email", {
                              required: "Email field required",
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address",
                              },
                            })}
                          />
                          {/* <Form.Text className="text-danger">
                            {errors.email?.message}
                          </Form.Text> */}
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formBasicEmail">
                          {/* <Form.Label>Email address</Form.Label> */}
                          <Form.Select
                            className="form-control"
                            {...register("sitevisit")}>
                            <option value="">Interested in Site Visit?</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </Form.Select>
                          {/* <Form.Text className="text-danger">
                              {errors.email?.message}
                            </Form.Text> */}
                        </Form.Group>

                        <div className="text-center my-3">
                          <Button
                            variant="info"
                            className="w-100 text-uppercase text-white fw-bolder border-0 px-3"
                            type="submit"
                          >
                            Download Now <i className="fas fa-download"></i>
                          </Button>
                        </div>
                      </Form>
                    )}
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="p-3" style={{ backgroundColor: '#ffffff' }}>

      </div> */}
    </div>
  );
};

export default ContactAlt;
