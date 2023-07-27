import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomeServices.module.css";
const HomeServices = () => {
  const HOME_SERVICES = [
    {
      title: "Appliance Repair",
      key: "hs1",
    },
    {
      title: "Home Painting",
      key: "hs2",
    },
    {
      title: "Cleaning & Pest",
      key: "hs3",
    },
    {
      title: "Disinfection",
      key: "hs4",
    },
    {
      title: "Home Repairs",
      key: "hs5",
    },
  ];
  return (
    <div className={styles["home-services-container"]}>
      <h1 className={styles.center}>Home Services</h1>
      <div className={styles["home-services"]}>
        {HOME_SERVICES.map((service) => (
          <Link key={service.key} className={styles.link}>
            {service.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
