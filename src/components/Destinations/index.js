import React, { useState } from "react";
import Notifications from "../Notifications";

import "../Css/destinations.css";
import image from "../../img/Travelagency.jpg";
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
              <p id="prix">
                {el.prix}€ <Notifications />
              </p>
            </div>
          );
        })}
        <p className="sejour"> Tous nos séjours à petits prix</p>
        <h2 className="destinations">Destination à découvrir !</h2>
        <section></section>
        <img className="egypte" src={image} alt="Egypte"></img>
        <p className="block"></p>
        <p className="block2"> Egypte</p>

        <br />
        <p id="prix-egypte"> dés 600€</p>
        <p id="degypte">
          Préparez votre voyage en Egypte: <br />
          suivez nos conseils et nos infos
          <br />
          pratiques, découvrez <br />
          les meilleurs itinéraires et les visites
          <br />
          incontournables.
        </p>

        <h3 className="topdestinations">Top destinations</h3>
        <div id="divv"></div>
        <p className="choix4">
          {" "}
          Casablanca <span className="choix3"> dés 150€</span>
        </p>
        <p className="choix">
          {" "}
          Texas <span className="choix2"> dés 750€</span>
        </p>
        <p className="choix5">
          {" "}
          Martinique <span className="choix6"> dés 1200€</span>
        </p>
        <p className="choix7">
          {" "}
          Maldives <span className="choix8"> dés 950€</span>
        </p>
      </div>
    </div>
  );
};

export default Travel;
