import React from "react";
import { useState } from "react";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../Images/projects/pursuit/floor-plans/l30v1a.png";
import Image2 from "../../Images/projects/pursuit/floor-plans/l30v1b.png";
import Image3 from "../../Images/projects/pursuit/floor-plans/l30v1g.png";
import PersuitPriceModal from "../PersuitPriceModal";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";

const L30 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const images = [
    {
      id: 1,
      name: "L30 V1A",
      img: Image1,
      alt: "",
      unit: "3 BHK",
      area: "4100",
      price: "5.65Cr",
      sale: "4100",
      condition: "2416",
      built: "3280",
      outdoor: "507"
    },
    {
      id: 2,
      name: "L30 V1B",
      img: Image2,
      alt: "",
      unit: "3 BHK",
      area: "4100",
      price: "5.26Cr",
      sale: "4100",
      condition: "2424",
      built: "3280",
      outdoor: "498"
    },
    {
      id: 3,
      name: "L30 V1G",
      img: Image3,
      alt: "",
      unit: "3 BHK",
      area: "4100",
      price: "5.26Cr",
      sale: "4389",
      condition: "2424",
      built: "3511",
      outdoor: "706"
    },
  ];

  const options = {
    rewind: true,
    dots: false,
    autoplay: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
        loop: false,
      },
    },
  };

  return (
    <div className="p-3">
      <SimpleReactLightbox>
        <SRLWrapper>
          <OwlCarousel options={options}>
            {images.map((item, index) => (
              <Row className="g-3 justify-content-center" key={index}>
                <Col md={6} xs={12} sm={12}>
                  <div className="m-1 text-center p-1 rounded bg-info">
                    <a href={item.img}>
                      <Image src={item.img} alt="alt" className="img-fluid" />
                    </a>
                  </div>
                </Col>
                <Col md={6} className="align-self-center">
                  <div className="px-3">
                    <h2 className="text-info">{item.name}</h2>

                    <div className="">
                      <p>
                      Designed to maximise the amount of natural light that enters, most of the living spaces in our expansive L30 single-level homes open onto a deck or an east-facing garden. Born out of our quest to integrate nature with your lifestyle, we’ve designed an outdoor bathtub area in the master BHK, that gives you free access to the moods and colours of nature even while taking a shower! This unique feature is available with all units – whether on the first floor or on the twentieth. A garden that can house up to 2 full-grown trees comes with every unit, and adds an unmistakable charm to these spacious homes.
                      </p>
                    </div>
                    <Row className="g-3">
                      <h2 className="text-center fs-3 mb-0 ">
                        3 BHK Price @ ₹ {item.price}* Onwards
                      </h2>
                      <Col md={12} xs={12} sm={12}>
                        <ul className="list-unstyled text-center">
                          <li>Reference Saleable Area : { item.sale } sq.ft.</li>

                          <li>Carpet Area : {item.condition} sq.ft.</li>

                          <li>Built up Area : {item.built} sq.ft.</li>

                          <li>Outdoor Spaces : {item.outdoor} sq.ft.</li>
                        </ul>
                      </Col>
                      <Col md={6} xs={6} sm={6}>
                        <div className="">
                          <Button
                            variant="info text-white"
                            onClick={handleShow}
                            className="w-100"
                          >
                            Price Breakup
                          </Button>
                        </div>
                      </Col>
                      <Col md={6} xs={6} sm={6}>
                        <div className="">
                          <a
                            target="_blank"
                            href="https://my.matterport.com/show/?m=GeznZ3rDre8"
                            className="w-100 btn btn-info text-white"
                          >
                            3 D Virtual Tour
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            ))}
          </OwlCarousel>
        </SRLWrapper>
      </SimpleReactLightbox>
      <PersuitPriceModal
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default L30;
