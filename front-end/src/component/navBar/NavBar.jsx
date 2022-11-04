import React from "react";
import "./navBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const activeLink = "active-link";
  const normalLink = "navLink";
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="navLogo">
          R.S
        </Link>

        <div className="navMenu">
          <ul className="navList grid">
            <li className="navItem">
              <Link to="/" className="navLink">
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
                Movie Recommender
              </NavLink>
            </li>

            <li className="navItem">
              <NavLink
                to="/music-recommender"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Music Recommender
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
