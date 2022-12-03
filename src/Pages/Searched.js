import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Search from "../Components/Search.js";
import Category from "../Components/Category.js";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import PaginateSearch from "./PaginateSearch.js";
import SearchedPosts from "./SearchedPosts.js";

function Searched() {
  const [searchedrecipes, setSearchedrecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  //Get current posts
  const indexLast = currentPage * postsPerPage;
  const indexFirst = indexLast - postsPerPage;
  const currentPosts = searchedrecipes.slice(indexFirst, indexLast);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  let params = useParams();

  const getSearched = async (name) => {
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
    setSearchedrecipes(recipes.results);
    setLoading(false);
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
            {loading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
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
                <SearchedPosts posts={currentPosts} />
                <PaginateSearch
                  postsPerPage={postsPerPage}
                  totalPosts={searchedrecipes.length}
                  paginate={paginate}
                  type={params.search}
                />
              </>
            )}
          </Row>
        </Container>
      </Container>
    </motion.div>
  );
}

export default Searched;
