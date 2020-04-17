import React, { Component } from "react";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";

class Notifications extends Component {
  notify = () => toast.info(" 01 70 15 55 55");

  render() {
    return (
      <div>
        <alert onClick={this.notify}> Reserver</alert>
        <ToastContainer
          position="top-center"
          margin-top="50px"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}
export default Notifications;
