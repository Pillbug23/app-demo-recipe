import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Veggie() {
  /*Store recipes*/
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggieRecipes();
  }, []);

  /*Data first befor we render anything else */
  /*Localstorage for caching data we dont need to reload */
  const getVeggieRecipes = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      /*Parse back into an array */
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=5&tags=vegetarian`
      );
      const data = await api.json();
      /*Store into a string to be saved into Local storage */
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      console.log(data);
      setVeggie(data.recipes);
    }
  };

  return (
    <Row>
      {veggie.map((recipe, index) => {
        return (
          <Col md={3} xs={6}>
            <Card className="recipe-card" key={index}>
              <Card.Img variant="top" src={recipe.image} alt="card-img" />
              <Card.Body>
                <Card.Title className="recipe-title">
                  <span style={{ color: "rgb(255, 140, 0)" }}>Recipe</span> |
                  From {recipe.sourceName}
                </Card.Title>
                <Card.Text className="recipe-name">{recipe.title}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default Veggie;
