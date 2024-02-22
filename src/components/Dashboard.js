"use-client";
import { useState, useRef, useEffect, React } from "react";
import { useClickAway } from "use-click-away";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import "../scss/style.scss";
import gallery from "../images/gallery.svg";
import notification from "../images/notification.svg";
import search from "../images/search.svg";
import Table from "./Table";
import Navbar from "./Navbar";
import NavMobile from "./NavMobile";
import { useMediaQuery } from "react-responsive";
import ono from "../images/ono.svg";
import dashboard from "../images/dashboard.svg";
import campaign from "../images/campaign.svg";
import content from "../images/dashboard.svg";
import audience from "../images/audience.svg";
import flows from "../images/flows.svg";
import settings from "../images/settings.svg";
import Httper from "../lib/api";
import Alert from "./Alert";

const url = "https://onox.cloud/backend/simple_audience.php";
var res = await Httper("get", url);

const Dashboard = () => {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  const [search, setSearch] = useState([]);

  useClickAway(ref, () => setOpen(false));

  const handleSearch = (event) => {
    const value = event.target.value;
    const filteredData = res.filter((x) =>
      x.name.toLowerCase().includes(value.toLowerCase())
    );

    setSearch(filteredData);
    if (!filteredData.length > 0) setAlert(true);
    else setAlert(false);
  };

  const handleTag = (event) => {
    const value = event.target.value;

    const filteredData =
      search.length > 0
        ? search.filter((x) => x.tags[0] === value)
        : res.filter((x) => x.tags[0] === value);

    setSearch(filteredData);
    if (!filteredData.length > 0) setAlert(true);
    else setAlert(false);
  };

  const handleStatus = (event) => {
    const value = event.target.value;

    const filteredData =
      search.length > 0
        ? search.filter((x) => x.status === value)
        : res.filter((x) => x.status === value);

    setSearch(filteredData);
    if (!filteredData.length > 0) setAlert(true);
    else setAlert(false);
  };

  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 1200px)",
  });

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
            <div class="col-sm col-md col-lg-3 px-0 py-0">
              {isTabletOrMobile ? (
                <div ref={ref}>
                  <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className=""
                      >
                        <ul class="list-group hamburger">
                          <div class=" d-flex justify-content-end pe-2">
                            <img src={ono} class="hm-img" />
                          </div>
                          <li class="list-group-item" aria-current="true">
                            <img src={dashboard} alt="dashboard" class="pe-2" />
                            <span>Dashboard</span>
                          </li>
                          <li class="list-group-item">
                            <img src={campaign} alt="dashboard" class="pe-2" />
                            <span> Campaign </span>
                          </li>
                          <li class="list-group-item selected">
                            <img
                              src={audience}
                              alt="dashboard"
                              class="pe-2"
                              fill={"#fff"}
                            />
                            <span> Audience </span>
                          </li>
                          <li class="list-group-item">
                            <img src={flows} alt="dashboard" class="pe-2" />
                            <span> Flows </span>
                          </li>
                          <li class="list-group-item">
                            <img src={content} alt="dashboard" class="pe-2" />
                            <span> Content </span>
                          </li>
                          <li class="list-group-item">
                            <img src={settings} alt="dashboard" class="pe-2" />
                            <span> Settings </span>
                          </li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <nav class="navbar d-block">
                  <ul class="nav flex-column">
                    <li class="nav-item logo-container">
                      <img src={ono} class="logo" alt="logo" />
                    </li>
                    <li class="navbar-item">
                      <form class="d-flex justify-content-center" role="search">
                        <input
                          class="form-control me-2 navbar-search"
                          type="search"
                          placeholder="Search"
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
              )}
            </div>
            <div class="col-sm-12 col-md-12 col-lg-9 ps-20 ps-30 pe-20">
              <div class="container">
                <div class="row mt-5">
                  <div class="col-6">
                    <div class="welcome-div"> Welcome, Amanda</div>
                    <div class="date-div"> Tue, 07 June 2022</div>
                  </div>
                  <div class="col-6 d-flex justify-content-end">
                    <div>
                      <img
                        src={notification}
                        class="img-thumbnail me-3"
                        alt="dashboard"
                      />
                    </div>
                    <div>
                      <img
                        src={gallery}
                        class="img-thumbnail"
                        alt="dashboard"
                      />
                    </div>
                  </div>
                </div>

                <div class="row mt-5">
                  <div class="col-sm-9 col-md-12 col-lg-3 table-title d-flex justify-content-center">
                    <div>Audience List</div>
                  </div>
                  <div class="col-sm-9 col-md-12 col-lg-9 d-flex justify-content-end">
                    <div class="me-2">
                      <form class="d-flex" role="search">
                        <input
                          class="form-control me-2 search input-search"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                          onChange={handleSearch}
                        />
                      </form>
                    </div>
                    <div class="me-3">
                      <select
                        class="form-select form-select-sm input-select"
                        aria-label="Small select example"
                        onChange={handleTag}
                      >
                        <option selected>Select Tags</option>
                        <option value="Design">Design</option>
                        <option value="Development">Development</option>
                        <option value="Marketing">Marketing</option>
                      </select>
                    </div>
                    <div>
                      <select
                        class="form-select form-select-sm input-select"
                        aria-label="Small select example"
                        onChange={handleStatus}
                      >
                        <option selected>All Status</option>
                        <option value="active">Active</option>
                        <option value="passive">Passive</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="row mt-5">
                  <div class="col-12">
                    {alert ? <Alert /> : ""}
                    <Table data={search.length > 0 ? search : res} />
                  </div>
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
