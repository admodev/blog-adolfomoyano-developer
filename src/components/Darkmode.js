import React, { Component } from "react";
import { render } from "@testing-library/react";
import "../darkmode.min.css";

export default class Darkmode extends Component {
  render() {
    // Mañana añadir js acá...
    return (
      <div className="container">
        <input type="checkbox" className="switchBtn" />
        <div className="thread">
          <div className="threadShadow"></div>
        </div>
        <div className="threadEnd">
          <div className="threadEndShadow"></div>
        </div>
      </div>
    );
  }
}
