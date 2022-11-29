import React from "react";
import { motion } from "framer-motion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logout from "./Logout";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section>
        <Container fluid className="recipe-home" id="home">
          <Container className="recipe-info">
            <Row>
              <Col md={6} className="home-title">
                <h1 className="title"> Your Profile </h1>
              </Col>
            </Row>
            <Row>
              <Col md={7} className="home-title">
                {user?.picture && <img src={user.picture} alt={user?.name} />}
                <h2 style={{ marginTop: 15 }}>{user?.name}</h2>
                <h4> Email: {user?.email} </h4>
                <h4> Nickname: {user?.nickname} </h4>
                <h4> Locale: {user?.locale} </h4>
                <h4> Updated: {user?.updated_at} </h4>
              </Col>
            </Row>
            <Logout />
          </Container>
        </Container>
      </section>
    </motion.div>
  );
}

export default Profile;
