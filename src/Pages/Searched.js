import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Search from "../Components/Search.js";
import Category from "../Components/Category.js";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function Searched() {
  const [searchedrecipes, setSearchedrecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    console.log(name);
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=8`
    );
    const recipes = await data.json();
    console.log(recipes);
    setSearchedrecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container fluid className="recipe-search" id="search">
        <Container className="recipe-search-info">
          <Row>
            <Search />
            <Category />
            {searchedrecipes.map((recipe, index) => {
              return (
                <Col md={3} xs={6}>
                  <Card className="recipe-card" key={index}>
                    <Card.Img variant="top" src={recipe.image} alt="card-img" />
                    <Card.Body>
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
    </motion.div>
  );
}

export default Searched;
