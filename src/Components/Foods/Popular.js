import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/popular-styles.scss";
import Spinner from "react-bootstrap/Spinner";
import Posts from "./Posts.js";
import Pagination from "../Pagination.js";

function Popular() {
  /*Store recipes*/
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  //Get current posts
  const indexLast = currentPage * postsPerPage;
  const indexFirst = indexLast - postsPerPage;
  const currentPosts = popular.slice(indexFirst, indexLast);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(currentPosts);
  useEffect(() => {
    getPopularRecipes();
  }, [currentPage]);

  /*Data first befor we render anything else */
  /*Localstorage for caching data we dont need to reload */
  const getPopularRecipes = async () => {
    setLoading(true);
    const api = await fetch(
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=100",
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
    const data = await api.json();
    setPopular(data.recipes);
    setLoading(false);
  };

  return (
    <Row>
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
          <Posts posts={currentPosts} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={popular.length}
            paginate={paginate}
          />
        </>
      )}
    </Row>
  );
}

export default Popular;
