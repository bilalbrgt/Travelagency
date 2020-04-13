import React, { Component } from "react";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";

class App extends Component {
  notify = () => toast(" Hello!");

  render() {
    return (
      <div>
        <alert onClick={this.notify}>Hello !</alert>
        <ToastContainer />
        <p> Hello </p>
      </div>
      
    );
  }
}
export default App;
