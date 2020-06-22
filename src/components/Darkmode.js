import React from "react";
import { render } from "@testing-library/react";

export default class Darkmode extends Component {
  render() {
    const switchBtn = document.querySelector(".switchBtn");
    const container = document.querySelector(".container");
    const threadEnd = document.querySelector(".threadEnd");

    switchBtn.addEventListener("click", () => container.classList.toggle("on"));

    threadEnd.addEventListener("click", () => {
      if (switchBtn.checked) {
        switchBtn.checked = false;
        container.classList.toggle("on");
      } else {
        switchBtn.checked = true;
        container.classList.toggle("on");
      }
    });
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
