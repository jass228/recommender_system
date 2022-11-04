import React from "react";
import "./navBar.css";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar = () => {
  const activeLink = "active-link";
  const normalLink = "navLink";
  return (
    <header className="header">
      <nav className="nav container">
        <motion.div
          initial={{
            x: -300,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <Link to="/" className="navLogo">
            R.S
          </Link>
        </motion.div>

        <div className="navMenu">
          <motion.ul
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="navList grid"
          >
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
          </motion.ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
