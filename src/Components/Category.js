import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiSushis, GiTacos, GiShrimp } from "react-icons/gi";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../styles/category-styles.scss";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <Row>
      <Col>
        <Container className="category">
          <NavLink to={"/Recipes/Italian"}>
            <FaPizzaSlice />
            <h4> Italian </h4>
          </NavLink>
          <NavLink to={"/Recipes/American"}>
            <FaHamburger />
            <h4> American </h4>
          </NavLink>
          <NavLink to={"/Recipes/Chinese"}>
            <GiNoodles />
            <h4> Chinese </h4>
          </NavLink>
          <NavLink to={"/Recipes/Japanese"}>
            <GiSushis />
            <h4> Japanese </h4>
          </NavLink>
          <NavLink to={"/Recipes/Mexican"}>
            <GiTacos />
            <h4> Mexican </h4>
          </NavLink>
          <NavLink to={"/Recipes/Thai"}>
            <GiShrimp />
            <h4> Thai </h4>
          </NavLink>
        </Container>
      </Col>
    </Row>
  );
}

export default Category;
