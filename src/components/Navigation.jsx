import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div id="navigation">
      <div>
        <h1>Sibarita Brunch Club</h1>
      </div>
      <div id="navigation_bar">
        <ul>
          <li>
            <Link to="/">Welcome</Link>
          </li>
          <li>
            <Link to="/menu">Our Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
