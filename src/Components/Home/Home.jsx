import React, { useEffect } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import HomeSlider from './HomeSlider'
import Pursuit from '../Images/home/image-11.png'
import QE from '../Images/home/image-2.png'
import WM from '../Images/home/image-3.png'
import AR from '../Images/home/image-4.png'
import WY from '../Images/home/image-5.png'
import WF from '../Images/home/image-6.png'
import LL from '../Images/home/image-7.png'
import MF from '../Images/home/image-8.png'
import Contact from '../Includes/Contact'
import HomeModal from './HomeModal'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import HomeProperties from './HomeProperties'

const Home = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 40000)

    document.addEventListener('contextmenu', e => {
      e.preventDefault()
    })
  }, [setShow])

  return (
    <main>
      <Helmet>
        <title>
          Total Environment | Apartments | Villas | Duplex By Total Environment
          Projects in Bangalore
        </title>
        <meta
          name='description'
          content='Total Environment Project, Pursuit Radical Rhapsody , Windmill, After The Rain, In That Quiet Earth, The Magic Faraway and Workations'
        />
        <link rel='canonical' href='https://totalenviroment.in' />
      </Helmet>
      <HomeSlider />
      <div id='firstSection' className='py-3 py-md-5'>
        <Container fluid>
          <Row className='g-3'>
            <Col md={12}>
              <div className='pb-3 pb-md-5'>
                <h2 className='fs-4 py-3 text-center text-info'>
                  Total Enviroment Projects Overview
                </h2>
                <p className=''>
                  <a
                    href='/projects/quite-earth'
                    target='_blank'
                    className='text-decoration-none'
                  >
                    Total Environment In That Quiet Earth
                  </a>
                  , an exclusive community of sensitively-designed homes sites
                  off Hennur Main Road, in North Bangalore. This area is one of
                  the fastest-growing economic hubs with a well-developed social
                  infrastructure that includes reputable schools, colleges,
                  restaurants, malls, and hotels, making it a great place for
                  urban living. Each 2, 3, and 4-bedroom homes Prices Starting
                  from INR 1.49 Cr. V35 Villas starting from INR 4.85 Cr + GST,
                  each of which is crafted around you and your family, to
                  comfortably meet your functional needs and lifestyle
                  preferences call it As Total Environment Homes.{' '}
                </p>
                <p className=''>
                  <a
                    href='/projects/pursuit-of-radical-rhapsody'
                    className='text-decoration-none'
                  >
                    Total Environment Pursuit of a Radical Rhapsody
                  </a>{' '}
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
                  how this idea comes to life.{' '}
                </p>{' '}
                <p className=''>
                  <a
                    href='/projects/after-the-rain'
                    className='text-decoration-none'
                  >
                    {' '}
                    Total Environment After the Rain{' '}
                  </a>
                  is our sensitively-designed community of earth-sheltered homes
                  with green roofs that celebrate nature at its finest. Prices
                  Starting from INR 5.20 Cr - 7.48 Cr (inclusive of GST).
                  Cleverly designed to appear low and inviting from the outside,
                  while being spacious duplex homes on the inside, these homes
                  charm every step of the way and provide the always-on
                  connection with nature.{' '}
                </p>{' '}
                {/* <p className="">
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
                </p> */}
                <p className=''>
                  Located in Whitefield, the heart of India’s Silicon Valley,{' '}
                  <a
                    href='/projects/magic-faraway'
                    className='text-decoration-none'
                  >
                    Total Environment The Magic Faraway Tree
                  </a>{' '}
                  is focused on creating living spaces that are in harmony with
                  their surroundings. The Magic Faraway Tree on the Kanakapura
                  Main Road is spread over 12 acres. The property will have 434
                  residential apartments. Each home is custom designed and
                  handcrafted to suit individual lifestyles, following the
                  belief that not one size fits all. Every apartment has its own
                  garden and open terrace, allowing ample light and ventilation.
                  Phase II on the northern side of the property has 2 towers,
                  with our C20 single level apartments and D35 duplex apartments
                  Starting Prices at 2.67 Cr. all in our very special Orange
                  specifications, which include kitchen cabinetry with
                  dishwasher, hob and chimney, beds, wardrobes and study tables.
                  Each of these homes is also available in our Purple, Blue or
                  Green specifications.
                </p>
              </div>
              <h2 className='py-2 mb-0 fs-3 text-info text-center'>
                Total Environment Projects
              </h2>

              <div className=''>
                <Row className='g-3'>
                  <Col md={4}>
                    <div className='bg-white p-2 rounded shadow-sm'>
                      <div className='text-center'>
                        <a
                          href='/projects/pursuit-of-radical-rhapsody'
                          className='text-decoration-none text-dark'
                        >
                          <Image
                            src={Pursuit}
                            className='img-fluid img-thumbnail'
                            alt='Pursuit'
                          />
                        </a>
                      </div>
                      <Row>
                        <Col md={12}>
                          <div className='p-2 text-center'>
                            <a
                              href='/projects/pursuit-of-radical-rhapsody'
                              className='text-decoration-none text-dark'
                            >
                              <h2 className='fs-4'>
                                Pursuit of a Radical Rhapsody
                              </h2>
                            </a>
                            <div className=''>
                              <span className='badge bg-primary'>3BHK</span>
                              <span className='badge bg-primary mx-1'>
                                4BHK
                              </span>
                              <span className='badge bg-primary mx-1'>
                                Villas
                              </span>
                              <span className='badge bg-primary mx-1'>
                                Duplex
                              </span>
                              <span className='badge bg-primary mx-1'>
                                Penthouse
                              </span>
                            </div>
                          </div>
                          <div className='px-2 text-center'>
                            <p className='mb-0 text-center fs-6 fw-normal '>
                              Whitefield
                            </p>
                            <p className='mb-0 text-center fs-6 fw-normal '>
                              Possesion On: June 2024
                            </p>
                            <p className='mb-0 text-center fs-6 fw-normal '>
                              Size: 2430 Sq.Ft - 9869 Sq.Ft
                            </p>
                            <p className='mb-0 text-center fs-6 fw-normal '>
                              PRM/KA/RERA/1251/446/PR/220922/005261
                            </p>
                            <h2 className='fs-4 text-center mb-0 py-2'>
                              Starts @ ₹ 3.49 - 14.19 Cr* onwards
                            </h2>
                          </div>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                          <div className='text-center'>
                            <Button
                              variant='info'
                              size="sm"
                              onClick={handleShow}
                              className='w-100 py-2 text-white'
                            >
                              <i className='fas fa-download fa-beat-fade'></i>{' '}
                               Download Brochure
                            </Button>
                          </div>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                          <div className='text-center'>
                            <a
                              href='/projects/pursuit-of-radical-rhapsody'
                              className='w-100 py-2 btn btn-sm btn-info text-white'
                            >
                              View Project{' '}
                              <i className='fas fa-arrow-right'></i>
                            </a>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className='bg-white p-2 rounded shadow-sm'>
                    <div className='text-center'>
                        <a
                          href='/projects/quiet-earth'
                          className='text-decoration-none text-dark'
                        >
                          <Image
                            src={QE}
                            className='img-fluid img-thumbnail'
                            alt='QE'
                          />
                        </a>
                      </div>
                      <Row>
                        <Col md={12}>
                          <div className='p-2 text-center'>
                          <a
                              href='/projects/quiet-earth'
                              className='text-decoration-none text-dark'
                            >
                              <h2 className='fs-4'>In That Quiet Earth</h2>
                            </a>
                            <div className=''>
                              <span className='badge bg-primary'>3BHK</span>
                              <span className='badge bg-primary mx-1'>
                                4BHK
                              </span>
                              <span className='badge bg-primary mx-1'>
                                Villas
                              </span>
                            </div>
                          </div>
                          <div className='px-2 text-center'>
                            <p className='mb-0 text-center fs-6 fw-normal '>
                            Off Hennur Road
                            </p>
                            <p className='mb-0 text-center fs-6 fw-normal '>
                            Possession On : Dec 2024
                            </p>
                            <p className='mb-0 text-center fs-6 fw-normal '>
                              Size: 1431 Sq.Ft - 3430 Sq.Ft
                            </p>
                            <p className='mb-0 text-center fs-6 fw-normal '>
                            PRM/KA/RERA/1251/446/PR/060722/005044
                            </p>
                            <h2 className='fs-4 text-center mb-0 py-2'>
                              Starts @ ₹ 1.49 - 4.80 Cr* onwards
                            </h2>
                          </div>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                          <div className='text-center'>
                            <Button
                              variant='info'
                              size="sm"
                              onClick={handleShow}
                              className='w-100 py-2 text-white'
                            >
                              <i className='fas fa-download fa-beat-fade'></i>{' '}
                               Download Brochure
                            </Button>
                          </div>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                          <div className='text-center'>
                            <a
                              href='/projects/quite-earth'
                              className='w-100 py-2 btn btn-sm btn-info text-white'
                            >
                              View Project{' '}
                              <i className='fas fa-arrow-right'></i>
                            </a>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className='bg-white p-2 rounded shadow-sm'>
                    <div className='text-center'>
                        <a
                          href='/projects/after-the-rain'
                          className='text-decoration-none text-dark'
                        >
                          <Image
                            src={AR}
                            className='img-fluid img-thumbnail'
                            alt='Pursuit'
                          />
                        </a>
                      </div>
                      <Row>
                        <Col md={12}>
                          <div className='p-2 text-center'>
                          <a
                              href='/projects/quiet-earth'
                              className='text-decoration-none text-dark'
                            >
                              <h2 className='fs-4'>After The Rain</h2>
                            </a>
                            <div className=''>
                              <span className='badge bg-primary'>3BHK</span>
                              <span className='badge bg-primary mx-1'>
                                4BHK
                              </span>
                              <span className='badge bg-primary mx-1'>
                                Villas
                              </span>
                            </div>
                          </div>
                          <div className='px-2 text-center'>
                            <p className='mb-0 text-center fs-6 fw-normal '>
                            Yelahanka
                            </p>
                            <p className='mb-0 text-center fs-6 fw-normal '>
                            Possesion On: March 2024
                            </p>
                            <p className='mb-0 text-center fs-6 fw-normal '>
                              Size: 5120 Sq.Ft - 5924 Sq.Ft
                            </p>
                            <p className='mb-0 text-center fs-6 fw-normal '>
                            PRM/KA/RERA/1251/446/PR/171014/000433
                            </p>
                            <h2 className='fs-4 text-center mb-0 py-2'>
                              Starts @ ₹ 5.17 - 8 Cr* onwards
                            </h2>
                          </div>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                          <div className='text-center'>
                            <Button
                              variant='info'
                              size="sm"
                              onClick={handleShow}
                              className='w-100 py-2 text-white'
                            >
                              <i className='fas fa-download fa-beat-fade'></i>{' '}
                               Download Brochure
                            </Button>
                          </div>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                          <div className='text-center'>
                            <a
                              href='/projects/after-the-rain'
                              className='w-100 py-2 btn btn-sm btn-info text-white'
                            >
                              View Project{' '}
                              <i className='fas fa-arrow-right'></i>
                            </a>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className='bg-white p-2 rounded shadow-sm'>
                    <div className='text-center'>
                        <a
                          href='/projects/magic-faraway'
                          className='text-decoration-none text-dark'
                        >
                          <Image
                            src={MF}
                            className='img-fluid img-thumbnail'
                            alt='Pursuit'
                          />
                        </a>
                      </div>
                      <Row>
                        <Col md={12}>
                          <div className='p-2 text-center'>
                          <a
                              href='/projects/quiet-earth'
                              className='text-decoration-none text-dark'
                            >
                              <h2 className='fs-4'>The Magic Faraway</h2>
                            </a>
                            <div className=''>
                              <span className='badge bg-primary'>3BHK</span>
                              <span className='badge bg-primary mx-1'>
                                Appartment
                              </span>
                              <span className='badge bg-primary mx-1'>
                                Duplex
                              </span>
                            </div>
                          </div>
                          <div className='px-2 text-center'>
                            <p className='mb-0 text-center fs-6 fw-normal '>
                            Kanakapura Road
                            </p>
                            <p className='mb-0 text-center fs-6 fw-normal '>
                            Possesion On: Jun 2024
                            </p>
                            <p className='mb-0 text-center fs-6 fw-normal '>
                              Size: 2753 Sq.Ft - 4498 Sq.Ft
                            </p>
                            <p className='mb-0 text-center fs-6 fw-normal '>
                            PRM/KA/RERA/1251/446/PR/171014/000433
                            </p>
                            <h2 className='fs-4 text-center mb-0 py-2'>
                              Starts @ ₹ 2.64 - 4.57 Cr* onwards
                            </h2>
                          </div>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                          <div className='text-center'>
                            <Button
                              variant='info'
                              size="sm"
                              onClick={handleShow}
                              className='w-100 py-2 text-white'
                            >
                              <i className='fas fa-download fa-beat-fade'></i>{' '}
                               Download Brochure
                            </Button>
                          </div>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                          <div className='text-center'>
                            <a
                              href='/projects/magic-faraway'
                              className='w-100 py-2 btn btn-sm btn-info text-white'
                            >
                              View Project{' '}
                              <i className='fas fa-arrow-right'></i>
                            </a>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className='bg-white p-2 rounded shadow-sm'>
                    <div className='text-center'>
                        <a
                          href='/projects/wind-mill'
                          className='text-decoration-none text-dark'
                        >
                          <Image
                            src={WM}
                            className='img-fluid img-thumbnail'
                            alt='Pursuit'
                          />
                        </a>
                      </div>
                      <Row>
                        <Col md={12}>
                          <div className='p-2 text-center'>
                          <a
                              href='/projects/quiet-earth'
                              className='text-decoration-none text-dark'
                            >
                              <h2 className='fs-4'>Windmill Of Your Mind</h2>
                            </a>
                            <div className=''>
                              <span className='badge bg-primary mx-1'>
                                Appartment
                              </span>
                              <span className='badge bg-primary mx-1'>
                                Penthouse
                              </span>
                            </div>
                          </div>
                          <div className='px-2 text-center'>
                            <p className='mb-0 text-center fs-6 fw-normal '>
                            Whitefield
                            </p>
                            <p className='mb-0 text-center fs-6 fw-normal '>
                            Possesion On: Ready to Move
                            </p>
                            <p className='mb-0 text-center fs-6 fw-normal '>
                              Size: 5924 Sq.Ft
                            </p>
                            <p className='mb-0 text-center fs-6 fw-normal '>
                            PRM/KA/RERA/1251/446/PR/171014/000433
                            </p>
                            <h2 className='fs-4 text-center mb-0 py-2'>
                              Starts @ ₹ 6.04 Cr* onwards
                            </h2>
                          </div>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                          <div className='text-center'>
                            <Button
                              variant='info'
                              size="sm"
                              onClick={handleShow}
                              className='w-100 py-2 text-white'
                            >
                              <i className='fas fa-download fa-beat-fade'></i>{' '}
                               Download Brochure
                            </Button>
                          </div>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                          <div className='text-center'>
                          <a
                                  href='/projects/wind-mill'
                                  className='w-100 py-2 btn btn-sm btn-info text-white'
                                >
                                  View Project{' '}
                                  <i className='fas fa-arrow-right'></i>
                                </a>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className='bg-white p-2 rounded shadow-sm'>
                    <div className='text-center'>
                        <a
                          onClick={handleShow}
                          className='text-decoration-none text-dark'
                        >
                          <Image
                            src={WF}
                            className='img-fluid img-thumbnail'
                            alt='Pursuit'
                          />
                        </a>
                      </div>
                      <Row>
                        <Col md={12}>
                          <div className='p-2 text-center'>
                          <a
                              href='/projects/quiet-earth'
                              className='text-decoration-none text-dark'
                            >
                              <h2 className='fs-4'>Workcations</h2>
                            </a>
                            <div className=''>
                              <span className='badge bg-primary mx-1'>
                                Workations
                              </span>
                            </div>
                          </div>
                          <div className='px-2 text-center'>
                            <p className='mb-0 text-center fs-6 fw-normal '>
                            Whitefield, Yelahanka
                            </p>
                            <p className='mb-0 text-center fs-6 fw-normal '>
                            Possesion On: July 2023
                            </p>
                            <p className='mb-0 text-center fs-6 fw-normal '>
                              Size: - Sq.Ft
                            </p>
                            <p className='mb-0 text-center fs-6 fw-normal '>
                            -
                            </p>
                            <h2 className='fs-4 text-center mb-0 py-2'>
                              Starts @ ₹ 60 L* onwards
                            </h2>
                          </div>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                          <div className='text-center'>
                            <Button
                              variant='info'
                              size="sm"
                              onClick={handleShow}
                              className='w-100 py-2 text-white'
                            >
                              <i className='fas fa-download fa-beat-fade'></i>{' '}
                               Download Brochure
                            </Button>
                          </div>
                        </Col>
                        <Col md={6} sm={6} xs={6}>
                          <div className='text-center'>
                          <a
                                  onClick={handleShow}
                                  className='w-100 py-2 btn btn-sm btn-info text-white'
                                >
                                  View Project{' '}
                                  <i className='fas fa-arrow-right'></i>
                                </a>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  
                  
                  {/* <Col md={4}>
                    <div className='bg-white p-2 rounded shadow-sm'>
                      <div className='text-center'>
                        <a
                          onClick={handleShow}
                          className='text-decoration-none text-dark'
                        >
                          <Image
                            src={WY}
                            className='img-fluid img-thumbnail'
                            alt='Pursuit'
                          />
                        </a>
                      </div>
                      <Row>
                        <Col md={12}>
                          <div className='p-2'>
                            <a
                              onClick={handleShow}
                              className='text-decoration-none text-dark'
                            >
                              <h2 className='fs-4'>Workcations - Yelahanka</h2>
                            </a>
                            <div className='pb-2'>
                              <span className='badge bg-primary'>
                                Workations
                              </span>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={7}>
                          <div className='px-2'>
                            <small className='mb-0 text-center text-md-start'>
                              Workcations - Yelahanka
                            </small>
                            <br />
                            <small className='mb-0 text-center text-md-start'>
                              Possesion On: --
                            </small>
                            <h2 className='fs-4 text-center mb-0 py-2'>
                              ₹ 50L Onwards
                            </h2>
                          </div>
                        </Col>
                        <Col md={5} className='align-self-end'>
                          <div className=''>
                            <Row>
                              <Col md={12} sm={6} xs={6}>
                                <Button
                                  variant='primary'
                                  size='sm'
                                  onClick={handleShow}
                                  className='w-100 mt-2 px-1'
                                >
                                  <i className='fas fa-download fa-beat-fade'></i>{' '}
                                  Download Brochure
                                </Button>
                              </Col>
                              <Col md={12} sm={6} xs={6}>
                                <a
                                  onClick={handleShow}
                                  className='w-100 mt-2 px-1 btn btn-sm btn-info text-white'
                                >
                                  View Project{' '}
                                  <i className='fas fa-arrow-right'></i>
                                </a>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col> */}
                </Row>
              </div>
              <div className='p-2'>
                <h1 className='text-center py-2 pt-md-5 fs-2'>
                  Total Environment Homes
                </h1>
                <h3>
                  With just 10,000 rupees and a dream, Total Environment was
                  founded by Kamal Sagar.
                </h3>
                <p className='py-3 py-md-2'>
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
            {/* <Col md={4}>
              <Contact />
            </Col> */}
          </Row>
        </Container>
      </div>
      <HomeModal
        show={show}
        handleClose={handleClose}
        title='Download Brochure'
      />
    </main>
  )
}

export default Home
