import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import cook from "../Images/cook.png";
import { Link } from "react-router-dom";
import "../styles/navbar-styles.scss";

function Navigationbar() {
  const [updateNavbar, setupdateNavbar] = useState(false);
  const [expand, setExpand] = useState(false);

  function scrollView(event) {
    if (window.scrollY >= 20) {
      setupdateNavbar(true);
    } else {
      setupdateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollView);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={updateNavbar ? "nav-blacked" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex" style={{ paddingTop: 9 }}>
          <img
            src={cook}
            className="nav-logo"
            alt="logo"
            style={{ paddingBottom: 3 }}
          />
          Calcipes
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            setExpand(expand ? false : "expanded");
          }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="ms-auto"
            defaultActiveKey="#home"
            style={{
              paddingLeft: "12px",
              paddingRight: "12px",
            }}
          >
            <Nav.Item
              style={{
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              <Nav.Link
                as={Link}
                to="/"
                style={{ color: "#0a0a0a", fontFamily: "Roboto" }}
                onClick={() => setExpand(false)}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              style={{
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              <Nav.Link
                as={Link}
                to="/Recipes"
                style={{ color: "#0a0a0a", fontFamily: "Roboto" }}
                onClick={() => setExpand(false)}
              >
                Recipes
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              style={{
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              <Nav.Link
                as={Link}
                to="/Authentication"
                style={{ color: "#0a0a0a", fontFamily: "Roboto" }}
                onClick={() => setExpand(false)}
              >
                Log In
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
