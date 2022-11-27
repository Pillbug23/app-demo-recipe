import "./App.css";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigationbar from "./Components/Navigationbar.js";
import Pages from "./Pages/Pages.js";
import Footer from "./Components/Footer.js";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar />
        <Pages />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
