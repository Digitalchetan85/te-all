import React from "react";
import { Button, Col, Container, Image, Nav, Row } from "react-bootstrap";
import Contact from "../Includes/Contact";
import Info from "../Includes/Info";
import PaymentPlan from "../Pursuit/PaymentPlan";
import PricingPlan from "../Pursuit/PricingPlan";
import QEFloorPlans from "./QEFloorPlans";
import QELocation from "./QELocation";
import QEMasterPlan from "./QEMasterPlan";
import QuiteEarthSlider from "./QuiteEarthSlider";
import { useState } from "react";
import { Helmet } from "react-helmet";
import AllProjects from "./AllProjects";
import QEPriceModal from "./QEPriceModal";
import QEInfo from "./QEInfo";
import { useEffect } from "react";
import QuiteEarthFaq from "./QuiteEarthFaq";
import HomeProperties from "../Home/HomeProperties";
import PersuitSchedule from "../Pursuit/PersuitSchedule";

const QuiteEarth = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setShow(true);
  //   }, 30000);
  //   return () => {
  //     clearTimeout(timer);
  //   }

  //   document.addEventListener("contextmenu", (e) => {
  //     e.preventDefault();
  //   });
  // }, [setShow]);

  const closeModal = () => {
    setShow(false);
  };

  return (
    <div>
      <Helmet>
        <title>Total Environment Projects | In That Quiet Earth</title>
        <meta
          name="description"
          content="Total Environment Project, In That Quiet Earth. This offers family homes with a host of innovative features that are smart and modern, yet inspiring and inviting."
        />
        <link rel="canonical" href="https://totalenviroment.in/projects/quiet-earth" />
      </Helmet>
      <QuiteEarthSlider />
      <main>
        <Container fluid>
          <Row>
            <Col md={12}>
              <div id="about" className="py-3 py-md-5">
                <Row>
                  <Col md={12}>
                    <div className="my-3 py-3 py-md-5 px-3 bg-light shadow">
                      <Row>
                        <Col md={12}>
                          <h2 className="py-2 text-center fs-4 text-info d-none d-md-block">
                            About Total Environment In That Quiet Earth
                          </h2>
                          <h2 className="py-2 text-center fs-4 text-info d-block d-md-none">
                            About In That Quiet Earth
                          </h2>
                          <p>
                            Homes at In That Quiet Earth have been created for
                            people who share our passion for design, quality,
                            and craftsmanship. Featuring large glass panels that
                            bring the outdoors in, each home is built with
                            signature natural materials that age beautifully.
                          </p>
                          <p>
                            This offers family homes with a host of innovative
                            features that are smart and modern, yet inspiring
                            and inviting.
                          </p>
                          <p>
                            Highlights of the community are the green roofs,
                            terrace garden, distinctive landscaping along wide,
                            well-connected paths that are bike and
                            pedestrian-friendly. Development of the Property
                            will include a Clubhouse with well-equipped gym,
                            swimming pool, outdoor space, and a children’s
                            playground.
                          </p>
                        </Col>
                      </Row>
                    </div>

                    {/* <div className="my-3 py-3 py-md-5 bg-light" id="payment">
                      <PaymentPlan />
                    </div> */}

                    {/* <PersuitSchedule /> */}

                    <div
                      className="my-3 py-3 py-md-5 bg-light shadow"
                      id="master-plan"
                    >
                      <QEMasterPlan />
                    </div>

                    <div className="my-3 py-3 py-md-5 bg-light" id="floor-plan">
                      <QEFloorPlans />
                    </div>

                    

                    {/* <div
                      className="my-3 py-3 py-md-5 bg-light"
                      id="pricing-plan"
                    >
                      <PricingPlan />
                    </div> */}

                    <div
                      className="my-3 bg-light border-start border-5 border-info"
                      id="info"
                    >
                      <QEInfo />
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
                          In That Quiet Earth - Amenities
                        </h2>
                        <h2 className="text-center py-md-3 py-2 text-info fs-3 d-none d-md-block">
                          Total Environment In That Quiet Earth - Amenities
                        </h2>
                        <Col md={3} xs={6} sm={6}>
                          <ul>
                            <li>Cafe</li>
                            <li>Creche</li>
                            <li>Clinic</li>
                            <li>Dog Park</li>
                            <li>Library</li>
                            <li>Billiards</li>
                            <li>Gymnasium</li>
                            <li>Swimming Pool</li>
                          </ul>
                        </Col>
                        <Col md={3} xs={6} sm={6}>
                          <ul>
                            <li>Simulated Golf</li>
                            <li>Playground</li>
                            <li>Children’s Play Area</li>
                            <li>Table Tennis</li>
                            <li>Squash Court</li>
                            <li>Tennis Court</li>
                            <li>Basketball Court</li>
                            <li>Sewage Treatment Plant</li>
                          </ul>
                        </Col>
                        <Col md={3} xs={6} sm={6}>
                          <ul>
                            <li>Multipurpose Hall</li>
                            <li>Steam Room</li>
                            <li>Convinience Store</li>
                            <li>Spa And Salon</li>
                            <li>100% Power Back-Up</li>
                            <li>Open Air Theatre</li>
                            <li>Organic Waste Convertor</li>
                            <li>Battery Powered Golf Buggies</li>
                          </ul>
                        </Col>
                        <Col md={3} xs={6} sm={6}>
                          <ul>
                            <li>Guest Suites</li>
                            <li>Toddler Pool</li>
                            <li>Indoor Heated Pool</li>
                            <li>Games Room [Board Games]</li>
                            <li>Dance / Yoga Room</li>
                            <li>Children’s Play Area</li>
                            <li>CCTV For Security</li>
                          </ul>
                        </Col>
                      </Row>
                    </div>

                    <div
                      className="my-3 bg-light px-3 py-3 py-md-3"
                      id="location"
                    >
                      <QELocation />
                    </div>

                    <div
                      className="my-3 bg-light px-3 py-3 py-md-3"
                      id="projects"
                    >
                      <h2 className="py-2 mb-0 fs-3 text-center text-info">
                        Total Environment Projects
                      </h2>

                      {/* <AllProjects /> */}
                      <HomeProperties />

                      <div className="">
                          <QuiteEarthFaq />
                      </div>

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
                <Contact />
              </div>
            </Col> */}
          </Row>
        </Container>
      </main>
      <QEPriceModal show={show} handleClose={handleClose}
        closeModal={closeModal} title="Call Back" />
    </div>
  );
};

export default QuiteEarth;
