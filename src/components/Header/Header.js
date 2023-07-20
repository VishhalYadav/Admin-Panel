import React from "react";

import { Link } from "react-router-dom";
import LoginDrawer from "./LoginDrawer";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <Link className={styles.logo}>Logo</Link>
          <Link className={styles["special-li"]}>
            Register As A Professional
          </Link>
          <Link className={styles["nav-link"]}>My Bookings</Link>
          <Link className={styles["nav-link"]}>Help</Link>
          <LoginDrawer />
          {/* <Link className={styles["nav-link"]}>Login/Sign Up</Link> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
