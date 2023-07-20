import React from "react";
import BgImg from "../../assets/bg-homepage.jpg";
import Categories from "../Header/Categories";
import Header from "../Header/Header";
import MiddleBody from "./MiddleBody";

import styles from "./UpperBody.module.css";
const UpperBody = () => {
  return (
    <div className={styles["image-container"]}>
      <img src={BgImg} alt="Carpenter" />
      <Header />
      <MiddleBody />
      <Categories />
    </div>
  );
};

export default UpperBody;
