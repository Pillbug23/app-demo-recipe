import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Category from "../Components/Category.js";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    console.log(name);
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=5`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <Container fluid className="recipe-search" id="search">
      <Container className="recipe-search-info">
        <Category />
        <Row>
          {cuisine.map((recipe, index) => {
            return (
              <Col md={3} xs={6}>
                <Card className="recipe-card" key={index}>
                  <Card.Img variant="top" src={recipe.image} alt="card-img" />
                  <Card.Body>
                    <Card.Title className="recipe-title">
                      <span style={{ color: "rgb(255, 140, 0)" }}>Recipe</span>{" "}
                      | From {recipe.sourceName}
                    </Card.Title>
                    <Card.Text className="recipe-name">
                      {recipe.title}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Cuisine;
