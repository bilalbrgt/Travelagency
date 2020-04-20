import React, { Component } from "react";
import Caravanes from "../Caravanes";
import Myicons from "../Myicons";
import { Link } from "react-router-dom";
import "../Css/acceuil.css";
class Acceuil extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  render() {
    return (
      <section id="main-images">
        <div className="wrapper">
          <h2>
            Organiser Votre <strong> VOYAGES SUR MESURE </strong>
            <Link to="/Destinations" className="buttons-1">
              Par ici
            </Link>
          </h2>
        </div>
        <Myicons />
        <Caravanes />

        {this.state.show ? (
          <p className="cookies">
            {" "}
            Ce site utilise des cookies afin d'améliorer votre expérience et
            optimiser nos sites et services{" "}
            
              <span
                id="X"
                onClick={() => {
                  this.setState({ show: false });
                }}
              >
                x
              </span>{" "}
          </p>
        ) : null}
      </section>
    );
  }
}
export default Acceuil;
