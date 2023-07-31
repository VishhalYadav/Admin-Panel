import React, { useContext } from "react";
import CartIcon from "./CartIcon";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";
const Cart = () => {
  const cartCtx = useContext(CartContext);

  if (cartCtx.items.length === 0) {
    return (
      <React.Fragment>
        <div className={styles.cartContainer}>
          <CartIcon />
          <p className={styles.center}>No items in cart.</p>
        </div>
      </React.Fragment>
    );
  }
  return (
    <div className={styles.cartItemContainer}>
      <div>
        {cartCtx.items.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <button className={styles.totalAmtBtn}>
        Total Amount is: {cartCtx.totalAmount}
      </button>
    </div>
  );
};

export default Cart;
