import React from "react";
import "../scss/style.scss";
import ono from "../images/ono.svg";
import dashboard from "../images/dashboard.svg";
import campaign from "../images/campaign.svg";
import content from "../images/dashboard.svg";
import audience from "../images/audience.svg";
import flows from "../images/flows.svg";
import settings from "../images/settings.svg";
import search from "../images/search.svg";

function Navbar() {
  return (
    <nav class="navbar">
      <ul class="nav flex-column">
        <li class="nav-item logo-container">
          <img src={ono} class="logo" alt="logo" />
        </li>
        <li class="navbar-item">
          <form class="d-flex" role="search">
            <img src={search} class="" />
            <input
              class="form-control me-2 search navbar-search"
              type="search"
              placeholder="      Search"
              aria-label="Search"
            />
          </form>
        </li>
        <li class="nav-item">
          <span>Menu</span>
        </li>
        <li class="nav-item">
          <a class="navbar-brand" href="#">
            <img src={dashboard} alt="dashboard" />
            <span>Dashboard</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="navbar-brand" href="#">
            <img src={campaign} alt="dashboard" />
            <span> Campaign </span>
          </a>
        </li>
        <li class="nav-item">
          <a class="navbar-brand" href="#">
            <img src={audience} alt="dashboard" />
            <span> Audience </span>
          </a>
        </li>
        <li class="nav-item">
          <a class="navbar-brand" href="#">
            <img src={flows} alt="dashboard" />
            <span> Flows </span>
          </a>
        </li>
        <li class="nav-item">
          <a class="navbar-brand" href="#">
            <img src={content} alt="dashboard" />
            <span> Content </span>
          </a>
        </li>
        <li class="nav-item">
          <a class="navbar-brand" href="#">
            <img src={settings} alt="dashboard" />
            <span> Settings </span>
          </a>
        </li>
        <li class="mt-5 d-flex justify-content-center">
          <button className="button">Logout</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
