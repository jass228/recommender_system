import React from "react";
import "./navBar.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const activeLink = "active-link";
  const normalLink = "navLink";

  const [toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="navLogo">
          R.S
        </Link>

        <div className={toggle ? "navMenu show-menu" : "navMenu"}>
          <ul className="navList grid">
            <li className="navItem">
              <Link to="/" className="navLink">
                <i className="uil uil-estate navIcon"></i>
                Home
              </Link>
            </li>

            <li className="navItem">
              <NavLink
                to="/movie-recommender"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <i className="uil uil-film navIcon"></i>
                <p>
                  Movie <span className="show">Recommender</span>
                </p>
              </NavLink>
            </li>

            <li className="navItem">
              <NavLink
                to="/music-recommender"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <i className="uil uil-music navIcon"></i>
                <p>
                  Music <span className="show">Recommender</span>
                </p>
              </NavLink>
            </li>
          </ul>
          <i
            className="uil uil-times navClose"
            onClick={() => showMenu(!toggle)}
          ></i>
        </div>
        <div className="navToggle" onClick={() => showMenu(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
