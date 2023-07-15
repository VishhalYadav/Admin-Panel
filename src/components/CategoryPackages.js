import React from "react";

import "./CategoryPackages.css";

const CategoryPackages = (props) => {
  // console.log(props.packages);
  return (
    <div className="container-packages">
      {props.packages.map((pack) => {
        return (
          <div className="container__package" key={pack.name}>
            <img src={pack.avatar} alt={pack.name}></img>
            <p>{pack.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryPackages;
