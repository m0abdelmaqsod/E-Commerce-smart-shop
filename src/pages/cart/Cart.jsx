import React, { useState, useEffect } from "react";
import styles from "./styles/cart.module.css";
import Similar_pro from "../../components/products/similar_product/Similar_pro";
import { Link } from "react-router-dom";
import Coupon from "../../components/cart/coupon/Coupon";
import axios from "axios";

const Cart = () => {
  document.title = "السلة";

  const [data, setData] = useState([]);
  const [total, setTotal] = useState();

  useEffect(() => {
    loadCart();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let totalPrice = 0;
  // let totalPro = 0;
  // setNamCar(totalPro);

  const loadCart = async () => {
    const result = await axios.get("http://localhost:8000/cart");
    setData(result.data);

    result.data.map((prices) => {
      totalPrice += prices.Quant * Number(prices.price);
      // totalPro += prices.Quant;
    });
    setTotal(totalPrice.toFixed(0));
    // console.log(totalPro);
  };

  const deleteOrder = async (id) => {
    // let isDelete = window.confirm(
    //   "Are you sure ? this item will be remove from your order"
    // );
    // if (isDelete) {
    await axios.delete(`http://localhost:8000/cart/${id}`);
    loadCart();
    // }
  };

  // const deleteAll = async (id) => {
  //   await axios.delete(`http://localhost:8000/cart`);
  //   loadCart();
  // };
  // console.log();

  const incDec = async (
    qut,
    ib,
    c,
    proName,
    price,
    imgUrl,
    discouPr,
    categ,
    trad,
    col,
    wei
  ) => {
    if (c === "dec") {
      if (qut === 1) {
        qut = 1;
      } else {
        qut -= 1;
      }
    } else {
      if (qut === 20) {
        qut = 20;
        alert("Quantity Cnnot Exceed 20!");
        return;
      } else {
        qut += 1;
      }
    }
    const order = {
      productName: proName,
      price: price,
      Quant: qut,
      imageUrl: imgUrl,
      discountedPrice: discouPr,
      categories: categ,
      trademarks: trad,
      color: col,
      weight: wei,
    };
    await axios.put(`http://localhost:8000/cart/${ib}`, order);
    loadCart(data);
  };

  return (
    <>
      <section className={styles.cart}>
        {/* === start of header === */}
        <div className={styles.header}>
          <div className={styles.img_header}>
            <img
              src="../../../public/images/paner_pro.png"
              alt=""
            />
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
                  //=== of div_Carts === //
                  data.map((cart, id) => (
                    <div className={styles.div_Carts} key={id}>
                      <div className={styles.price}>
                        <h6>جنيه {total}</h6>
                      </div>

                      <div className={styles.inc_or_dec_prod}>
                        <button
                          onClick={() =>
                            incDec(
                              cart.Quant,
                              cart.id,
                              "dec",
                              cart.productName,
                              cart.price,
                              cart.imageUrl,
                              cart.discountedPrice,
                              cart.categories,
                              cart.trademarks,
                              cart.color,
                              cart.weight
                            )
                          }
                        >
                          -
                        </button>
                        <p>{cart.Quant}</p>
                        <button
                          onClick={() =>
                            incDec(
                              cart.Quant,
                              cart.id,
                              "inc",
                              cart.productName,
                              cart.price,
                              cart.imageUrl,
                              cart.discountedPrice,
                              cart.categories,
                              cart.trademarks,
                              cart.color,
                              cart.weight
                            )
                          }
                        >
                          +
                        </button>
                      </div>

                      <div className={styles.price}>
                        <h6>{cart.price}ج.م</h6>
                      </div>
                      <div className={styles.infoPro}>
                        <div className={styles.name_and_weight_and_color}>
                          <h3>{cart.productName}</h3>
                          <p>{cart.color} : اللون</p>
                          <p>الوزن : 2 كيلو</p>
                        </div>
                        <div className={styles.img_cart}>
                          <img src={cart.imageUrl} alt="error in img" />
                        </div>
                      </div>

                      <div className={styles.delete_cart}>
                        <button onClick={() => deleteOrder(cart.id)}>X</button>
                      </div>
                      <span className={styles.border_bottom}></span>
                    </div>
                  ))
                )}
              </div>
              {/* === start of btn back deleteAll === */}
              <div className={styles.btn_back_deleteAll}>
                <div className={styles.btn_deleteAll}>
                  <button onClick={() => "deleteAll()"}>مسح السلة</button>
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
