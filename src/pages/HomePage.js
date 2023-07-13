import React from "react";
import Categories from "../components/Categories";
const HomePage = (props) => {
  return <Categories categories={props.categories} />;
};

export default HomePage;
