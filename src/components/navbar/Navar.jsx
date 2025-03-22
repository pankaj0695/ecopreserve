import React from "react";
import { Link } from "react-router-dom";
import logo from "/ecopreserve-logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles["navbar"]}>
      <a href="/" className={styles["navbar-left"]}>
        <img src={logo} alt="Logo" className={styles["logo"]} />
        <h1 className={styles["title"]}>EcoPreserve</h1>
      </a>
      <div className={styles["navbar-right"]}>
        <Link to="/" className={styles["nav-link"]}>
          Home
        </Link>
        <Link to="/community-service" className={styles["nav-link"]}>
          Community Service
        </Link>
        <Link to="/conflict-resolution" className={styles["nav-link"]}>
          Conflict Resolution
        </Link>
        <Link to="/feedback" className={styles["nav-link"]}>
          Feedback
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
