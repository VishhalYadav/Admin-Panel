import React from "react";
import { Link } from "react-router-dom";

import "./Categories.css";
const Categories = (props) => {
  return (
    <div className="category-container">
      {props.categories.map((category) => {
        return (
          <Link
            to={`/${category.id}/categories`}
            key={category.key}
            className="category-container__category"
          >
            <h2 className="center">{category.title}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
