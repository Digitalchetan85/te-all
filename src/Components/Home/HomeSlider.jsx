import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Image1 from "../Images/slider/quiet.png";
import Image2 from "../Images/slider/pursuit.png";
import Image3 from "../Images/slider/windmill.png";
import Image4 from "../Images/slider/rain.png";
import Image7 from "../Images/slider/fly.png";
import Image8 from "../Images/slider/rain.png";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";

const HomeSlider = () => {
  const associations = [
    {
      id: 1,
      ImageUrl: Image1,
      alt: "",
      link: "/projects/quiet-earth",
      title: "Total Environment In That Quiet Earth",
      specification: "2, 3 & 4BHK Apartments & Villas",
      price: "",
    },
    {
      id: 2,
      ImageUrl: Image2,
      alt: "",
      link: "/projects/pursuit",
      title: "Total Environment Pursuit Of A Radical Rhapsody",
      specification: "Luxury Apartments & Villas",
      price: "",
    },
    {
      id: 3,
      ImageUrl: Image3,
      alt: "",
      link: "/projects/windmill",
      title: "Total Environment Windmill Of Your Mind",
      specification: "Luxury Apartments & Villas in Whitefield, East Bangalore",
      price: "",
    },
    {
      id: 4,
      ImageUrl: Image4,
      alt: "",
      link: "/projects/rain",
      title: "Total Environment After The Rain",
      specification: "Luxury Villas in Yelahanka, North Bangalore",
      price: "",
    },
    {
      id: 7,
      ImageUrl: Image7,
      alt: "",
      link: "/projects/workcations-yelhanka",
      title: "Total Environment Workcations",
      specification: "Pre Launch Commercial Development in Yelhanka, Bangalore",
      price: "",
    },
    {
      id: 8,
      ImageUrl: Image8,
      alt: "",
      link: "/projects/workations",
      title: "Total Environment Workcations",
      specification:
        "Pre-Launch Commercial Development in Whitefield, Bangalore",
      price: "",
    },
  ];

  const options = {
    rewind: true,
    dots: false,
    autoplay: true,
    margin: 10,
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
        items: 2,
        nav: false,
        loop: false,
      },
    },
  };

  return (
    <div>
      <OwlCarousel options={options}>
        {associations.map((item, index) => (
          <div className="" key={index}>
            <Container>
              <Row>
                <Col md={12} className="ps-0 pe-0">
                  <div className="text-center">
                    <Image
                      src={item.ImageUrl}
                      alt={item.alt}
                      className="img-fluid"
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default HomeSlider;
