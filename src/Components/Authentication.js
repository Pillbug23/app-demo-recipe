import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img11 from "../Images/img_11.jpg";
import "../styles/signin-styles.scss";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";

function Authentication() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container fluid className="signin" id="home">
        <Container fluid className="signin-info" style={{ width: "120%" }}>
          <Row>
            <Col md={6} xs={12}>
              <div className="portal-image" />
            </Col>
            <Col md={6} xs={0} className="signin-screen">
              <h1 style={{ paddingTop: 40 }}>Sign in or create an account</h1>
              <Form className="signin-form-style">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <div
                    style={{ textAlign: "left", paddingTop: 5, marginLeft: 4 }}
                  >
                    <Form.Label>Email address</Form.Label>
                  </div>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <div
                    style={{ textAlign: "left", paddingTop: 5, marginLeft: 4 }}
                  >
                    <Form.Label>Password</Form.Label>
                  </div>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicButton">
                  <Button
                    variant="outline-warning"
                    size="lg"
                    type="button"
                    style={{ marginTop: 15 }}
                  >
                    Sign up with email
                  </Button>
                </Form.Group>

                <span style={{ backgroundColor: "#e2ddcc", height: 1 }}></span>
                <span className="line-break"> or </span>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </motion.div>
  );
}

export default Authentication;
