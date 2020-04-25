import React, { Component } from "react";
import "../Css/moncompte.css";

class Informations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Mes Informations",
      act: 0,
      index: "",
      datas: [],
    };
  }

  componentDidMount() {
    this.refs.name.focus();
  }

  fSubmit = (e) => {
    e.preventDefault();
    console.log("try");

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let age = this.refs.age.value;
    let address = this.refs.address.value;

    const initialSta = {
      showWelcomeMsg: false,
    };

    if (this.state.act === 0) {
      //new
      let data = {
        name,
        address,
        age,
      };
      datas.push(data);
    } else {
      //update
      let index = this.state.index;
      datas[index].name = name;
      datas[index].address = address;
      datas[index].age = age;
    }

    this.setState({
      datas: datas,
      act: 0,
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  };

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i, 1);
    this.setState({
      datas: datas,
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  };

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;
    this.refs.age.value = data.age;

    this.setState({
      act: 1,
      index: i,
    });

    this.refs.name.focus();
  };

  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
        <h2 id="title">{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input
            type="text"
            ref="name"
            placeholder="Votre Nom"
            className="formField"
            required="required"
          />
          <input
            type="email"
            ref="address"
            placeholder="votre adreese Email"
            required="required"
            className="formField"
          />
          <input
            type="number"
            ref="age"
            placeholder="votre age ?"
            required="required"
            className="formField"
          />

          <br />

          <button onClick={(e) => this.fSubmit(e)} className="myButton">
            submit{" "}
          </button>
        </form>
        <pre>
          {datas.map((data, i) => (
            <li key={i} className="myList">
              {i + 1}. {data.name}, {data.address},{data.age}
              <button onClick={() => this.fRemove(i)} className="myListButton">
                Supprimer{" "}
              </button>
              <button onClick={() => this.fEdit(i)} className="myListButton">
                Modifier{" "}
              </button>
            </li>
          ))}
        </pre>
      </div>
    );
  }
}

export default Informations;
