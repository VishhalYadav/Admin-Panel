import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import styles from "./AddBtn.module.css";
const AddBtn = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  return (
    <button
      onClick={addItemHandler.bind(null, props.item)}
      className={styles.btn}
    >
      Add
    </button>
  );
};

export default AddBtn;
