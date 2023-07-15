import React from "react";

import "./Packages.css";
const Packages = (props) => {
  // console.log(props.pack);
  return (
    <div className="container__packages">
      {props.package.map((pack) => {
        return (
          <div key={pack.name}>
            <h2>{pack.name}</h2>
            {/* <h4>{pack.subServices[0].name}</h4> */}
            <p></p>
          </div>
        );
      })}
    </div>
  );
};

export default Packages;
