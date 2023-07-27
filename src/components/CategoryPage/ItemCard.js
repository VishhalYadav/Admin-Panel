import React from "react";
import SwitchImg from "../../assets/category/swtich.jpg";
import FanImg from "../../assets/category/fan.jpg";
import BulbImg from "../../assets/category/bulb.jpg";
import styles from "./ItemCard.module.css";
import AddBtn from "./AddBtn";
const ItemCard = () => {
  const ITEMS = [
    {
      id: "i1",
      name: "Switch Replacement",
      rating: "4.85 (15K reviews)",
      price: 300,
      amount: 1,
      offers: "",
      description: ["description 1", "description 2", "description 3"],
      img: SwitchImg,
    },
    {
      id: "i2",
      name: "Fan Repair",
      rating: "4.00 (10K reviews)",
      amount: 1,
      price: 100,
      offers: "",
      description: ["description 1", "description 2", "description 3"],
      img: FanImg,
    },
    {
      id: "i3",
      name: "Bulb Repair",
      rating: "3.85 (20K reviews)",
      amount: 1,
      price: 150,
      offers: "",
      description: ["description 1", "description 2", "description 3"],
      img: BulbImg,
    },
  ];

  return (
    <React.Fragment>
      <h3 className={styles.center}>Frequently Booked</h3>
      {ITEMS.map((item) => (
        <div className={styles.itemCard} key={item.id}>
          <div className={styles.categoryInfo}>
            <h4 className={styles.name}>{item.name}</h4>
            <p>{item.rating}</p>
            <p>&#x20b9;{item.price}</p>
            <p>{item.offers}</p>
            <ul>
              {item.description.map((des) => (
                <li>{des}</li>
              ))}
            </ul>
          </div>
          <div className={styles.imgDiv}>
            <img src={item.img} alt="Switch" className={styles.boxImg} />
          </div>
          <AddBtn item={item} />
        </div>
      ))}
    </React.Fragment>
  );
};

export default ItemCard;
