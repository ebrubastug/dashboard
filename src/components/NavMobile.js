import "../scss/style.scss";
import { useClickAway } from "use-click-away";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import dashboard from "../images/dashboard.svg";
import campaign from "../images/campaign.svg";
import content from "../images/dashboard.svg";
import audience from "../images/audience.svg";
import flows from "../images/flows.svg";
import settings from "../images/settings.svg";

import React from "react";

function NavMobile() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));
  return (
    <>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />
      </head>
      <body>
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
                <ul class="list-group">
                  <li class="list-group-item">
                    <span>Menu</span>
                  </li>
                  <li class="list-group-item active" aria-current="true">
                    <img src={dashboard} alt="dashboard" />
                    <span>Dashboard</span>
                  </li>
                  <li class="list-group-item">
                    <img src={campaign} alt="dashboard" />
                    <span> Campaign </span>
                  </li>
                  <li class="list-group-item">
                    <img src={audience} alt="dashboard" />
                    <span> Audience </span>
                  </li>
                  <li class="list-group-item">
                    <img src={flows} alt="dashboard" />
                    <span> Flows </span>
                  </li>
                  <li class="list-group-item">
                    <img src={content} alt="dashboard" />
                    <span> Content </span>
                  </li>
                  <li class="list-group-item">
                    <img src={settings} alt="dashboard" />
                    <span> Settings </span>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </body>
    </>
  );
}

export default NavMobile;
