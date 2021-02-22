import React, { Component } from "react";

class Header extends Component {
  state = {
    title: "The keywords are:",
    keywords: "",
  };

  hello = () => {
    console.log("fui Clicado");
  };

  inputChange(event) {
    this.setState({
      keywords: event.target.value,
    });
  }

  render() {
    return (
      <header>
        <div className="logo" onClick={this.hello}>
          Logo
        </div>
        <input onChange={(event) => this.inputChange(event)} />

        <div>{ this.state.title }</div>
        <div>{ this.state.keywords }</div>
      </header>
    );
  }
}

export default Header;
