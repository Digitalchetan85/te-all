import React, { useState } from "react";
import PursuitModal from "../Pursuit/PursuitModal";

const FixedIcons = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      {/* <div id="desktop-fix" className="position-realtive d-none d-md-block">
        <div className="container">
          <div className="d-flex=column justify-content-end mb-2 position-fixed custom">
            <div className="my-5">
              <a
                href="tel:+918095999000"
                className="bg-primary p-4 rounded-circle m-2"
              >
                <i
                  className="fa fa-phone-volume text-white fs-4 fa-beat"
                  aria-hidden="true"
                ></i>
                <span className="d-block d-md-none">Call</span>
              </a>
            </div>
            <div className="my-5">
              <a
                href="https://wa.me/918095999000?text='Hi! I'm Interested In Total Environment Projects, Bangalore. Please Share Details.'"
                target="_blank"
                className="bg-warning p-4 rounded-circle m-2"
              >
                <i
                  className="fab fa-whatsapp text-white fs-4 fa-beat"
                  aria-hidden="true"
                ></i>
                <span className="d-block d-md-none">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div> */}

      <div id="mobile-fix" className="d-block d-md-none">
        <div className="container">
          <div className="row">
            <div className="col-6 bg-dark p-3">
              <div className="text-center">
                <a onClick={handleShow} className="bg-dark rounded-circle p-3 text-decoration-none">
                  <i
                    className="fa fa-envelope text-center fs-5 fa-beat text-primary"
                    aria-hidden="true"
                  ></i>
                  <span className="text-white d-md-none text-center"> Enquire now</span>
                </a>
              </div>
            </div>
            {/* <div className="col-4 bg-dark p-3">
              <div className="text-center">
                <a href="tel:+918095999000" className="bg-dark rounded-circle p-3">
                  <i
                    className="fa fa-phone-volume text-white fs-2"
                    aria-hidden="true"
                  ></i>
                  <span className="d-none text-white d-md-none">Call</span>
                </a>
              </div>
            </div> */}
            <div className="col-6 bg-dark p-3">
              <div className="text-center">
                <a
                  href="https://wa.me/918095999000?text='Hi! I'm Interested In Total Environment Projects, Bangalore. Please Share Details.'"
                  target="_blank"
                  className="bg-dark rounded-circle p-3 text-decoration-none" 
                >
                  <i
                    className="fab fa-whatsapp fs-5 text-center fa-beat" style={{color: '#00b489'}}
                    aria-hidden="true"
                  ></i>
                  <span className="text-white d-md-none"> WhatsApp</span>
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
