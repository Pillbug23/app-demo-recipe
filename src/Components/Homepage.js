import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/homepage-styles.scss";
import HomeImage from "./HomeImage.js";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../Images/Gallery/img_1.jpg";
import img2 from "../Images/Gallery/img_2.jpg";
import img3 from "../Images/Gallery/img_3.jpg";
import img4 from "../Images/Gallery/img_4.jpg";
import img5 from "../Images/Gallery/img_5.jpg";
import img6 from "../Images/Gallery/img_6.jpg";
import img7 from "../Images/Gallery/img_7.jpg";
import img8 from "../Images/Gallery/img_8.jpg";
import img9 from "../Images/Gallery/img_9.jpg";
import img10 from "../Images/Gallery/img_10.jpg";

const Homepage = () => {
  const imageGallery = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const genericList = [
    "Experiment with recipes",
    "Save new recipes",
    "Get cooking tips",
    "See what recipes you saved",
    "Balance your nutrition",
    "Explore a vast variety of recipes",
  ];

  return (
    <section>
      <Container fluid className="recipe-home" id="home">
        <Container className="recipe-info">
          <Row>
            <Col md={6} className="home-title">
              <h1 className="title"> Learn new recipes and more </h1>
              <p style={{ paddingTop: 10 }} className="title-info">
                {" "}
                Looking for a great home-cooked meal? Looking to pretend that
                you're the next Gordon Ramsey? Calcipes is a place where you can
                search for recipes. Look into exploring recipes by searching by
                category or look into our most popular recipes.
              </p>
              <Button variant="primary" href={"/Recipes"} type="button">
                Explore now
              </Button>
            </Col>
            <Col md={6} className="home-title">
              <div className="gallery">
                {imageGallery.map((src, index) => {
                  return <HomeImage key={index} imgSrc={src} />;
                })}
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={7} className="sign-title">
              <img
                src={img10}
                alt="food"
                style={{
                  maxHeight: "500px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </Col>
            <Col md={5} className="sign-title">
              <h1 className="title"> Improve your culinary skills </h1>
              {genericList.map((item, index) => {
                return (
                  <p className="signin-item" key={index}>
                    {item}
                  </p>
                );
              })}
              <Button
                variant="primary"
                href={"/Authentication"}
                style={{ marginTop: 30 }}
              >
                {" "}
                Sign In Now{" "}
              </Button>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="sign-title">
              <h1 className="title" style={{ textAlign: "center" }}>
                Check out some holiday-themed recipes
              </h1>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Homepage;
