import React, { useEffect } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import HomeSlider from "./HomeSlider";
import Pursuit from "../Images/home/image-1.png";
import QE from "../Images/home/image-2.png";
import WM from "../Images/home/image-3.png";
import AR from "../Images/home/image-4.png";
import WY from "../Images/home/image-5.png";
import WF from "../Images/home/image-6.png";
import LL from "../Images/home/image-7.png";
import MF from "../Images/home/image-8.png";
import Contact from "../Includes/Contact";
import HomeModal from "./HomeModal";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {

    // setTimeout(() => {
    //   setShow(true);
    // }, 40000);

    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  })

  return (
    <main>
      {/* <Helmet>
        <title>Total Environment | Apartments | Villas | Duplex By Total Environment Projects in Bangalore</title>
        <meta
          name="description"
          content="Total Environment Project, Pursuit Radical Rhapsody , Windmill, After The Rain, In That Quiet Earth, The Magic Faraway and Workations"
        />
        <link rel="canonical" href="https://totalenviroment.in" />
      </Helmet> */}
      <HomeSlider />
      <div id="firstSection" className="py-3 py-md-5">
        <Container fluid>
          <Row className="g-3">
            <Col md={8}>
              <div className="pb-3 pb-md-5">
                <h2 className="fs-4 py-3 text-center text-info">
                  Total Enviroment Projects Overview
                </h2>
                <p className="">
                  <a
                    href="/projects/quite-earth"
                    target="_blank"
                    className="text-decoration-none"
                  >
                    Total Environment In That Quiet Earth
                  </a>
                  , an exclusive community of sensitively-designed homes sites
                  off Hennur Main Road, in North Bangalore. This area is one of
                  the fastest-growing economic hubs with a well-developed social
                  infrastructure that includes reputable schools, colleges,
                  restaurants, malls, and hotels, making it a great place for
                  urban living. Each 2, 3, and 4-bedroom homes Prices Starting
                  from INR 1.33 Cr. V35 Villas starting from INR 4.56 Cr + GST,
                  each of which is crafted around you and your family, to
                  comfortably meet your functional needs and lifestyle
                  preferences call it As Total Environment Homes.{" "}
                </p>
                <p className="">
                  <a href="/projects/pursuit-of-radical-rhapsody" className="text-decoration-none">
                    Total Environment Pursuit of a Radical Rhapsody
                  </a>{" "}
                  Located in Whitefield, the heart of India’s Silicon Valley, is
                  an exclusive community of apartments, beautiful homes with
                  green roofs, and a central community park. Prices Starting for
                  C20 3 Bed from INR 2.99 Cr. Sitting on the edge of a small
                  lake, the project includes our signature earth-sheltered homes
                  with four bedrooms, our popular C20 layout, our unique
                  lake-facing L30 three-bedroom apartments, and our special L45
                  four-bedroom apartments that step back from the lake with
                  open-to-sky gardens. Pursuit of a Radical Rhapsody was built
                  with an innovative idea in mind: a tree on every terrace, even
                  as high as on the 27th floor. In the project’s L30 and L45
                  apartments, every garden is designed to house a tree in a
                  specially developed tree tub. We invite you to visit and see
                  how this idea comes to life.{" "}
                </p>{" "}
                <p className="">
                  <a href="/projects/after-the-rain" className="text-decoration-none">
                    {" "}
                    Total Environment After the Rain{" "}
                  </a>
                  is our sensitively-designed community of earth-sheltered homes
                  with green roofs that celebrate nature at its finest. Prices
                  Starting from INR 5.17 Cr (inclusive of GST). Cleverly
                  designed to appear low and inviting from the outside, while
                  being spacious duplex homes on the inside, these homes charm
                  every step of the way and provide the always-on connection
                  with nature.{" "}
                </p>{" "}
                <p className="">
                  Located in Whitefield, the heart of India’s Silicon Valley,{" "}
                  <a href="/projects/wind-mill" className="text-decoration-none">
                    Total Environment Windmills
                  </a>{" "}
                  of Your Mind is an exclusive community of apartments and
                  earth-sheltered homes with green roofs. Prices Starting from
                  INR 6.4 Cr. This community sits on the edge of a small lake
                  and features a central park, a beautiful earth-sheltered
                  clubhouse, and a lush-green, expansive landscape. With the
                  goal of redefining large-scale housing, Windmills of Your Mind
                  provides a blueprint for high quality, sustainable community
                  living. The aesthetic and construction quality of these homes
                  is unparalleled. Right from the green roofs of the villas and
                  the community center, to the landscaped gardens of apartments,
                  Nature resonates throughout this community. Almost all living
                  spaces in these homes open onto private gardens while large
                  glass windows and French doors ensure that the living spaces
                  are always awash with natural light.
                </p>
              </div>
              <h2 className="py-2 mb-0 fs-3 text-info text-center">
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
                          src={Pursuit}
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
                        <span className="badge bg-primary mx-1">4BHK</span>
                        <span className="badge bg-primary mx-1">Villas</span>
                        <span className="badge bg-primary mx-1">Duplex</span>
                      </div>
                      <p className="mb-0 text-center text-md-start">
                        Whitefield, Bangalore
                      </p>
                      <p className="mb-0 text-center text-md-start">
                        Possesion On: Sept 2023 Onwards
                      </p>
                    </div>
                  </Col>
                  <Col md={4} className="align-self-center">
                    <div className="text-center py-2">
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        className="w-100 mt-2 text-uppercase"
                      >
                        <i className="fa fa-phone-volume"></i> Instant Callback
                      </Button>
                      <h2 className="fs-4 text-center mb-0 py-2">
                        ₹ 3.18Cr* Onwards
                      </h2>
                      <a
                        href="/projects/pursuit-of-radical-rhapsody"
                        className="w-100 mt-2 btn btn-info text-uppercase text-white"
                      >
                        Read more <i className="fas fa-arrow-right"></i>
                      </a>
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
                        <h2 className="fs-5 w-100">In That Quiet Earth</h2>
                      </a>
                      <div className="pb-2">
                        <span className="badge bg-primary">2BHK</span>
                        <span className="badge bg-primary mx-1">3BHK</span>
                        <span className="badge bg-primary mx-1">4BHK</span>
                        <span className="badge bg-primary mx-1">Villa</span>
                      </div>
                      <p className="mb-0 text-center text-md-start">
                        Off Hennur Road, Bangalore
                      </p>
                      <p className="mb-0 text-center text-md-start">
                        Possession On : Jan 2024 
                      </p>
                    </div>
                  </Col>
                  <Col md={4} className="align-self-center">
                    <div className="text-center py-2">
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        className="w-100 mt-2 text-uppercase"
                      >
                        <i className="fa fa-phone-volume"></i> Instant Callback
                      </Button>
                      <h2 className="fs-4 text-center">₹ 1.33Cr* Onwards</h2>
                      <a
                        href="/projects/quite-earth"
                        className="w-100 mt-2 btn btn-info text-uppercase text-white"
                      >
                        Read more <i className="fas fa-arrow-right"></i>
                      </a>
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
                        <td>1.33Cr*</td>
                      </tr>
                      <tr>
                        <td>3 BHK (H20)</td>
                        <td>2305</td>
                        <td>2.25Cr*</td>
                      </tr>
                      <tr>
                        <td>3 BHK Villa (V35)</td>
                        <td>3430</td>
                        <td>4.56Cr*</td>
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
                        <h2 className="fs-5 w-100">Windmill Of Your Mind</h2>
                      </a>
                      <span className="badge bg-primary">Duplex</span>
                      <span className="badge bg-primary mx-1">Penthouse</span>
                      <p className="mb-0 text-center text-md-start">
                        Whitefield, Bangalore
                      </p>
                      <p className="mb-0 text-center text-md-start">
                        Possesion On: Ready to Move
                      </p>
                    </div>
                  </Col>
                  <Col md={4} className="align-self-center">
                    <div className="text-center py-2">
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        className="w-100 mt-2 text-uppercase"
                      >
                        <i className="fa fa-phone-volume"></i> Instant Callback
                      </Button>
                      <h2 className="fs-4 text-center mb-0 py-2">
                        ₹ 6.4Cr* Onwards
                      </h2>
                      <a
                        href="/projects/wind-mill"
                        className="w-100 mt-2 btn btn-info text-uppercase text-white"
                      >
                        Read more <i className="fas fa-arrow-right"></i>
                      </a>
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
                        <td>6.4Cr*</td>
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
                      <span className="badge bg-primary mx-1">Villas</span>
                      <p className="mb-0 text-center text-md-start">
                        Yelahanka, Bangalore
                      </p>
                      <p className="mb-0 text-center text-md-start">
                        Possesion On: March 2024 Onwards
                      </p>
                    </div>
                  </Col>
                  <Col md={4} className="align-self-center">
                    <div className="text-center py-2">
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        className="w-100 mt-2 text-uppercase"
                      >
                        <i className="fa fa-phone-volume"></i> Instant Callback
                      </Button>
                      <h2 className="fs-4 text-center mb-0 py-2">
                        ₹ 5.17Cr* Onwards
                      </h2>
                      <a
                        href="/projects/after-the-rain"
                        className="w-100 mt-2 btn btn-info text-uppercase text-white"
                      >
                        Read more <i className="fas fa-arrow-right"></i>
                      </a>
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
                        <td>3 BHK (V30)</td>
                        <td>3200</td>
                        <td>5.17Cr*</td>
                      </tr>
                      <tr>
                        <td>4 BHK (V50)</td>
                        <td>5249</td>
                        <td>7.45Cr*</td>
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
                        src={LL}
                        onClick={handleShow}
                        className="img-fluid img-thumbnail"
                        alt="Pursuit"
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="text-center text-md-start py-2">
                      <h2 className="fs-5 w-100" onClick={handleShow}>
                        Learning To Fly
                      </h2>
                      <div className="pb-2">
                        <span className="badge bg-primary">Apartment</span>
                      </div>
                      <p className="mb-0 text-center text-md-start">
                        JP Nagar, Bangalore
                      </p>
                      <p className="mb-0 text-center text-md-start">
                        Possesion On: Ready to Move
                      </p>
                    </div>
                  </Col>
                  <Col md={4} className="align-self-center">
                    <div className="text-center py-2">
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        className="w-100 mt-2 text-uppercase"
                      >
                        <i className="fa fa-phone-volume"></i> Instant Callback
                      </Button>
                      <h2 className="fs-4 text-center mb-0 py-2">
                        Price On Request
                      </h2>
                      <Button
                        variant="info"
                        onClick={handleShow}
                        className="w-100 mt-2 text-uppercase text-white"
                      >
                        Read more <i className="fas fa-arrow-right"></i>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="p-3 bg-white my-2">
                <Row>
                  <Col md={4}>
                    <div className="text-center">
                      <Image
                        src={MF}
                        onClick={handleShow}
                        className="img-fluid img-thumbnail"
                        alt="Pursuit"
                      />
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="text-center text-md-start py-2">
                      <h2 className="fs-5 w-100" onClick={handleShow}>
                        The Magic Faraway
                      </h2>
                      <div className="pb-2">
                        <span className="badge bg-primary">Apartment</span>
                      </div>
                      <p className="mb-0 text-center text-md-start">
                        Kanakapura Road, Bangalore
                      </p>
                      <p className="mb-0 text-center text-md-start">
                        Possesion On: Ready to Move
                      </p>
                    </div>
                  </Col>
                  <Col md={4} className="align-self-center">
                    <div className="text-center py-2">
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        className="w-100 mt-2 text-uppercase"
                      >
                        <i className="fa fa-phone-volume"></i> Instant Callback
                      </Button>
                      <h2 className="fs-4 text-center mb-0 py-2">
                        Price on Request
                      </h2>
                      <a
                        href="/projects/magic-faraway"
                        className="w-100 mt-2 btn btn-info text-uppercase text-white"
                      >
                        Read more <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </Col>
                </Row>
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
                        <span className="badge bg-primary">Workations</span>
                      </div>
                      <p className="mb-0 text-center text-md-start">
                        Whitefield, Bangalore
                      </p>
                    </div>
                  </Col>
                  <Col md={4} className="align-self-center">
                    <div className="text-center py-2">
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        className="w-100 mt-2 text-uppercase"
                      >
                        <i className="fa fa-phone-volume"></i> Instant Callback
                      </Button>
                      <h2 className="fs-4 text-center mb-0 py-2">
                        Price On Request
                      </h2>
                      <Button
                        variant="info"
                        onClick={handleShow}
                        className="w-100 mt-2 text-uppercase text-white"
                      >
                        Read more <i className="fas fa-arrow-right"></i>
                      </Button>
                    </div>
                  </Col>
                </Row>
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
                        <span className="badge bg-primary">Workations</span>
                      </div>
                      <p className="mb-0 text-center text-md-start">
                        Yelahanka, Bangalore
                      </p>
                    </div>
                  </Col>
                  <Col md={4} className="align-self-center">
                    <div className="text-center py-2">
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        className="w-100 mt-2 text-uppercase"
                      >
                        <i className="fa fa-phone-volume"></i> Instant Callback
                      </Button>
                      <h2 className="fs-4 text-center mb-0 py-2">
                        Price on Request
                      </h2>
                      <Button
                        variant="info"
                        onClick={handleShow}
                        className="w-100 mt-2 text-uppercase text-white"
                      >
                        Read more <i className="fas fa-arrow-right"></i>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="p-2">
                <h1 className="text-center py-2 pt-md-5 fs-2">
                  Total Environment Homes
                </h1>
                <h3>
                  With just 10,000 rupees and a dream, Total Environment was
                  founded by Kamal Sagar.
                </h3>
                <p className="py-3 py-md-2">
                  Over two decades later, Total Environment has delivered more
                  than 4 million square feet to over 1,200 customers across
                  dozens of projects in Bangalore, Hyderabad and Pune. While
                  these numbers demonstrate our scale of operations and our
                  ability to influence modern housing, they only tell one side
                  of the story. What truly moves and inspires us is the love for
                  design and the joy of giving people a place to proudly call
                  home. Our commitment to further design thinking and practices
                  will always be first and foremost, no matter what project
                  we’re embarking on.
                </p>
                <h3>Manifesto</h3>
                <p>
                  Here’s to making the places we go more beautiful, the
                  experiences we have more enjoyable, and the things we eat and
                  drink more delicious. Here’s to the passion that allows us to
                  hear music and get inspired to design a radically new space.
                  Here’s to that voice in our head that says “we can do even
                  better.” Whether it’s a home, a resort, or great food and
                  craft beer, you can expect it to be sensitively designed,
                  completely personal and totally original. Because we don’t
                  allow conventions to steer us, conveniences to mislead us or
                  commerce to define us. Instead, inspiration, intention and
                  integrity lead the way. We live by our passions and hope to
                  ignite yours.
                </p>
                <h3>Culture & Leadership Principles</h3>
                <p>
                  Successful and less successful people do not vary greatly in
                  their abilities, but only in their desire to reach their
                  potential. At Total Environment, we encourage leaders to smash
                  the glass ceilings and to never settle for mediocrity. Our
                  leaders benchmark themselves against the best in the world and
                  always lead by example.
                </p>
                <h3>Maintain High Standards</h3>
                <p>
                  Our passion is our number one currency. It drives our
                  relentless pursuit for the extraordinary and inspires us to
                  dive deep into every challenge we seek out and accept. We
                  choose meticulousness over mediocrity and always lead by
                  example.
                </p>
                <p>
                  At Total Environment, we started with a simple mission: to
                  make homes worth living in. This simple idea took us places we
                  couldn’t have initially imagined. Over two decades later, we
                  still pursue this ideal in everything we touch, make and do.
                </p>
                <p>
                  We build your home around you, just the way you want it to be,
                  just how you like to live your life, not the other way around.
                  “Our Differences” are a manifestation of these possibilities,
                  coupled with our passion for making a difference to the world.
                </p>
                {/* <Info /> */}
              </div>
            </Col>
            <Col md={4}>
              <Contact />
            </Col>
          </Row>
        </Container>
      </div>
      <HomeModal
        show={show}
        handleClose={handleClose}
        title="Download Brochure"
      />
    </main>
  );
};

export default Home;
