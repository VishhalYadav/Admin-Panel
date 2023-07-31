import React, { useState } from "react";
import CategoryDrawer from "../../pages/CategoryDrawer";
import HomeServiceImg from "../../assets/mainCategories/HomeService.jpg";
import AppRepairImg from "../../assets/mainCategories/Appliance Repair.jpeg";
import PerCareImg from "../../assets/mainCategories/PersonalCare.jpeg";

import styles from "./Categories.module.css";
const Categories = (props) => {
  const [showDrawerState, setShowDrawerState] = useState({
    showDrawer: false,
    id: "",
  });

  const toggleDrawerOpenHandler = (id) => {
    setShowDrawerState((prev) => ({
      showDrawer: !prev.showDrawer,
      id: id,
    }));
  };
  const DUMMY_CATEGORIES = [
    {
      id: "c1",
      key: "1",
      title: "Home Repair",
      img: HomeServiceImg,
      rating: "4.84 (9.5 M bookings)",
    },
    {
      id: "c2",
      key: "2",
      title: "Appliance Repair",
      img: AppRepairImg,
      rating: "4.84 (9.5 M bookings)",
    },
    {
      id: "c3",
      key: "3",
      img: PerCareImg,
      title: "Personal Care",
      rating: "4.84 (9.5 M bookings)",
    },
  ];

  return (
    <React.Fragment>
      <div className={styles["category-container"]}>
        {DUMMY_CATEGORIES.map((category) => (
          <div className={styles["category-container__category"]}>
            <button
              style={{ borderRadius: "10px" }}
              src={category.img}
              alt={category.title}
              key={category.key}
              onClick={() => toggleDrawerOpenHandler(category.id)}
            >
              <img
                src={category.img}
                alt={category.title}
                className={styles.categoryImage}
              />
            </button>
            <h4 className={styles.center} style={{ marginTop: "0.25rem" }}>
              {category.title}
            </h4>
          </div>
        ))}
      </div>

      {showDrawerState.showDrawer && (
        <CategoryDrawer
          onClick={toggleDrawerOpenHandler}
          chosenCategoryId={showDrawerState.id}
        />
      )}
    </React.Fragment>
  );
};

export default Categories;
