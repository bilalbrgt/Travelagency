import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../Firebase";
import "../Css/login.css";

const Login = (props) => {
  const firebase = useContext(FirebaseContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btn, setBtn] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (password.length > 5 && email !== "") {
      setBtn(true);
    } else if (btn) {
      setBtn(false);
    }
  }, [password, email, btn]);

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .loginUser(email, password)
      .then((user) => {
        setEmail("");
        setPassword("");
        props.history.push("/welcome");
      })
      .catch((error) => {
        setError(error);
        setEmail("");
        setPassword("");
      });
  };

  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftLogin"></div>
        <div className="formBoxRight">
          <div className="formContent">
            {error !== "" && <span>{error.message}</span>}

            <h2 className="connexions">Connexion</h2>
            <form onSubmit={handleSubmit}>
              <div className="inputBox" id="movelogin">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  autoComplete="off"
                  required
                />
                <label htmlFor="email" required="required" className="myemail3">
                  Email
                </label>
              </div>
              

              <div className="inputBox">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  autoComplete="off"
                />

                <label htmlFor="password" required="required" className="mdp">
                  Mot de passe
                </label>
              </div>

              {btn ? (
                <button>Connexion</button>
              ) : (
                <button disabled>Connexion</button>
              )}
            </form>
            <div className="linkContainer">
              <Link className="simpleLink" to="/signup">
                Nouveau sur TravelAgency ?{" "}
                <button className="signup">Inscris toi</button>
              </Link>
              <br />
              <Link className="forgot" to="/forgetpassword">
                Mot de passe oublié? Récupérez-le ici.
              </Link>

              
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Login;
