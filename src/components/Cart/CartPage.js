import React, { useState } from "react";

import styles from "./CartPage.module.css";
const CartPage = () => {
  const [isdropDown, setIsDropDown] = useState(false);
  const PLUS_IN_NUMBERS = [
    { title: "64 crores", text: "Saved by Plus members" },
    { title: "9.5 lakh+", text: "Happy Plus members" },
    { title: "4.84", text: "Average rating of Plus..." },
    { title: "6.3", text: "Average bookings per..." },
  ];
  const text =
    "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available";
  const FAQS = [
    { ques: "What are the benefits of Plus membership" },
    { ques: "How does 100% money back guarantee work ?" },
    { ques: "Who is UC Plus professinal ?" },
    { ques: "Can I pay memebership through cash ?" },
    { ques: "Can I cancel my memberhship after buying it ?" },
  ];

  const faqDropdownHandler = (e) => {
    setIsDropDown((prev) => !prev);
  };
  return (
    <React.Fragment>
      <h1 style={{ marginLeft: "1.5rem" }}>
        Save 15% on every order for just &#x20b9;64 extra{" "}
      </h1>
      <p style={{ marginLeft: "1.5rem" }}>
        You will save &#x20b9;135 on this order
      </p>
      <div className={styles.categoryContainer}>
        <div className={styles.detailsContainer}>
          <div>
            <h4>Other benefits</h4>
            <ul>
              <li>
                <span>100% moneyback guarantee</span>
                <span>
                  If you save less than your membership price we refund you the
                  difference
                </span>
              </li>
              <li>
                <span>Top rated professionals</span>
                <span>
                  Get exclusively trained UC professionals at your service
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h2>Estimated Savings</h2>
            <h1>&#x20b9;1440</h1>
            <p>No. of services per year</p>
            <div className={styles.noOfServices}>
              <p>2</p>
              <p>4</p>
              <p>6</p>
              <p>8</p>
              <p>10</p>
              <p>12</p>
            </div>
            <p>
              <i>Subscribers placed 6 orders on average in your area</i>
            </p>
          </div>
          <h4>Plus in numbers</h4>
          <div className={styles.container3}>
            {PLUS_IN_NUMBERS.map((card) => {
              return (
                <div className={styles.container3Card}>
                  <h6>{card.title}</h6>
                  <p>{card.text}</p>
                </div>
              );
            })}
          </div>

          <ul className={styles.FAQcontainer}>
            <h2>FAQS</h2>
            {FAQS.map((faq) => {
              return (
                <li>
                  <span
                    style={{ display: "block" }}
                    onClick={faqDropdownHandler}
                  >
                    {faq.ques}
                  </span>
                  <span>{isdropDown && text}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.sideContainer}>
          <h4 className={styles.center}>Select your plan</h4>
          <div className={styles.cartDiv}>
            <span>
              <h3>6 months</h3>
              <p>&#x20b9;199</p>
            </span>

            <button>Add</button>
          </div>
          <h5 className={styles.center} style={{ color: "rgb(130,38,8)" }}>
            No I will pay the full price
          </h5>

          <div className={styles.footerPrice}>
            <p>&#x20b9;898</p>
            <button>Proceed</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartPage;
