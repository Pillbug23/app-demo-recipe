import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/popular-styles.scss";

function Popular() {
  /*Store recipes*/
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopularRecipes();
  }, []);

  /*Data first befor we render anything else */
  /*Localstorage for caching data we dont need to reload */
  const getPopularRecipes = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      /*Parse back into an array */
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=4`
      );
      const data = await api.json();
      /*Store into a string to be saved into Local storage */
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <Row>
      {popular.map((recipe, index) => {
        return (
          <Col md={3} xs={6}>
            <Card className="recipe-card" key={index}>
              <Link to={"/Information/" + recipe.id}>
                <Card.Img variant="top" src={recipe.image} alt="card-img" />
                <Card.Body>
                  <Card.Title className="recipe-title">
                    <span style={{ color: "rgb(255, 140, 0)" }}>Recipe</span> |
                    From {recipe.sourceName}
                  </Card.Title>
                  <Card.Text className="recipe-name">{recipe.title}</Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default Popular;
