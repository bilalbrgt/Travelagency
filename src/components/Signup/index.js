import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FirebaseContext } from "../Firebase";
import "../Css/inscriptions.css";

const Signup = (props) => {
  const firebase = useContext(FirebaseContext);

  const data = {
    pseudo: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [loginData, setLoginData] = useState(data);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, pseudo } = loginData;
    firebase
      .signupUser(email, password)
      .then((authUser) => {
        return firebase.user(authUser.user.uid).set({
          pseudo,
          email,
        });
      })
      .then(() => {
        setLoginData({ ...data });
        props.history.push("/welcome");
      })
      .catch((error) => {
        setError(error);
        setLoginData({ ...data });
      });
  };

  const { pseudo, email, password, confirmPassword } = loginData;

  const btn =
    pseudo === "" ||
    email === "" ||
    password === "" ||
    password !== confirmPassword ? (
      <button disabled className="newbutton">
        Inscription
      </button>
    ) : (
      <button className="newbutton">Inscription</button>
    );

  // gestion erreurs
  //  const errorMsg = error !== "" && <span>{error.message}</span>;

  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftSignup"></div>
        <div className="formBoxRight">
          <div className="formContent">
            {/* {errorMsg} */}

            <h2 className="inscriptions">Inscription </h2>
            <form onSubmit={handleSubmit}>
              <div className="inputBox" id="movelogin">
                <input
                  onChange={handleChange}
                  value={pseudo}
                  type="text"
                  id="pseudo"
                  autoComplete="off"
                  required
                />
                <label htmlFor="pseudo" id="pseudo2">
                  Pseudo
                </label>
              </div>

              <div className="inputBox">
                <input
                  onChange={handleChange}
                  value={email}
                  type="email"
                  id="email"
                  autoComplete="off"
                  required
                />
                <label htmlFor="email" id="email2">
                  Email
                </label>
              </div>

              <div className="inputBox">
                <input
                  onChange={handleChange}
                  value={password}
                  type="password"
                  id="password"
                  autoComplete="off"
                  required
                />
                <label htmlFor="password" id="Motdepasse">
                  Password
                </label>
              </div>

              <div className="inputBox">
                <input
                  onChange={handleChange}
                  value={confirmPassword}
                  type="password"
                  id="confirmPassword"
                  autoComplete="off"
                  required
                />
                <label htmlFor="confirmPassword" id="cfrmermdp">
                  Confirm Password
                </label>
              </div>

              {btn}
            </form>
            <div className="linkContainer">
              <Link className="simpleLink33" to="/login">
                Déjà inscrit ? Connectez-vous
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
