import React from "react";
import UpperBody from "../components/Header/UpperBody";
import HomeServices from "../components/HomePage Components/HomeServices";
import PopularServices from "../components/HomePage Components/PopularServices";
import BestOffers from "../components/HomePage Components/BestOffers";
import Footer from "../components/Footer/Footer";
const HomePage = (props) => {
  return (
    <React.Fragment>
      <UpperBody />
      <HomeServices />
      <PopularServices />
      <BestOffers />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
