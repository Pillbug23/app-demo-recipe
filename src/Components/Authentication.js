import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img11 from "../Images/img_11.jpg";
import "../styles/signin-styles.scss";
import Form from "react-bootstrap/Form";

function Authentication() {
  return (
    <Container fluid className="signin" id="home">
      <Container fluid className="signin-info" style={{ width: "120%" }}>
        <Row>
          <Col md={6} xs={12}>
            <div className="portal-image" />
          </Col>
          <Col md={6} xs={0} className="signin-screen">
            <h1 style={{ paddingTop: 50 }}>Sign in or create an account</h1>
            <Form className="signin-form-style">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <div
                  style={{ textAlign: "left", paddingTop: 10, marginLeft: 5 }}
                >
                  <Form.Label>Email address</Form.Label>
                </div>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <div
                  style={{ textAlign: "left", paddingTop: 10, marginLeft: 5 }}
                >
                  <Form.Label>Password</Form.Label>
                </div>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <span style={{ backgroundColor: "#e2ddcc", height: 1 }}></span>
              <span className="line-break"> or </span>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Authentication;
