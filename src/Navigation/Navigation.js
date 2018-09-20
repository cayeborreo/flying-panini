import React from "react";
import logo from "../assets/images/MG_logo.png";

const Navigation = () => {
  return (
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            src={logo}
            alt="MedGrocer: The online pharmacy that delivers"
            width="112"
            height="28"
          />
        </a>
        <div
          class="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" href="https://bulma.io/">
            Home
          </a>
          <a class="navbar-item" href="https://bulma.io/">
            Search
          </a>
          <a class="navbar-item" href="https://bulma.io/">
            Savings Calculator
          </a>
          <a class="navbar-item" href="https://bulma.io/">
            About
          </a>
          <a class="navbar-item" href="https://bulma.io/">
            Help
          </a>
          <a class="navbar-item" href="https://bulma.io/">
            Contact Us
          </a>
          <a class="navbar-item" href="https://bulma.io/">
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
