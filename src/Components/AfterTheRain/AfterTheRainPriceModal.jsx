import React, { useState } from "react";
import {
  Button,
  Modal,
  Row,
  Col,
  Image,
  InputGroup,
  Form,
} from "react-bootstrap";
import * as Yup from "yup";
import axios from "axios";
import Logo from "../../Components/Images/te-logo.png";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import PhoneInput, {
  formatPhoneNumberIntl,
} from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const AfterTheRainPriceModal = (props) => {
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
      source: "Total Enviroment - After The Rain",
      mobile: formatPhoneNumberIntl(data.phoneinput),
      CreatedDate: "18/10/2022",
      email: data.email,
      Remark: "Brochure Downloaded",
      ProjectUID: "10a695ee-f12d-4695-9728-490bd16b5540",
    };
    // console.log(sendingdata);
    //navigate("/thank-you"); 
    window.open('/thank-you', '_blank');
    setDisplay(true);
    setLoading(false);
    setformStatus("Thanks for contacting us. We will get back to you soon.");
    axios
      .post("https://buildeskapi.azurewebsites.net/api/Webhook", sendingdata)
      .then(function (response) {
        if (response.data.Success) {
        } else {
          setformStatus("Sorry!!! Something went wrong. Please try again");
        }
      })
      .catch(function (error) {
        setformStatus("Sorry!!! Something went wrong. Please try again");
      });
  };

  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose} onClose={props.closeModal} centered id="cre">
        <div className="new" style={{ backgroundColor: '#fff' }}>
          <Modal.Header closeButton className="border-0" style={{ backgroundColor: '#fff' }}>
            {/* <Modal.Title className="text-white text-titlecase border-0 mx-auto">
            {props.title}
          </Modal.Title> */}
          </Modal.Header>
          <Modal.Body className="p-0" style={{ backgroundColor: '#fff', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
            <div className="">
              <div className="text-center">
                <Image src={Logo} className="img-fluid mx-auto"></Image>
              </div>
              <div className="d-flex bd-highlight mt-3" id="form-setting1">
                <div className="flex-fill bd-highlight align-self-center">
                  <h3 className="text-center fs-5" style={{ fontWeight: "600" }}>
                  After The Rain
                  </h3>
                  <Row className="py-1">
                    <Col md={4} xs={4} sm={4} className="p-0">
                      <div className="text-center">
                        <i className="fa fa-phone-volume"></i>
                        <h6>24/7 <br />Support</h6>
                      </div>
                    </Col>
                    <Col md={4} xs={4} sm={4} className="p-0">
                      <div className="text-center">
                        <i className="fa fa-building"></i>
                        <h6>Free Site <br />Visit</h6>
                      </div>
                    </Col>
                    <Col md={4} xs={4} sm={4} className="p-0">
                      <div className="text-center">
                        <i className="fa fa-tag"></i>
                        <h6>Unmatched <br />Price</h6>
                      </div>
                    </Col>
                  </Row>
                  <h3 className="text-center fs-5" style={{ fontWeight: "600" }}>
                  Get Instant Call Back
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
                          className="sticky-top rounded"
                          id="contact"
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
                            <Form.Text className="text-danger">
                              {errors.name?.message}
                            </Form.Text>
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
                            {errors["phoneinput"] ? (
                              <Form.Text className="text-danger">
                                Invalid Phone number
                              </Form.Text>
                            ) : null}
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
                            <Form.Text className="text-danger">
                              {errors.email?.message}
                            </Form.Text>
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
                              className="w-100 text-uppercase fw-bolder border-0 px-3"
                              type="submit"
                            >
                              Enquire Now <i className="fas fa-arrow-right"></i>
                            </Button>
                          </div>
                        </Form>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </div>
        <div className="p-3" style={{ backgroundColor: '#ffffff' }}>
          <div className="">
            <div className="custom">
              <div className="row">
                <div className="col-md-6 col-6 border-end border-color2">
                  <a href="tel:08095999000" className="text-decoration-none"><p className="text-center mb-0"><i className="me-2 fa-beat fa-solid fa-phone-volume fw-bold fs-6 text-primary"></i> <span className="fw-bold fs-6 text-uppercase text-primary">Call</span></p></a>

                </div>
                <div className="col-md-6 col-6">
                  <a href="https://wa.me/918095999000?text='Hi! I'm Interested In Total Environment - After The Rain Project, Bangalore. Please Share Details.'" className="text-decoration-none text-dark" target="_blank"> <p className="text-center mb-0"><i className="me-2 fa-beat fa-brands fa-whatsapp fw-bold fs-6 text-success"></i> <span className="fw-bold fs-6 text-success">Whatsapp</span></p></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AfterTheRainPriceModal;
