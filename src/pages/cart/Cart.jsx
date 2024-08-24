import React, { useEffect } from "react";
import styles from "./styles/cart.module.css";
import Similar_pro from "../../components/products/similar_product/Similar_pro";
import { Link } from "react-router-dom";
import Coupon from "../../components/cart/coupon/Coupon";
import CartItem from "../../components/cart/cartItem/CartItem";

// ===== Redux ===== //
import { useDispatch, useSelector } from "react-redux";



import imgHeader from "../../../public/images/paner_pro.png";
import { cartActions } from "../../redux/store/shopping-cart/cartSlice";





const Cart = () => {

  document.title = "السلة";

  const dispatch = useDispatch()
  // ====  get data cart Home ==== //
  const cartProduct = useSelector(state => state.cart.cartItem);
  const data = [...cartProduct];



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <section className={styles.cart}>
        {/* === start of header === */}
        <div className={styles.header}>
          <div className={styles.img_header}>
            <img src={imgHeader} alt="" />
          </div>

          <div className={styles.title_header}>
            <h2>تسوق احدث المنتجات العصرية</h2>

            <div className={styles.name_and_link}>
              <p>السلة</p>
              <span>/</span>
              <Link to={"/"}>الرئيسية</Link>
            </div>
          </div>
        </div>

        {/* === start of div_cart === */}
        <div className={styles.div_cart}>
          <h3>سلة التسوق</h3>

          <div className={styles.cartPro_coupon}>
            {/* === start of coupon === */}
            <div className={styles.coupon}>
              <Coupon />
            </div>

            {/* === start of cartPro === */}
            <div className={styles.cartPro}>
              <div className={styles.title}>
                <p>المجموع</p>
                <p>الكمية</p>
                <p>السعر</p>
                <p>المنتج</p>
              </div>
              <hr />

              {/* === start of cart Pro Scroll === */}
              <div className={styles.cartProScroll}>
                {data.length == 0 ? (
                  //=== of massageCart === //
                  <h3 className={styles.massageCart}>
                    ليس هناك منتجات السلة فارغة
                  </h3>
                ) : (
                  /* //=== of div_Carts === // */
                  data.map((item, id) => (
                    <div className={styles.div_Carts} key={id}>

                      < CartItem item={item} />

                    </div>
                  ))
                )}
              </div>
              {/* === start of btn back deleteAll === */}
              <div className={styles.btn_back_deleteAll}>

                <div className={styles.btn_deleteAll}>
                  <button onClick={() => "dispatch(cartActions.deleteItem())"}>مسح السلة</button>
                </div>

                <div className={styles.btn_back}>
                  <Link to={"/Products"}>واصل التسوق</Link>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* === start of Similar_pro === */}
        <Similar_pro />

      </section>
    </>
  );
};

export default Cart;
