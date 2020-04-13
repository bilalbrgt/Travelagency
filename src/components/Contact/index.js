import React, { Component} from "react";

import axios from "axios";

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

  render() {
    return (
      <div className="container">
        <div className="imgcontact">
          <section id="contact">
            <h3> Contactez- nous</h3>

            <div class="g-mb-20"></div>
            <form onSubmit={this.handlesubmit}>
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
              <button
                class="buttonss"
                type="submit"
                onClick={this.reloadThePage}
              >
                Envoyer
              </button>
            </form>
          </section>
*        </div>
      </div>
    );
  }
}
export default mycontact;
