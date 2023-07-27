import React from "react";

import styles from "./PopularServices.module.css";
const PopularServices = () => {
  return (
    <div className={styles["services-container"]}>
      <div className={styles["service-item"]}>Img1</div>
      <div className={styles["service-item"]}>Img2</div>
      <div className={styles["service-item"]}>Img3</div>
      <div className={styles["service-item"]}>Img4</div>
    </div>
  );
};

export default PopularServices;
