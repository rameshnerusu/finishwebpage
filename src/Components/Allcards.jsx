import React from "react";
import "./Allcards.css";
import Cards from "./Cards.jsx";
import Cards1 from "./cards1.jsx";
import Cards2 from "./cards2.jsx";
import Cards3 from "./cards3.jsx";
import Cards4 from "./cards4.jsx";
import Cards5 from "./cards5.jsx";
import Cards6 from "./cards6.jsx";
import Cards7 from "./cards7.jsx";
const Allcards = () => {
  return (
    <div className="container-fluid bg-secondary-subtle ">
      <h5 className="text-center p-2 ">UPCOMING EVENTS</h5>

      <div className="d-flex flex-row w-100 cards_main">
        <div className="filters p-3 d-flex flex-column   w-25">
          <input
            type="text"
            placeholder="Search by city or area"
            className="my-2"
          />

          <div class="btn-group my-2">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="true"
              aria-expanded="false"
            >
              Categories
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  5K
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  10K
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Half Marathon
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Full Marathon
                </a>
              </li>
            </ul>
          </div>

          <div class="btn-group my-2">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="true"
              aria-expanded="false"
            >
              When
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  This Week
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  This Month
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  This Year
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="cards w-75">
          <div className="d-flex flex-row flex-wrap">
            <Cards />
            <Cards1 />
            <Cards2 />
            <Cards3 />
            <Cards4 />
            <Cards5 />
            <Cards6 />
            <Cards7 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allcards;
