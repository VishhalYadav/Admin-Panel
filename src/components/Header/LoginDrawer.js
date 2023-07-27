import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../UI/Modal";

import styles from "./LoginDrawer.module.css";
const LoginDrawer = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawerHandler = () => {
    setShowDrawer((prev) => !prev);
  };
  return (
    <React.Fragment>
      <Link className={styles.link} onClick={toggleDrawerHandler}>
        Login/Sign Up
      </Link>
      {showDrawer && (
        <Modal onClick={toggleDrawerHandler}>
          <h3>Please Login to continue</h3>
          <input className={styles.input} type="number" min={10} />
          <div>
            <button className={styles.btn}>Continue</button>
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default LoginDrawer;
