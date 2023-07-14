import React from "react";
import { useParams } from "react-router-dom";
import CategoryPackages from "../components/CategoryPackages";

import "./CategoryPage.css";
const CategoryPage = (props) => {
  const categoryId = useParams().categoryId;
  const identifiedCategory = props.categories.find(
    (category) => category.id === categoryId
  );
  console.log(identifiedCategory);
  return (
    <div className="upper-container">
      <div className="heading-container">
        <h2 className="center category__title">{identifiedCategory.title}</h2>
        <p className="center category__rating">{identifiedCategory.rating}</p>
      </div>
      <div className="media-container">
        <img
          src={identifiedCategory.mediaAd}
          alt="This is an ad"
          className="ad-image"
        ></img>
      </div>

      {/* <div className="container__packages">
          <CategoryPackages packages={identifiedCategory.packages} />
        </div> */}
    </div>
  );
};

export default CategoryPage;
