import React from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../CategoryPage/ItemCard";
import Cart from "../Cart/Cart";

import styles from "./CategoryPage.module.css";
const CategoryPage = (props) => {
  const categoryId = useParams().categoryId;
  // const identifiedCategory = DUMMY_CATEGORIES.find(
  //   (category) => category.id === categoryId
  // );
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h4 className={styles.center}>Select a service</h4>
        <div>
          <img></img>
          <p>Frequently booked</p>
        </div>
      </div>
      <div className={styles.middleContainer}>
        <ItemCard />
      </div>
      <div className={styles.rightContainer}>
        <Cart />
        <div className={styles.offersContainer}>
          <p className={styles.center}>Offers will be listed here.</p>
        </div>
      </div>
    </div>
  );
};
export default CategoryPage;
