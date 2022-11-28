import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Category from "../Components/Category.js";
import Search from "../Components/Search.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=8`
    );
    const recipes = await data.json();
    console.log(recipes);
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container fluid className="recipe-search" id="search">
        <Container className="recipe-search-info">
          <Search />
          <Category />
          <Row>
            {cuisine.map((recipe, index) => {
              return (
                <Col md={3} xs={6}>
                  <Card className="recipe-card" key={index}>
                    <Link
                      to={"/Information/" + recipe.id}
                      style={{ textDecoration: "none", color: "#1b1b1b" }}
                    >
                      <Card.Img
                        variant="top"
                        src={recipe.image}
                        alt="card-img"
                      />

                      <Card.Body>
                        <Card.Text className="recipe-name">
                          {recipe.title}
                        </Card.Text>
                      </Card.Body>
                    </Link>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>
    </motion.div>
  );
}

export default Cuisine;
