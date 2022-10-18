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

const WindMillModal = (props) => {
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
      source: "Total Enviroment - Windmill",
      mobile: formatPhoneNumberIntl(data.phoneinput),
      CreatedDate: "18/10/2022",
      email: data.email,
      Remark: "Brochure Downloaded",
      ProjectUID: "126e5420-77a2-4cc7-b975-7eabbd0abb0e",
    };
    // console.log(sendingdata);
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
      <Modal show={props.show} onHide={props.handleClose} centered id="cre">
        <Modal.Header closeButton className="border-0">
          {/* <Modal.Title className="text-white text-titlecase border-0 mx-auto">
            {props.title}
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="">
          {/* <h6 className="py-1 text-center">{props.message}</h6> */}
          <div className="d-flex bd-highlight" id="form-setting">
            <div className="p-2 flex-fill bd-highlight align-self-center">
              <div className="text-center">
                <Image src={Logo} alt="" className="img-fluid w-50"></Image>
              </div>
              <h3 className="text-center" style={{ fontWeight: "600" }}>
                {props.utitle}
              </h3>
              <p className="text-center" style={{ fontWeight: "600" }}>
                Register Here And Avail The Best Offers!!
              </p>
              {display ? (
                <div className="text-center">
                  <a
                    className="btn btn-info text-white"
                    href="https://totalenvironmentproject.in/brochure/windmill.pdf"
                    target="_blank"
                  >
                    Download Brochure Here
                  </a>
                </div>
              ) : (
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
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
                    <Form.Label>Email address</Form.Label>
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
                    <Form.Label>Phone No</Form.Label>
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
                      className="text-white px-3"
                      type="submit"
                    >
                      {props.title}
                    </Button>
                  </div>
                </Form>
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-dark py-1 justify-content-center">
          <a
            href="tel:08095999000"
            className="text-white text-decoration-none"
            style={{ fontWeight: "600" }}
          >
            <i className="fa fa-phone-volume text-white pe-2"></i>+91 80959
            99000
          </a>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default WindMillModal;
