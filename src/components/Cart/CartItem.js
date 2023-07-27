import React, { useContext } from "react";
import classes from "./CartItem.module.css";
import CartContext from "../../store/cart-context";
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
        <h3>{props.item.name}</h3>
        <div className={classes.summary}>
          <button className={classes.totalAmtBtn}>
            <span className={classes.price}>&#x20b9;{cartCtx.totalAmount}</span>
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
