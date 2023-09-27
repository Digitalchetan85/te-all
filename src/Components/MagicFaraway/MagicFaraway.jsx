import React from "react";
import { Button, Col, Container, Image, Nav, Row } from "react-bootstrap";
import Contact from "../Includes/Contact";
import Info from "../Includes/Info";
import PaymentPlan from "../Pursuit/PaymentPlan";
import PricingPlan from "../Pursuit/PricingPlan";
import { useState } from "react";
import HomeModal from "../Home/HomeModal";
import { Helmet } from "react-helmet";
import AllProjects from "../QuiteEarth/AllProjects";
import MagicFarawaySlider from "./MagicFarawaySlider";
import MagicFarawayMasterPlan from "./MagicFarawayMasterPlan";
import MagicFarawayLocation from "./MagicFarawayLocation";
import MagicFarawayFloorPlans from "./MagicFarawayFloorPlans";
import MagicFarawayPriceModal from "./MagicFarawayPriceModal";
import MagicFareInfo from "./MagicFareInfo";
import { useEffect } from "react";
import HomeProperties from "../Home/HomeProperties";
import ContactAlt from "../Includes/ContactAlt";

const MagicFaraway = () => {
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
      <MagicFarawaySlider />
      <Helmet>
        <title>Total Environment Project | The Magic Faraway Tree</title>
        <meta
          name="description"
          content="Total Environment Project, The Magic Faraway Tree. The Magic Faraway Tree on the
          Kanakapura Main Road is spread over 12 acres. The property will have 434 residential apartments."
        />
        <link
          rel="canonical"
          href="https://totalenviroment.in/projects/Magic-Faraway.pdf"
        />
      </Helmet>

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
                          <div className="">
                            <h2 className="py-3 text-center fs-4 text-info d-block d-md-none">
                              About The Magic Faraway Tree
                            </h2>
                            <h2 className="py-3 text-center fs-4 text-info d-none d-md-block">
                              About Total Environment The Magic Faraway Tree
                            </h2>
                            <p>
                              Total Environment is focused on creating living
                              spaces that are in harmony with their
                              surroundings. The Magic Faraway Tree on the
                              Kanakapura Main Road is spread over 12 acres. The
                              property will have 434 residential apartments.
                              Each home is custom designed and handcrafted to
                              suit individual lifestyles, following the belief
                              that not one size fits all. Every apartment has
                              its own garden and open terrace, allowing ample
                              light and ventilation.
                            </p>
                            <p>
                              The Magic Faraway Tree takes its name from the
                              beautiful old tree on the edge of the property on
                              Kanakapura Road, just 200 meters from the NICE
                              corridor and adjacent to the upcoming Metro
                              Station, well connected with Electronics City,
                              Hosur Road, Bannerghatta Road as well as the
                              Industrial areas of Peenya and Bidadi. The
                              property is elevated, with greenery all around,
                              overlooking small hillocks towards the south.
                            </p>

                            <p>
                              Phase II on the northern side of the property has
                              2 towers, with our C20 single level apartments and
                              D35 duplex apartments, all in our very special
                              Orange specifications, which include kitchen
                              cabinetry with dishwasher, hob and chimney, beds,
                              wardrobes and study tables. Each of these homes is
                              also available in our Purple, Blue or Green
                              specifications.
                            </p>
                            <p>
                              The C20 home is designed as a simple “L” in plan,
                              with 4 such homes placed back to back, forming a
                              “plus” shape in a block. This unique layout
                              coupled with large glass panels, offers clear
                              unobstructed views of the outside, from every room
                              and at the same time open out onto a landscaped
                              terrace garden placed inside the L. The gardens
                              run in alternate directions on alternate floors,
                              for the required natural light.
                            </p>
                            <p>
                              These exceptional homes have been created for
                              people who share our passion for design and
                              quality. A host of innovative features have been
                              introduced to create spaces that are smart and
                              modern, yet warm and inviting.
                            </p>
                            <p>
                              The D35 duplex homes are the closest you can get
                              to a bungalow on the ground. Designed to wrap
                              around a large garden, deck and waterbody, these
                              homes are intimate and warm yet spacious and
                              cheerful with large glass panels that bring in
                              natural light.
                            </p>
                            <p>
                              The upper level houses the master bedroom suite,
                              complete with a walk-in wardrobe and a spacious
                              bathroom overlooking the garden below. Also housed
                              on this floor, are the children’s bedroom with
                              attached bathroom, as well as a study and a family
                              space which can easily convert into a fourth
                              bedroom through our customisation process.
                            </p>
                            <p>
                              Warm, earthy materials, carefully crafted
                              finishes, little details such as bathroom doors
                              with glass and wood louvres, and the ability to
                              customize every space to suit individual needs,
                              make this a very special home.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>

                    <div
                      className="my-3 py-3 py-md-5 bg-light shadow"
                      id="master-plan"
                    >
                      
                      <div className="row">
                        <div className="col-md-8">  
                          <MagicFarawayMasterPlan />
                        </div>
                        <div className="col-md-4 align-self-center">
                          <ContactAlt />
                        </div>
                      </div>
                    </div>

                    <div className="my-3 py-3 py-md-5 bg-light" id="floor-plan">
                      <MagicFarawayFloorPlans />
                    </div>

                    {/* <div
                      className="my-3 py-3 py-md-5 px-3 bg-light"
                      id="payment"
                    >
                      <PaymentPlan />
                    </div>

                    <div
                      className="my-3 py-3 py-md-5 bg-light"
                      id="pricing-plan"
                    >
                      <PricingPlan />
                    </div> */}

                    <div
                      className="my-3 bg-light border-start border-5 border-info"
                      id="info"
                    >
                      <MagicFareInfo />
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
                          The Magic Faraway Tree - Amenities
                        </h2>
                        <h2 className="text-center py-md-3 py-2 text-info fs-3 d-none d-md-block">
                          Total Environment The Magic Faraway Tree - Amenities
                        </h2>
                        <Col md={4} xs={6} className="align-self-center">
                          <ul>
                            <li>Swimming Pool</li>
                            <li>Billiards</li>
                            <li>Table Tennis</li>
                            <li>Tennis Courts</li>
                            <li>Multipurpose Hall </li>
                          </ul>
                        </Col>
                        <Col md={4} xs={6}>
                          <ul>
                            <li>Board Games</li>
                            <li>Squash Courts</li>
                            <li>Well-equipped Gymnasium</li>
                            <li>Toddlers' Pool Well-equipped</li>
                            <li>Children's Play Area & Central Greens</li>
                          </ul>
                        </Col>
                      </Row>
                    </div>

                    <div
                      className="my-3 bg-light px-3 py-3 py-md-3"
                      id="location"
                    >
                      <MagicFarawayLocation />
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
      <MagicFarawayPriceModal show={show} handleClose={handleClose} 
        closeModal={closeModal} title="Call Back" />
    </div>
  );
};

export default MagicFaraway;
