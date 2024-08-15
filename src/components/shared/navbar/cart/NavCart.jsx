import React, { useState, useEffect } from "react";
import styles from "./styles/navCart.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const NavCart = ({ show, setShow,setNamCar }) => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState();
  const [totalProCart, setTotalProCart] = useState();

  useEffect(() => {
    loadCart();
  }, [data]);

  let totalPrice = 0;
  let totalPro = 0;

  const loadCart = async () => {
    const result = await axios.get("http://localhost:8000/cart");
    setData(result.data);

    result.data.map((prices) => {
      totalPrice += prices.Quant * Number(prices.price);
      totalPro += prices.Quant;
    });
    setTotal(totalPrice.toFixed(0));
    setNamCar(totalPro);
  };
  // console.log(totalPro);
  // console.log(setNamCar);

  const deletOrder = async (id) => {
      await axios.delete(`http://localhost:8000/cart/${id}`);
      loadCart();
  };

  const incDec = async (qut, ib, c, proName, price, imgUrl) => {
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
    };
    await axios.put(`http://localhost:8000/cart/${ib}`, order);
    loadCart();
  };

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
                  <button onClick={() => deletOrder(cart.id)}>X</button>
                </div>
                <div className={styles.desc_and_price}>
                  <h3>{cart.productName}</h3>
                  <div className={styles.price_and_Quant}>
                    <h6>{cart.price}ج.م</h6>
                    <p>X{cart.Quant}</p>
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
                          cart.imageUrl
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
                          cart.imageUrl
                        )
                      }
                    >
                      +
                    </button>
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
          <p>المجموع : {total} جنيه </p>
        </div>
      </div>
    </>
  );
};

export default NavCart;
