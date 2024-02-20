"use-client";
import React from "react";
import "../scss/style.scss";
import gallery from "../images/gallery.svg";
import notification from "../images/notification.svg";
import search from "../images/search.svg";
import Table from "./Table";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ono Software</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />
      </head>
      <body>
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-3 px-0 py-0">
              {/* <nav class="navbar">
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
              </nav> */}
              <Navbar/>
            </div>
            <div class="col-sm-9 ps-0 pe-5">
              <div class="container"></div>
              <div class="row mt-5 d-flex">
                <div class="col-6">
                  <div class="welcome-div"> Welcome, Amanda</div>
                  <div class="date-div"> Tue, 07 June 2022</div>
                </div>
                <div class="col-6 d-inline-flex justify-content-end">
                  <div>
                    <img
                      src={notification}
                      class="img-thumbnail me-3"
                      alt="dashboard"
                    />
                  </div>
                  <div>
                    <img src={gallery} class="img-thumbnail" alt="dashboard" />
                  </div>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-3"> Audience List</div>
                <div class="col-9 d-flex justify-content-end">
                  <div class="me-2">
                    <form class="d-flex" role="search">
                      <input
                        class="form-control me-2 search input-search"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </form>
                  </div>
                  <div class="me-3">
                    <select
                      class="form-select form-select-sm input-select"
                      aria-label="Small select example"
                    >
                      <option selected>Select Tags</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div>
                    <select
                      class="form-select form-select-sm input-select"
                      aria-label="Small select example"
                    >
                      <option selected>All Status</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-12">
                  {/* <table class="table">
                      <thead>
                        <tr>
                          <th>
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                          </th>
                          <th>Audience Name</th>
                          <th>Tags</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                          </th>
                          <td>
                            <img src={gallery} class="img-thumbnail me-2" />
                            David Harry
                          </td>
                          <td>Design</td>
                          <td>Status</td>
                          <td>...</td>
                        </tr>
                      </tbody>
                    </table> */}
                  <Table />
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Dashboard;
