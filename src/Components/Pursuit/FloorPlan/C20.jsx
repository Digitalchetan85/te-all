import React from "react";
import { useState } from "react";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Image1 from "../../Images/projects/pursuit/floor-plans/c20v1a.png";
import Image2 from "../../Images/projects/pursuit/floor-plans/c20v1b.png";
import Image3 from "../../Images/projects/pursuit/floor-plans/c20v1g1.png";
import Image4 from "../../Images/projects/pursuit/floor-plans/c20v1g2.png";
import PersuitPriceModal from "../PersuitPriceModal";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";

const C20 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const images = [
    {
      id: 1,
      name: "C20 V1A",
      img: Image1,
      alt: "",
      unit: "3 BHK",
      area: "2753",
      price: "2.99Cr",
      sale: "2753",
      condition: "1649",
      built: "2202",
      space: "269"
    },
    {
      id: 2,
      name: "C20 V1B",
      img: Image2,
      alt: "",
      unit: "3 BHK",
      area: "2753",
      price: "2.99Cr",
      sale: "2753",
      condition: "1653",
      built: "2202",
      space: "274"
    },
    {
      id: 3,
      name: "C20 V1G1",
      img: Image3,
      alt: "",
      unit: "3 BHK",
      area: "2753",
      price: "2.99Cr",
      sale: "3109",
      condition: "1677",
      built: "2487",
      space: "642"
    },
    {
      id: 4,
      name: "C20 V1G2",
      img: Image4,
      alt: "",
      unit: "3 BHK",
      area: "2753",
      price: "2.99Cr",
      sale: "3398",
      condition: "1684",
      built: "2718",
      space: "792"
    },
  ];

  const options = {
    rewind: true,
    dots: false,
    autoplay: true,
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
    <div className="bg-info p-3">
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
                    <h2 className="text-white">{item.name}</h2>

                    <div className="">
                      <p className="text-white">
                      Designed as a simple “L” layout, the C20 home is placed back-to-back with four other C20 homes, forming a + shape in a block. A perfect blend of serene nature and modern innovation, the layout features large glass panels that offer unobstructed views from every room. Nestled inside the “L” is a landscaped terrace garden, integrating the beauty of nature with your indoor living space.
                      </p>
                    </div>
                    <Row className="g-3">
                      <h2 className="text-center fs-3 mb-0  text-white">
                        3 BHK Price @ ₹ {item.price}* Onwards
                      </h2>
                      <Col md={12} xs={12} sm={12}>
                        <ul className="list-unstyled text-center text-white">
                          <li>Reference Saleable Area : {item.sale} sq.ft.</li>

                          <li>Built-up Area : {item.built} sq.ft.</li>

                          <li>Conditioned Area : {item.condition} sq.ft.</li>

                          <li>Outdoor Spaces : {item.space} sq.ft.</li>
                        </ul>
                      </Col>
                      <Col md={6} xs={6} sm={6}>
                        <div className="">
                          <Button
                            variant="light"
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
                            href="https://my.matterport.com/show/?m=LVn4yjAnvBa"
                            className="w-100 btn btn-light"
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

export default C20;
