import React, { useState } from "react";
import {
  Col,
  Container,
  Nav,
  Navbar,
  Row,
  Button,
  Offcanvas,
} from "react-bootstrap";

const HomepageHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleCloseMobileMenu = () => setShowMobileMenu(false);
  const handleShowMobileMenu = () => setShowMobileMenu(true);

  return (
    <header className="header-container">
      <Container fluid className="px-0">
        <Row className="align-items-center g-0">
          <Col xs={9} md={3} className="ps-3 ps-md-4">
            <div className="header-logo">
              <img
                src="/assets/images/logo.png"
                alt="Explore Islam Logo"
                className="img-fluid"
              />
            </div>
          </Col>

          <Col md={7} className="text-center d-none d-md-block">
            <Navbar expand="md" className="header-navbar">
              <Nav className="w-100 justify-content-center">
                <Nav.Link href="/" className="header-nav-link">
                  Home
                </Nav.Link>
                <Nav.Link href="/about-islam" className="header-nav-link">
                  About Islam
                </Nav.Link>
                <Nav.Link href="/how-it-works" className="header-nav-link">
                  How It Works
                </Nav.Link>
              </Nav>
            </Navbar>
          </Col>

          <Col md={2} className="pe-3 pe-md-4 text-end d-none d-md-block">
            <Button href="/login" className="header-login-btn">
              Log In
            </Button>
          </Col>

          <Col xs={3} className="text-end d-md-none">
            <button
              className="header-mobile-toggle"
              onClick={handleShowMobileMenu}
              aria-label="Toggle navigation"
            >
              <span className="toggle-bar"></span>
              <span className="toggle-bar"></span>
              <span className="toggle-bar"></span>
            </button>
          </Col>
        </Row>
      </Container>

      <Offcanvas
        show={showMobileMenu}
        onHide={handleCloseMobileMenu}
        placement="start"
        className="header-mobile-menu"
      >
        <Offcanvas.Header closeButton className="mobile-menu-header">
          <Offcanvas.Title>
            <img
              src="/assets/images/logo.png"
              alt="Explore Islam Logo"
              className="mobile-menu-logo"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="mobile-menu-body">
          <Nav className="flex-column">
            <Nav.Link
              href="/"
              className="mobile-menu-link"
              onClick={handleCloseMobileMenu}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/about-islam"
              className="mobile-menu-link"
              onClick={handleCloseMobileMenu}
            >
              About Islam
            </Nav.Link>
            <Nav.Link
              href="/how-it-works"
              className="mobile-menu-link"
              onClick={handleCloseMobileMenu}
            >
              How It Works
            </Nav.Link>
            <Button
              href="/login"
              className="mobile-menu-login-btn"
              onClick={handleCloseMobileMenu}
            >
              Log In
            </Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default HomepageHeader;
