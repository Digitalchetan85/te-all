import React, { useState } from "react";
import PursuitModal from "../Pursuit/PursuitModal";

const FixedIcons = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div id="desktop-fix" className="position-realtive d-none d-md-block">
        <div className="container">
          <div className="d-flex=column justify-content-end mb-2 position-fixed custom">
            <div className="my-5">
              <a
                href="tel:+919036611010"
                className="bg-info p-3 rounded-circle m-2"
              >
                <i
                  className="fa fa-phone-volume text-white fs-5"
                  aria-hidden="true"
                ></i>
                <span className="d-block d-md-none">Call</span>
              </a>
            </div>
            <div className="my-5">
              <a
                href="https://wa.me/919036611010?text='Hi! I'm Interested In Total Environment Projects, Bangalore. Please Share Details.'"
                target="_blank"
                className="bg-info p-3 rounded-circle m-2"
              >
                <i
                  className="fab fa-whatsapp text-white fs-5"
                  aria-hidden="true"
                ></i>
                <span className="d-block d-md-none">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="mobile-fix" className="d-block d-md-none">
        <div className="container">
          <div className="row">
            <div className="col-4 bg-dark p-3">
              <div className="text-center">
                <a onClick={handleShow} className="bg-dark rounded-circle p-3">
                  <i
                    className="fa fa-envelope text-white fs-2"
                    aria-hidden="true"
                  ></i>
                  <span className="d-none text-white d-md-none">Call</span>
                </a>
              </div>
            </div>
            <div className="col-4 bg-dark p-3">
              <div className="text-center">
                <a href="tel:+919036611010" className="bg-dark rounded-circle p-3">
                  <i
                    className="fa fa-phone-volume text-white fs-2"
                    aria-hidden="true"
                  ></i>
                  <span className="d-none text-white d-md-none">Call</span>
                </a>
              </div>
            </div>
            <div className="col-4 bg-dark p-3">
              <div className="text-center">
                <a
                  href="https://wa.me/919036611010?text='Hi! I'm Interested In Total Environment Projects, Bangalore. Please Share Details.'"
                  target="_blank"
                  className="bg-dark rounded-circle p-3" 
                >
                  <i
                    className="fab fa-whatsapp fs-2" style={{color: '#00b489'}}
                    aria-hidden="true"
                  ></i>
                  <span className="d-none text-white d-md-none">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PursuitModal
        show={show}
        handleClose={handleClose}
        title="Enquire Now"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default FixedIcons;
