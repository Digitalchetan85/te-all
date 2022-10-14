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
import Pursuit1 from "../Images/home/image-1.png";
import QE from "../Images/home/image-2.png";
import WM from "../Images/home/image-3.png";
import AR from "../Images/home/image-4.png";
import WY from "../Images/home/image-5.png";
import WF from "../Images/home/image-6.png";
import HomeModal from "../Home/HomeModal";
import { useState } from "react";

const QuiteEarth = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <QuiteEarthSlider />

      <main>
        <Container fluid>
          <Row>
            <Col md={8}>
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

                    <div
                      className="my-3 py-3 py-md-5 bg-light shadow"
                      id="master-plan"
                    >
                      <QEMasterPlan />
                    </div>

                    <div className="my-3 py-3 py-md-5 bg-light" id="floor-plan">
                      <QEFloorPlans />
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
                      <Info />
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
                          In That Quite Earth - Amenities
                        </h2>
                        <h2 className="text-center py-md-3 py-2 text-info fs-3 d-none d-md-block">
                          Total Environment In That Quite Earth - Amenities
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
                      <div className="p-3 bg-white my-2">
                        <Row>
                          <Col md={4}>
                            <div className="text-center">
                              <a
                                href="/projects/pursuit-of-radical-rhapsody"
                                className="text-decoration-none text-dark"
                              >
                                <Image
                                  src={Pursuit1}
                                  className="img-fluid img-thumbnail"
                                  alt="Pursuit"
                                />
                              </a>
                            </div>
                          </Col>
                          <Col md={4}>
                            <div className="text-center text-md-start py-2">
                              <a
                                href="/projects/pursuit-of-radical-rhapsody"
                                className="text-decoration-none text-dark"
                              >
                                <h2 className="fs-5 w-100">
                                  Pursuit of a Radical Rhapsody
                                </h2>
                              </a>
                              <div className="pb-2">
                                <span className="badge bg-primary">3BHK</span>
                                <span className="badge bg-primary mx-1">
                                  4BHK
                                </span>
                                <span className="badge bg-primary mx-1">
                                  Villas
                                </span>
                                <span className="badge bg-primary mx-1">
                                  Duplex
                                </span>
                              </div>
                              <p className="mb-0 text-center text-md-start">
                                Whitefield, Bangalore
                              </p>
                              <p className="mb-0 text-center text-md-start">
                                Possesion On
                              </p>
                            </div>
                          </Col>
                          <Col md={4} className="align-self-center">
                            <div className="text-center py-2">
                              <h2 className="fs-4 text-center">
                                ₹ 3.06Cr* Onwards
                              </h2>
                              <Button
                                variant="primary"
                                onClick={handleShow}
                                className="w-100 mt-2 text-uppercase"
                              >
                                <i className="fa fa-phone-volume"></i> Instant
                                Callback
                              </Button>
                            </div>
                          </Col>
                        </Row>
                        <div className="table-responsive">
                          <table className="table table-hover table-striped align-middle">
                            <thead className="bg-light">
                              <tr>
                                <th>Unit</th>
                                <th>Size (Sqft)</th>
                                <th>Price</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>3 BHK (L20)</td>
                                <td>2430</td>
                                <td>3.06Cr*</td>
                              </tr>
                              <tr>
                                <td>4 BHK (L45)</td>
                                <td>5680</td>
                                <td>3.26Cr*</td>
                              </tr>
                              <tr>
                                <td>4 BHK Duplex (V50)</td>
                                <td>5129</td>
                                <td>8Cr*</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="p-3 bg-white my-2">
                        <Row>
                          <Col md={4}>
                            <div className="text-center">
                              <a
                                href="/projects/quiet-earth"
                                className="text-decoration-none text-dark"
                              >
                                <Image
                                  src={QE}
                                  className="img-fluid img-thumbnail"
                                  alt="Pursuit"
                                />
                              </a>
                            </div>
                          </Col>
                          <Col md={4}>
                            <div className="text-center text-md-start py-2">
                              <a
                                href="/projects/quiet-earth"
                                className="text-decoration-none text-dark"
                              >
                                <h2 className="fs-5 w-100">
                                  In That Quite Earth
                                </h2>
                              </a>
                              <div className="pb-2">
                                <span className="badge bg-primary">2BHK</span>
                                <span className="badge bg-primary mx-1">
                                  3BHK
                                </span>
                                <span className="badge bg-primary mx-1">
                                  4BHK
                                </span>
                                <span className="badge bg-primary mx-1">
                                  Villa
                                </span>
                              </div>
                              <p className="mb-0 text-center text-md-start">
                                Off Hennur Road, Bangalore
                              </p>
                              <p className="mb-0 text-center text-md-start">
                                Possesion On
                              </p>
                            </div>
                          </Col>
                          <Col md={4} className="align-self-center">
                            <div className="text-center py-2">
                              <h2 className="fs-4 text-center">
                                ₹ 1.33Cr* Onwards
                              </h2>
                              <Button
                                variant="primary"
                                onClick={handleShow}
                                className="w-100 mt-2 text-uppercase"
                              >
                                <i className="fa fa-phone-volume"></i> Instant
                                Callback
                              </Button>
                            </div>
                          </Col>
                        </Row>
                        <div className="table-responsive">
                          <table className="table table-hover table-striped align-middle">
                            <thead className="bg-light">
                              <tr>
                                <th>Unit</th>
                                <th>Size (Sqft)</th>
                                <th>Price</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>2 BHK (U10)</td>
                                <td>1431</td>
                                <td>3.06Cr*</td>
                              </tr>
                              <tr>
                                <td>3 BHK (H20)</td>
                                <td>2305</td>
                                <td>3.06Cr*</td>
                              </tr>
                              <tr>
                                <td>3 BHK Villa (V35)</td>
                                <td>3430</td>
                                <td>3.06Cr*</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="p-3 bg-white my-2">
                        <Row>
                          <Col md={4}>
                            <div className="text-center">
                              <a
                                href="/projects/wind-mill"
                                className="text-decoration-none text-dark"
                              >
                                <Image
                                  src={WM}
                                  className="img-fluid img-thumbnail"
                                  alt="Pursuit"
                                />
                              </a>
                            </div>
                          </Col>
                          <Col md={4}>
                            <div className="text-center text-md-start py-2">
                              <a
                                href="/projects/wind-mill"
                                className="text-decoration-none text-dark"
                              >
                                <h2 className="fs-5 w-100">
                                  Windmill Of Your Mind
                                </h2>
                              </a>
                              <span className="badge bg-primary">Duplex</span>
                              <span className="badge bg-primary mx-1">
                                Penthouse
                              </span>
                              <p className="mb-0 text-center text-md-start">
                                Whitefield, Bangalore
                              </p>
                              <p className="mb-0 text-center text-md-start">
                                Possesion On
                              </p>
                            </div>
                          </Col>
                          <Col md={4} className="align-self-center">
                            <div className="text-center py-2">
                              <h2 className="fs-4 text-center">
                                ₹ 6.4Cr* Onwards
                              </h2>
                              <Button
                                variant="primary"
                                onClick={handleShow}
                                className="w-100 mt-2 text-uppercase"
                              >
                                <i className="fa fa-phone-volume"></i> Instant
                                Callback
                              </Button>
                            </div>
                          </Col>
                        </Row>
                        <div className="table-responsive">
                          <table className="table table-hover table-striped align-middle">
                            <thead className="bg-light">
                              <tr>
                                <th>Unit</th>
                                <th>Size (Sqft)</th>
                                <th>Price</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>4 BHK Duplex (D60)</td>
                                <td>5924</td>
                                <td>3.06Cr*</td>
                              </tr>
                              <tr>
                                <td>4 BHK Penthouse (Blue)</td>
                                <td>7648</td>
                                <td>3.06Cr*</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="p-3 bg-white my-2">
                        <Row>
                          <Col md={4}>
                            <div className="text-center">
                              <a
                                href="/projects/after-the-rain"
                                className="text-decoration-none text-dark"
                              >
                                <Image
                                  src={AR}
                                  className="img-fluid img-thumbnail"
                                  alt="Pursuit"
                                />
                              </a>
                            </div>
                          </Col>
                          <Col md={4}>
                            <div className="text-center text-md-start py-2">
                              <a
                                href="/projects/after-the-rain"
                                className="text-decoration-none text-dark"
                              >
                                <h2 className="fs-5 w-100">After The Rain</h2>
                              </a>
                              <span className="badge bg-primary">4BHK</span>
                              <span className="badge bg-primary mx-1">
                                Villas
                              </span>
                              <p className="mb-0 text-center text-md-start">
                                Yelahanka, Bangalore
                              </p>
                              <p className="mb-0 text-center text-md-start">
                                Possesion On
                              </p>
                            </div>
                          </Col>
                          <Col md={4} className="align-self-center">
                            <div className="text-center py-2">
                              <h2 className="fs-4 text-center">
                                ₹ 5.17Cr* Onwards
                              </h2>
                              <Button
                                variant="primary"
                                onClick={handleShow}
                                className="w-100 mt-2 text-uppercase"
                              >
                                <i className="fa fa-phone-volume"></i> Instant
                                Callback
                              </Button>
                            </div>
                          </Col>
                        </Row>
                        <div className="table-responsive">
                          <table className="table table-hover table-striped align-middle">
                            <thead className="bg-light">
                              <tr>
                                <th>Unit</th>
                                <th>Size (Sqft)</th>
                                <th>Price</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>3 BHK (L20)</td>
                                <td>2430</td>
                                <td>3.06Cr*</td>
                              </tr>
                              <tr>
                                <td>3 BHK (L20)</td>
                                <td>2430</td>
                                <td>3.06Cr*</td>
                              </tr>
                              <tr>
                                <td>3 BHK (L20)</td>
                                <td>2430</td>
                                <td>3.06Cr*</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="p-3 bg-white my-2">
                        <Row>
                          <Col md={4}>
                            <div className="text-center">
                              <Image
                                src={WF}
                                onClick={handleShow}
                                className="img-fluid img-thumbnail"
                                alt="Pursuit"
                              />
                            </div>
                          </Col>
                          <Col md={4}>
                            <div className="text-center text-md-start py-2">
                              <h2 className="fs-5 w-100" onClick={handleShow}>
                                Workcations - Whitefield
                              </h2>
                              <div className="pb-2">
                                <span className="badge bg-primary">
                                  Workations
                                </span>
                              </div>
                              <p className="mb-0 text-center text-md-start">
                                Whitefield, Bangalore
                              </p>
                              <p className="mb-0 text-center text-md-start">
                                Possesion On
                              </p>
                            </div>
                          </Col>
                          <Col md={4} className="align-self-center">
                            <div className="text-center py-2">
                              <h2 className="fs-4 text-center">
                                Price On Request
                              </h2>
                              <Button
                                variant="primary"
                                onClick={handleShow}
                                className="w-100 mt-2 text-uppercase"
                              >
                                <i className="fa fa-phone-volume"></i> Instant
                                Callback
                              </Button>
                            </div>
                          </Col>
                        </Row>
                        <div className="table-responsive">
                          <table className="table table-hover table-striped align-middle">
                            <thead className="bg-light">
                              <tr>
                                <th>Unit</th>
                                <th>Size</th>
                                <th>Price</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>3 BHK (L20)</td>
                                <td>2430</td>
                                <td>3.06Cr*</td>
                              </tr>
                              <tr>
                                <td>3 BHK (L20)</td>
                                <td>2430</td>
                                <td>3.06Cr*</td>
                              </tr>
                              <tr>
                                <td>3 BHK (L20)</td>
                                <td>2430</td>
                                <td>3.06Cr*</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="p-3 bg-white my-2">
                        <Row>
                          <Col md={4}>
                            <div className="text-center">
                                <Image
                                  src={WY}
                                  onClick={handleShow}
                                  className="img-fluid img-thumbnail"
                                  alt="Pursuit"
                                />
                            </div>
                          </Col>
                          <Col md={4}>
                            <div className="text-center text-md-start py-2">
                              <h2 className="fs-5 w-100" onClick={handleShow}>
                                Workcations - Yelhanka
                              </h2>
                              <div className="pb-2">
                                <span className="badge bg-primary">
                                  Workations
                                </span>
                              </div>
                              <p className="mb-0 text-center text-md-start">
                                Whitefield, Bangalore
                              </p>
                              <p className="mb-0 text-center text-md-start">
                                Possesion On
                              </p>
                            </div>
                          </Col>
                          <Col md={4} className="align-self-center">
                            <div className="text-center py-2">
                              <h2 className="fs-4 text-center">
                                Price on Request
                              </h2>
                              <Button
                                variant="primary"
                                onClick={handleShow}
                                className="w-100 mt-2 text-uppercase"
                              >
                                <i className="fa fa-phone-volume"></i> Instant
                                Callback
                              </Button>
                            </div>
                          </Col>
                        </Row>
                        <div className="table-responsive">
                          <table className="table table-hover table-striped align-middle">
                            <thead className="bg-light">
                              <tr>
                                <th>Unit</th>
                                <th>Size</th>
                                <th>Price</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>3 BHK (L20)</td>
                                <td>2430</td>
                                <td>3.06Cr*</td>
                              </tr>
                              <tr>
                                <td>3 BHK (L20)</td>
                                <td>2430</td>
                                <td>3.06Cr*</td>
                              </tr>
                              <tr>
                                <td>3 BHK (L20)</td>
                                <td>2430</td>
                                <td>3.06Cr*</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
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
            <Col md={4}>
              <div className="sticky-top">
                <Contact />
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <HomeModal show={show} handleClose={handleClose} title="Call Back" />
    </div>
  );
};

export default QuiteEarth;
