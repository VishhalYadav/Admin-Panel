import React from "react";
import { useParams } from "react-router-dom";
const CategoryPage = (props) => {
  const categoryId = useParams().categoryId;
  return <div>{categoryId}</div>;
};

export default CategoryPage;
