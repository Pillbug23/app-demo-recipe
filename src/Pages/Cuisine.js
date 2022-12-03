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
import "../styles/category-styles.scss";
import Spinner from "react-bootstrap/Spinner";
import PaginateCuisine from "./PaginateCuisine.js";
import CuisinePosts from "./CuisinePosts.js";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  //Get current posts
  const indexLast = currentPage * postsPerPage;
  const indexFirst = indexLast - postsPerPage;
  const currentPosts = cuisine.slice(indexFirst, indexLast);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  let params = useParams();

  const getCuisine = async (name) => {
    setLoading(true);
    const data = await fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${name}&number=100`,
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
    const recipes = await data.json();
    setCuisine(recipes.results);
    setLoading(false);
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
          <Row>
            <Search />
            <Category />
            {loading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Spinner
                  animation="border"
                  style={{
                    width: "6rem",
                    height: "6rem",
                  }}
                  variant="warning"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : (
              <>
                <CuisinePosts posts={currentPosts} />
                <PaginateCuisine
                  postsPerPage={postsPerPage}
                  totalPosts={cuisine.length}
                  paginate={paginate}
                  type={params.type}
                />
              </>
            )}
          </Row>
        </Container>
      </Container>
    </motion.div>
  );
}

export default Cuisine;
