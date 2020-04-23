import React, { Component } from "react";
import "../Css/monfooter.css";

class footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div class="robothelp"></div>
          <p className="robot">
            {" "}
            Besoin d'aide ?<br /> 01 70 15 55 55{" "}
          </p>

          <h1 id="final">
            {" "}
            Travel Agency<span class="oranges">.</span>
          </h1>

          <p class="copy">Copyright © 2020</p>

          <p className="avis">
            Avis de voyageurs présents sur <i class="fab fa-tripadvisor "></i>{" "}
            TripAdvisor
          </p>
        </footer>
      </div>
    );
  }
}
export default footer;
