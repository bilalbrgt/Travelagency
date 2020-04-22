import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import "../Css/navbar.css";
function Navbar() {
  return (
    <div className="nav">
      <header>
        <div className="wrapper">
          <Link to="/">
            {" "}
            <h1>
              Travel Agency <span className="oranges">. </span>
            </h1>{" "}
          </Link>

          <nav>
            <ul>
              <li>
                <Link to="/">Accueil </Link>
              </li>
              <li>
                <Link to="/destinations"> Destinations </Link>
              </li>

              <li>
                <Link to="/login"> Compte </Link>
              </li>
              <li>
                <Link to="/contact"> Contact </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section></section>
      <Footer />
    </div>
  );
}

export default Navbar;
