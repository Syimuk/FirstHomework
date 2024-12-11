import React from "react";

import "./Header.css";
import logo from "../assets/Vector.svg";
import top from "../assets/Frame.svg";

export default function header() {
  return (
    <div>
      <header className="header">
        <img className="logoheaders" src={logo} alt="logophoto" />

        <div className="buttonheaders">
          <nav className="navhedears">
            <a href="#">
              Features <img src={top} alt="photo" />
            </a>
            <a href="#">Pricing</a>
            <a href="#">
              Resources <img src={top} alt="photo" />
            </a>
          </nav>

          <button className="logbutton">Log in</button>

          <button className="singbutton">Sing up</button>
        </div>
      </header>
    </div>
  );
}
