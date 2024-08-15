import React, { useState, useEffect } from "react";
import styles from "./styles/latestPro.module.css";
import { AiTwotoneStar, AiFillHeart } from "react-icons/ai";
import { addCart } from "../../../api";
import { Link } from "react-router-dom";


import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../store/products/apiPro";



const LatestPro = () => {
  const [latestData, setLatestData] = useState();


  const dispatch = useDispatch()

  const { products } = useSelector(state => state.product)

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

  const latestDataPro = products.slice(0, 8);

  // console.log(latestDataPro);

  return (
    <>
      <section className={styles.latestPro}>
        <div className={styles.dev_latestPro}>
          <div className={styles.title_pro}>
            <h3>
              احدث المنتجات<span></span>
            </h3>
          </div>
          <div className={styles.products}>
            {
              latestDataPro.map((product, index) => (
                <div className={styles.pro} key={index}>
                  <div className={styles.div_img}>
                    <Link to={`/SinglePro/${product.id}`}>
                      <img src={product.imageUrl} alt="" />
                    </Link>
                    <div className={styles.dev_heart}>
                      <button>
                        <AiFillHeart />
                      </button>
                      <button
                        onClick={() =>
                          addCart(
                            product.productName,
                            product.price,
                            product.imageUrl,
                            product.discountedPrice,
                            product.categories,
                            product.trademarks,
                            product.color,
                            product.weight
                          )
                        }
                        className={styles.addCartResponsive}
                      >
                        +<span>0</span>
                      </button>
                    </div>

                    <div className={styles.btnCart}>
                      <button
                        onClick={() =>
                          addCart(
                            product.productName,
                            product.price,
                            product.imageUrl,
                            product.discountedPrice,
                            product.categories,
                            product.trademarks,
                            product.color,
                            product.weight
                          )
                        }
                      >
                        اضف الي العربة
                      </button>
                    </div>
                  </div>

                  <div className={styles.pro_content}>
                    <div className={styles.div_price}>
                      <p>{product.price}ج.م</p>
                      <span>{product.discountedPrice}ج.م</span>
                    </div>

                    <div className={styles.proName_assess}>
                      <div className={styles.assess}>
                        <button className={styles.star}>
                          <AiTwotoneStar />
                        </button>
                        <button>
                          <AiTwotoneStar />
                        </button>
                        <button>
                          <AiTwotoneStar />
                        </button>
                        <button>
                          <AiTwotoneStar />
                        </button>
                        <button>
                          <AiTwotoneStar />
                        </button>
                      </div>
                      <Link to={`/SinglePro/${product.id}`}>
                        {product.productName}
                      </Link>
                    </div>
                  </div>

                  <div className={styles.sizes}>
                    <button>XL</button>
                    <button>L</button>
                    <button>M</button>
                    <button>S</button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestPro;
