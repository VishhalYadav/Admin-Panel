import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

import classes from "./CartItem.module.css";
const CartItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <p className={classes.foldingText}>{props.item.name}</p>
        <div className={classes.summary}>
          <button className={classes.totalAmtBtn}>
            <span className={classes.price}>&#x20b9;{props.item.price}</span>
          </button>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeItemHandler.bind(null, props.item.id)}>−</button>
        <span className={classes.amount}>{props.item.amount}</span>
        <button onClick={addItemHandler.bind(null, props.item)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
