import React from "react";
import Image1 from "../Images/plans/image-1.jpg";
import Image2 from "../Images/plans/image-2.jpg";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { Col, Image, Row } from "react-bootstrap";

const PricingPlan = () => {
  const images = [
    { id: 1, imgName: Image1, alt: "", tag: "L20 V1a" },
    { id: 2, imgName: Image2, alt: "", tag: "L22" },
  ];
  return (
    <SimpleReactLightbox>
      <SRLWrapper>
        <Row>
          {images.map((item) => (
            <Col md={6} xs={12} sm={12} key={item.id}>
              <div className="text-center p-1 rounded bg-info">
                <a href={item.imgName}>
                  <Image
                    src={item.imgName}
                    alt={item.alt}
                    className="img-fluid"
                  />
                </a>
              </div>
              {/* <h6 className="text-center"> {item.tag} </h6> */}
            </Col>
          ))}
        </Row>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
};

export default PricingPlan;
