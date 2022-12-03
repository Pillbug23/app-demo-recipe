import React from "react";
import { NavLink } from "react-router-dom";

function Pagination({ postsPerPage, totalPosts, paginate }) {
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
              to={"/Recipes"}
              className="page-link"
              style={{
                backgroundColor: "white",
                color: "rgb(255, 140, 0)",
                border: "1px solid rgb(255, 140, 0)",
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

export default Pagination;
