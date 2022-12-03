import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";

function CuisinePosts({ posts }) {
  return posts.map((recipe, index) => {
    return (
      <Col md={3} xs={6}>
        <Card className="recipe-card" key={index}>
          <Link
            to={"/Information/" + recipe.id}
            style={{ textDecoration: "none", color: "#1b1b1b" }}
          >
            <Card.Img variant="top" src={recipe.image} alt="card-img" />

            <Card.Body>
              <Card.Text className="recipe-name">{recipe.title}</Card.Text>
            </Card.Body>
          </Link>
        </Card>
      </Col>
    );
  });
}

export default CuisinePosts;