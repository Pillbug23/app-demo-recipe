import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import styles from "../styles/footer-styles.scss";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container fluid className="bottom-footer">
        <Row>
          <Col md={4} className="built-credits">
            <h3>Built & Designed by Phillip Ly</h3>
          </Col>
          <Col md={4} className="built-credits"></Col>
          <Col md={4} className="footer-icons-body">
            <ul className="footer-icons">
              <li className="icons">
                <a
                  href="https://github.com/Pillbug23"
                  style={{ color: "white" }}
                  rel="github-ref"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="icons">
                <a
                  href="https://www.linkedin.com/in/phillip-ly-3a5730244/"
                  style={{ color: "white" }}
                  rel="linkedin-ref"
                >
                  <AiOutlineLinkedin />
                </a>
              </li>
              <li className="icons">
                <a
                  href={`mailto:philly79@berkeley.edu`}
                  style={{ color: "white" }}
                  rel="email-ref"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Footer;
