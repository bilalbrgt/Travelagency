import React, { Component } from "react";

import axios from "axios";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";
import "../Css/contact.css";
import image from "../../img/blues2travelagency.jpg";

class mycontact extends Component {
  constructor() {
    super();
    this.sayHello = this.reloadThePage.bind(this);
    this.toggleHandler = this.toggleHandler.bind(this);

    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  async handlesubmit(e) {
    e.preventDefault();

    const { name, email, message } = this.state;

    const form = await axios.post("http://localhost:8080/api/form", {
      name,
      email,
      message,
    });
  }

  reloadThePage() {
    window.location.reload();
  }
  // state pour toggle

  state = {
    display: false,
  };
// debut de la fonctions toggle 
  toggleHandler = () => {
    const currentStatus = this.state.display;
    this.setState({
      display: !currentStatus,
    });
  };
  render() {
    let content = null;
    if (this.state.display) {
      content = <h2 className="jsp">01.48.32.25.63</h2>;
    }
    // fin de la fonctions toogle 
    return (
      <div className="fullscren">
        <section id="contact">
          <img className="montagnes" src={image} alt="montagnes"></img>

          <h1 className="contactme"> Contact</h1>
          <button onClick={this.toggleHandler} className="where">
            <i class="fas fa-phone " id="phone"></i>{" "}
          </button>
          {content}
          <div class="g-mb-20"></div>
          <form onSubmit={this.handlesubmit} className="contactform">
            <div>
              <label for="name" id="name">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={this.handleChange}
                required="required"
              />
            </div>
            <div>
              <label for="email " id="monemail">
                {" "}
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={this.handleChange}
                required="required"
              />
            </div>
            <div>
              <label for="message" className="mymsg">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                onChange={this.handleChange}
                required="required"
              ></textarea>
            </div>
            <div class="g-mb-20"></div>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnVisibilityChange
              draggable
              pauseOnHover
            />
            <button
              class="contact-form-btn"
              type="submit"
              onClick={this.reloadThePage}
              value="Send"
            >
              Envoyer
            </button>
          </form>
          <h3 id="firstemail">Email</h3>
          <p className="Travelagency"> TravelAgencyfr@gmail.com</p>

          <i class="fas fa-phone-alt" className="callme"></i>
        </section>
      </div>
    );
  }
}
export default mycontact;
