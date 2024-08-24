import React, { useState } from "react";
import styles from "./styles/navCart.module.css";
import { Link } from "react-router-dom";


// ===== Redux ===== //
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../../redux/store/shopping-cart/cartSlice";







const NavCart = ({ show, setShow }) => {

  const dispatch = useDispatch();
  const dataCart = useSelector(state => state.cart.cartItem);
  const totalAmount = useSelector(state => state.cart.totalAmount)


  const data = [...dataCart]




  return (
    <>
      <div className={show == false ? styles.NavCart : styles.close_cart}>
        <div className={styles.dev_close}>
          <button className={styles.close} onClick={() => setShow(false)}>
            X
          </button>
        </div>

        <div className={styles.carts}>
          {data.length == 0 ? (
            <h3 className={styles.massageCart}>ليس هناك منتجات السلة فارغة</h3>
          ) : (
            data.map((cart, index) => (
              <div className={styles.div_Carts} key={index}>

                <div className={styles.delete_cart}>
                  <button onClick={() => dispatch(cartActions.deleteItem(cart))}>X</button>
                </div>

                <div className={styles.desc_and_price}>

                  <h3>{cart.productName}</h3>

                  <div className={styles.price_and_Quant}>
                    <h6>{cart.totalPrice}ج.م</h6>
                    <p>X{cart.quantity}</p>
                  </div>

                  <div className={styles.inc_or_dec_prod}>
                    <button onClick={() => dispatch(cartActions.removeItem(cart))}>-</button>
                    <p>{cart.quantity}</p>
                    <button onClick={() => dispatch(cartActions.addItem(cart))}>+</button>
                  </div>
                </div>

                <div className={styles.img_cart}>
                  <img src={cart.imageUrl} alt="error in img" />
                </div>

                <span className={styles.border_bottom}></span>
              </div>
            ))
          )}
        </div>

        <div className={styles.total_price_pro}>
          <Link to={"/Cart"} onClick={() => setShow(false)}>
            ادفع
          </Link>
          <p>المجموع : {totalAmount} جنيه </p>
        </div>
      </div>
    </>
  );
};

export default NavCart;
