import React, { useState } from "react";
import "../Css/destinations.css";
import image from "../../img/sphinx.jpg";
const url = "http://localhost:8080/api/reservation";

const Travel = () => {
  const [destinations, setDestinations] = useState([]);

  console.log(destinations, "destinations");
  const getTravelData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data);
        console.log(data, "data");
      })
      .catch((err) => console.error("vous avez une erreur", err));
  };

  React.useEffect(() => {
    getTravelData(url);
  }, []);

  return (
    <div>
      <h2 className="bons">
        {" "}
        Par ici les bons plans <i class="fas fa-star"></i>
      </h2>

      <div className="container">
        {destinations.map((el, index) => {
          return (
            <div id="briques">
              <p key={index}> </p>

              <p className="titredestinations">{el.titre}</p>

              <img src={el.image} className="imgdest"></img>
              <p id="prix">{el.prix}€</p>
            </div>
          );
        })}
        <p className="sejour"> Tous nos séjours à petits prix</p>
        <h2 className="destinations">Déstinations à découvrir</h2>
        <img className="egypte" src={image} alt="Egypte"></img>
        <p className="block">EGYPTE</p>
        <br />
        <p id="prix-egypte"> dés 600€</p>
      </div>
    </div>
  );
};

export default Travel;
