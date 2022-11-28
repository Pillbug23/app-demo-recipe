import React from "react";
import Popular from "./Foods/Popular.js";
import Search from "./Search.js";
import Category from "./Category.js";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "../styles/recipe-styles.scss";
import { motion } from "framer-motion";

const Recipes = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section>
        <Container fluid className="recipe-search" id="search">
          <Container className="recipe-search-info">
            <Col md={12} className="project-card">
              <Search />
              <Category />
              <Popular />
            </Col>
          </Container>
        </Container>
      </section>
    </motion.div>
  );
};

export default Recipes;
