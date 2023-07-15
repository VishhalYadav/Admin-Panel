import React from "react";
import { useParams } from "react-router-dom";
import CategoryPackages from "../components/CategoryPackages";

import "./CategoryPage.css";
import Packages from "../components/Packages";
const CategoryPage = (props) => {
  const categoryId = useParams().categoryId;
  const identifiedCategory = props.categories.find(
    (category) => category.id === categoryId
  );
  return (
    <>
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
      </div>
      <div>
        <CategoryPackages packages={identifiedCategory.packages} />
      </div>
      <div>
        <Packages package={identifiedCategory.packages} />
      </div>
    </>
  );
};

export default CategoryPage;
