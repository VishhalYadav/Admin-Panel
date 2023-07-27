import React from "react";
import Img from "../../assets/img.png";
import Categories from "../Header/Categories";
import Header from "../Header/Header";
import MiddleBody from "./MiddleBody";

import styles from "./UpperBody.module.css";
const UpperBody = () => {
  return (
    <div className={styles["image-container"]}>
      <img src={Img} alt="Carpenter" className={styles.img} />
      <Header />
      <MiddleBody />
      <Categories />
    </div>
  );
};

export default UpperBody;
