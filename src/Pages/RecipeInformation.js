import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import "../styles/information-styles.scss";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
import Category from "../Components/Category.js";
import Search from "../Components/Search.js";

function RecipeInformation() {
  let params = useParams();
  const [information, setInformation] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const fetchRecipeDetails = async () => {
    const data = await fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${params.name}/information?includeNutrition=true`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "3c6c2711cfmshb15b51e9656878dp1ea62cjsn687f8f194ba6",
          "X-RapidAPI-Host":
            "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        },
      }
    );
    const recipeDetails = await data.json();
    console.log(recipeDetails);
    setInformation(recipeDetails);
  };

  useEffect(() => {
    fetchRecipeDetails();
  }, [params.name]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section>
        <Container fluid className="recipe-home" id="home">
          <Container className="recipe">
            <Search />
            <Category />
            <Row>
              <Col
                md={5}
                className="home-title"
                style={{ paddingTop: 50, paddingRight: 10, paddingLeft: 10 }}
              >
                <h2 className="title"> {information.title} </h2>
                <img
                  src={information.image}
                  alt=""
                  style={{
                    maxHeight: "500px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </Col>
              <Col md={7} className="info-padding">
                <Button
                  variant="outline-warning"
                  onClick={() => setActiveTab("instructions")}
                  className={activeTab === "instructions" ? "actively" : ""}
                >
                  {" "}
                  Summary
                </Button>
                <Button
                  variant="outline-warning"
                  onClick={() => setActiveTab("ingredients")}
                  className={activeTab === "ingredients" ? "actively" : ""}
                >
                  {" "}
                  Instructions{" "}
                </Button>
                <div style={{ marginTop: 30 }}>
                  {activeTab === "instructions" && (
                    <p
                      dangerouslySetInnerHTML={{ __html: information.summary }}
                    />
                  )}
                  {activeTab === "ingredients" && (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: information.instructions,
                      }}
                    />
                  )}
                  {activeTab === "nutrition" && (
                    <p
                      dangerouslySetInnerHTML={{
                        __html: information.nutrition.nutrients[0].name,
                      }}
                    />
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </motion.div>
  );
}

export default RecipeInformation;
