import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/form-styles.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/Searched/" + search);
  };

  return (
    <Row>
      <Col>
        <form className="form-container" onSubmit={submitHandler}>
          <FaSearch />
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
      </Col>
    </Row>
  );
}

export default Search;
