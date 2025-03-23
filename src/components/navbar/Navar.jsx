import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/ecopreserve-logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles["navbar-left"]}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>EcoPreserve</h1>
      </a>
      <div className={styles["navbar-right"]}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${styles["nav-link"]} ${styles.active}`
              : styles["nav-link"]
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/community-service"
          className={({ isActive }) =>
            isActive
              ? `${styles["nav-link"]} ${styles.active}`
              : styles["nav-link"]
          }
        >
          Community Service
        </NavLink>
        <NavLink
          to="/conflict-resolution"
          className={({ isActive }) =>
            isActive
              ? `${styles["nav-link"]} ${styles.active}`
              : styles["nav-link"]
          }
        >
          Conflict Resolution
        </NavLink>
        <NavLink
          to="/feedback"
          className={({ isActive }) =>
            isActive
              ? `${styles["nav-link"]} ${styles.active}`
              : styles["nav-link"]
          }
        >
          Feedback
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
