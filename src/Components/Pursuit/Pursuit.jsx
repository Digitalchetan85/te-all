import React from "react";
import { Button, Col, Container, Image, Nav, Row } from "react-bootstrap";
import HomeModal from "../Home/HomeModal";
import Contact from "../Includes/Contact";
import Info from "../Includes/Info";
import ExclusiveOffers from "./ExclusiveOffers";
import PaymentPlan from "./PaymentPlan";
import PricingPlan from "./PricingPlan";
import PursuitContact from "./PursuitContact";
import PursuitLocation from "./PursuitLocation";
import PursuitMasterPlan from "./PursuitMasterPlan";
import PursuitMasterPlan1 from "./PursuitMasterPlan1";
import PursuitSlider from "./PursuitSlider";
import Pursuit1 from "../Images/home/image-1.png";
import QE from "../Images/home/image-2.png";
import WM from "../Images/home/image-3.png";
import AR from "../Images/home/image-4.png";
import WY from "../Images/home/image-5.png";
import WF from "../Images/home/image-6.png";
import LL from "../Images/home/image-7.png";
import MF from "../Images/home/image-8.png";
import { useState } from "react";
import { Helmet } from "react-helmet";
import AllProjects from "../QuiteEarth/AllProjects";
import PusuitInfo from "./PusuitInfo";
import PersuitPriceModal from "./PersuitPriceModal";
import { useEffect } from "react";

