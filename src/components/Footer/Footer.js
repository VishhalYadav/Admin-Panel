import React from "react";

import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <div className={styles.servicesContainer}>
        <ul>
          <li>Item-1</li>
          <li>Item-2</li>
          <li>Item-3</li>
          <li>Item-4</li>
          <li>Item-5</li>
        </ul>
      </div>
      <div className={styles.pagesContainer}>
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Services</li>
          <li>Complaint</li>
          <li>FeedBack</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
