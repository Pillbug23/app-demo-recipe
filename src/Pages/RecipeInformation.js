import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function RecipeInformation() {
  let params = useParams();
  const [information, setInformation] = useState({});

  const fetchRecipeDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const recipeDetails = await data.json();
    console.log(recipeDetails);
    setInformation(recipeDetails);
  };

  useEffect(() => {
    fetchRecipeDetails();
  }, [params.name]);

  return (
    <Container fluid className="recipe-home" id="home">
      <Container className="recipe-info">
        <Row>
          <Col md={6} className="home-title">
            <h2>{information.title}</h2>
            <img src={information.image} alt="" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default RecipeInformation;
