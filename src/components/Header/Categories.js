import React from "react";
import { Link } from "react-router-dom";

import styles from "./Categories.module.css";
const Categories = (props) => {
  const DUMMY_CATEGORIES = [
    {
      id: "c1",
      key: "1",
      title: "Salon for Women",
      rating: "4.84 (9.5 M bookings)",
    },
    {
      id: "c2",
      key: "2",
      title: "Hair, Skin and Nails",
      rating: "4.84 (9.5 M bookings)",
    },
    {
      id: "c3",
      key: "3",
      title: "Spa for Women",
      rating: "4.84 (9.5 M bookings)",
    },
    {
      id: "c4",
      key: "4",
      title: "Salon for Men",
      rating: "4.84 (9.5 M bookings)",
    },
    {
      id: "c5",
      key: "5",
      title: "Massage for Men",
      rating: "4.84 (9.5 M bookings)",
    },
  ];
  return (
    <div className={styles["category-container"]}>
      {DUMMY_CATEGORIES.map((category) => {
        return (
          <Link
            to={`/${category.id}/categories`}
            key={category.key}
            className={styles["category-container__category"]}
          >
            <h6 className={styles.center}>{category.title}</h6>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
