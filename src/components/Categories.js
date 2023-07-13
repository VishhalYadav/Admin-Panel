import React from "react";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import CategoryPage from "../pages/CategoryPage";

import "./Categories.css";
const Categories = (props) => {
  return (
    <div className="category-container">
      {props.categories.map((category) => {
        return (
          <button
            key={category.key}
            className="category-container__category"
            onClick={() => <CategoryPage category={category} />}
          >
            <h2 className="center">{category.title}</h2>
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
