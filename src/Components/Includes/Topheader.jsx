import React from "react";
import { useState } from "react";
import {
  Button,
  Container,
  Form,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import HomeModal from "../Home/HomeModal";
import Logo from "../Images/te-logo.png";

const Topheader = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          bg="white"
          expand={expand}
          className="sticky-top shadow-sm"
          id="navbar"
        >
          <Container>
            <Navbar.Brand href="/">
              <Image src={Logo} className="img-fluid" alt="Logo" />
            </Navbar.Brand>
            <a href="tel:08095999000" className="btn-lg text-decoration-none d-none d-md-block btn-info text-white fs-6"><i className="fa fa-phone-volume"></i> +91 8095 999 000</a>
            <a href="#" onClick={handleShow} className="btn-lg text-decoration-none d-none d-md-block btn-info text-white text-uppercase fa-beat-fade fs-6">Upcoming Projects</a>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav
                  className="justify-content-end flex-grow-1 pe-3 text-center"
                  id="navbar"
                >
                  <a href="tel:08095999000" className="btn btn-primary w-100"><i className="fa fa-phone-volume"></i> +91 8095 999 000</a>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/projects/quite-earth">
                    In That Quiet Earth
                  </Nav.Link>
                  <Nav.Link href="/projects/pursuit-of-radical-rhapsody">
                    Pursuit Radical Rhapsody
                  </Nav.Link>
                  <Nav.Link href="/projects/after-the-rain">
                    After The Rain
                  </Nav.Link>
                  <Nav.Link href="/projects/magic-faraway">The Magic Farawary</Nav.Link>
                  <Nav.Link href="#" onClick={handleShow}>Learning To Fly</Nav.Link>
                  <Nav.Link href="/projects/wind-mill">
                    Windmills Of Your Mind
                  </Nav.Link>
                  <Nav.Link href="#" onClick={handleShow}>Workations - Whitefield</Nav.Link>
                  <Nav.Link href="#" onClick={handleShow}>Upcoming Plots</Nav.Link>
                  {/* <NavDropdown
                    title="Projects"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
                <Button onClick={handleShow} className="btn btn-primary w-100">Instant Call Back</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          <HomeModal show={show} handleClose={handleClose} title="Call Back" />
        </Navbar>
      ))}
    </>
  );
};

export default Topheader;
