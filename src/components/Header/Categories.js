import React, { useState } from "react";
import CategoryDrawer from "../../pages/CategoryDrawer";

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
      rating: "4.84 (9.5 M bookings)",
    },
    {
      id: "c2",
      key: "2",
      title: "Appliance Repair",
      rating: "4.84 (9.5 M bookings)",
    },
    {
      id: "c3",
      key: "3",
      title: "Personal Care",
      rating: "4.84 (9.5 M bookings)",
    },
  ];

  return (
    <React.Fragment>
      <div className={styles["category-container"]}>
        {DUMMY_CATEGORIES.map((category) => (
          <button
            key={category.key}
            className={styles["category-container__category"]}
            onClick={() => toggleDrawerOpenHandler(category.id)}
          >
            {category.title}
          </button>
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
