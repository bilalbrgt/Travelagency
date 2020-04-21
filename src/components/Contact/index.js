import React, { Component } from "react";

import axios from "axios";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";
import "../Css/contact.css";
import image from "../../img/bg-Travelagency.png";

class mycontact extends Component {
  constructor() {
    super();
    this.sayHello = this.reloadThePage.bind(this);

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
  notify = () => toast.success(" Email envoyer  ");

  render() {
    return (
      <div className="fullscren">
        <section id="contact">
          <img className="montagnes" src={image} alt="montagnes"></img>

          <h1 className="contactme"> Contactez- nous</h1>

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
        </section>
      </div>
    );
  }
}
export default mycontact;
