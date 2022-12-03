import React from "react";
import { NavLink } from "react-router-dom";

function PaginateCuisine({ postsPerPage, totalPosts, paginate, type }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
      <ul className="pagination">
        {pageNumber.map((number) => (
          <li key={number} className="page-item">
            <NavLink
              onClick={() => paginate(number)}
              to={`/Recipes/${type}`}
              className="page-link"
              style={{
                backgroundColor: "white",
                color: "orange",
                border: "1px solid orange",
              }}
            >
              {number}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default PaginateCuisine;