const Pursuit = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {

    setTimeout(() => {
      setShow(true);
    }, 40000);

    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  })

  return (
    <div>
      {/* <Helmet>
        <title>Total Environment Projects | Pursuit Radical Rhapsody</title>
        <meta
          name="description"
          content="Total Environment Project, Pursuit Radical Rhaposdy Designed as a simple “L” layout, the C20 home is placed back-to-back with four other C20 homes."
        />
        <link rel="canonical" href="https://totalenviroment.in/projects/pursuit-of-radical-rhapsody" />
      </Helmet> */}
      <PursuitSlider />
      <main>
        <Container fluid>
          <Row>
            <Col md={12}>
              <div id="about" className="py-3 py-md-3">
                <Row>
                  <Col md={12}>
                    <div className="my-3 py-3 py-md-5 px-3 bg-light shadow">
                      <ExclusiveOffers />
                    </div>

                    <div
                      className="my-3 py-3 py-md-5 bg-light shadow"
                      id="master-plan"
                    >
                      <PursuitMasterPlan1 />
                    </div>

                    <div className="my-3 py-3 py-md-5 bg-light" id="floor-plan">
                      <PursuitMasterPlan />
                    </div>

                    <div className="my-3 py-3 py-md-5 bg-light" id="payment">
                      <PaymentPlan />
                    </div>

                    <div
                      className="my-3 py-3 py-md-5 bg-light"
                      id="pricing-plan"
                    >
                      <PricingPlan />
                    </div>

                    <div
                      className="my-3 bg-light border-start border-5 border-info"
                      id="info"
                    >
                      <PusuitInfo />
                    </div>

                    {/* <div className="my-3 py-3 py-md-5 bg-light" id="virtual-tour">
                      <Row>
                        <Col md={12}>
                          <div className="">

                          </div>
                        </Col>
                      </Row>
                    </div> */}

                    <div className="my-3 bg-light py-3 py-md-3" id="amenites">
                      <Row className="justify-content-center">
                        <h2 className="text-center py-md-3 py-2 text-info fs-3 d-block d-md-none">
                          Radical Rhapsody Amenities
                        </h2>
                        <h2 className="text-center py-md-3 py-2 text-info fs-3 d-none d-md-block">
                          Total Environment Pursuit Of A Radical Rhapsody
                          Amenities
                        </h2>
                        <Col md={4} xs={6} className="align-self-center">
                          <ul>
                            <li>Central Greens</li>
                            <li>Amphitheatre</li>
                            <li>Kids Play Area</li>
                            <li>4m wide boardwalk</li>
                            <li>Tree Museum</li>
                            <li>Badminton</li>
                            <li>Tennis</li>
                            <li>Basketball</li>
                          </ul>
                        </Col>
                        <Col md={4} xs={6}>
                          <ul>
                            <li>2 Clubhouses</li>
                            <li>Gym</li>
                            <li>Outdoor Pool</li>
                            <li>Outdoor toddlers pool</li>
                            <li>Cafe</li>
                            <li>Library</li>
                            <li>Guest Suites</li>
                            <li>Steam Room & Sauna</li>
                          </ul>
                        </Col>
                      </Row>
                    </div>

                    <div
                      className="my-3 bg-light px-3 py-3 py-md-3"
                      id="location"
                    >
                      <PursuitLocation />
                    </div>

                    <div
                      className="my-3 bg-light px-3 py-3 py-md-3"
                      id="projects"
                    >
                      <h2 className="py-2 mb-0 fs-3 text-info text-center">
                        Total Environment Projects
                      </h2>
                      
                      <AllProjects />

                      <div className="p-2">
                        <h1 className="text-center py-2 pt-md-5 fs-2">
                          Total Environment Homes
                        </h1>
                        <h3>
                          With just 10,000 rupees and a dream, Total Environment
                          was founded by Kamal Sagar.
                        </h3>
                        <p className="py-3 py-md-2">
                          Over two decades later, Total Environment has
                          delivered more than 4 million square feet to over
                          1,200 customers across dozens of projects in
                          Bangalore, Hyderabad and Pune. While these numbers
                          demonstrate our scale of operations and our ability to
                          influence modern housing, they only tell one side of
                          the story. What truly moves and inspires us is the
                          love for design and the joy of giving people a place
                          to proudly call home. Our commitment to further design
                          thinking and practices will always be first and
                          foremost, no matter what project we’re embarking on.
                        </p>
                        <h3>Manifesto</h3>
                        <p>
                          Here’s to making the places we go more beautiful, the
                          experiences we have more enjoyable, and the things we
                          eat and drink more delicious. Here’s to the passion
                          that allows us to hear music and get inspired to
                          design a radically new space. Here’s to that voice in
                          our head that says “we can do even better.” Whether
                          it’s a home, a resort, or great food and craft beer,
                          you can expect it to be sensitively designed,
                          completely personal and totally original. Because we
                          don’t allow conventions to steer us, conveniences to
                          mislead us or commerce to define us. Instead,
                          inspiration, intention and integrity lead the way. We
                          live by our passions and hope to ignite yours.
                        </p>
                        <h3>Culture & Leadership Principles</h3>
                        <p>
                          Successful and less successful people do not vary
                          greatly in their abilities, but only in their desire
                          to reach their potential. At Total Environment, we
                          encourage leaders to smash the glass ceilings and to
                          never settle for mediocrity. Our leaders benchmark
                          themselves against the best in the world and always
                          lead by example.
                        </p>
                        <h3>Maintain High Standards</h3>
                        <p>
                          Our passion is our number one currency. It drives our
                          relentless pursuit for the extraordinary and inspires
                          us to dive deep into every challenge we seek out and
                          accept. We choose meticulousness over mediocrity and
                          always lead by example.
                        </p>
                        <p>
                          At Total Environment, we started with a simple
                          mission: to make homes worth living in. This simple
                          idea took us places we couldn’t have initially
                          imagined. Over two decades later, we still pursue this
                          ideal in everything we touch, make and do.
                        </p>
                        <p>
                          We build your home around you, just the way you want
                          it to be, just how you like to live your life, not the
                          other way around. “Our Differences” are a
                          manifestation of these possibilities, coupled with our
                          passion for making a difference to the world.
                        </p>
                        {/* <Info /> */}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            {/* <Col md={4}>
              <div className="sticky-top">
                <PursuitContact />
              </div>
            </Col> */}
          </Row>
        </Container>
      </main>
      <PersuitPriceModal show={show} handleClose={handleClose} title="Call Back" />
    </div>
  );
};

export default Pursuit;
