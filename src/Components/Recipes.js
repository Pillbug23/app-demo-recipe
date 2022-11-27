import React from "react";
import Popular from "./Foods/Popular.js";
import Veggie from "./Foods/Veggie.js";
import Category from "./Category.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/recipe-styles.scss";

const Recipes = () => {
  return (
    <section>
      <Container fluid className="recipe-search" id="search">
        <Container className="recipe-search-info">
          <Col md={12} className="project-card">
            <Category />
            <Popular />
          </Col>
        </Container>
      </Container>
    </section>
  );
};

export default Recipes;
