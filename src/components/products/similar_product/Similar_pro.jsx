import React, { useState, useEffect } from "react";
import styles from "./styles/similar_pro.module.css";
import { AiTwotoneStar, AiFillHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { addCart } from "../../../api";
import BtnSwiper from "../../Home/categorie_filter/BtnSwiber";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../store/products/apiPro";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';




const Similar_pro = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.product);


  const data = [...products]

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);
  // const similarPro = data.slice(1, 30);



  // === handel Responsive view === //
  let num = 5;
  let numSpaceBetween = 35;

  if (window.innerWidth >= 1200) {
    num = 5;
    numSpaceBetween = 35;
  }
  else {
    if (window.innerWidth <= 1200) {
      num = 4;
      numSpaceBetween = 30;
    }
    if (window.innerWidth <= 1024) {
      num = 3;
      numSpaceBetween = 30;
    }
    if (window.innerWidth <= 860) {
      num = 3;
      numSpaceBetween = 30;
    }
    if (window.innerWidth <= 768) {
      num = 2;
      numSpaceBetween = 30;
    }
    if (window.innerWidth <= 425) {
      num = 1.3;
      numSpaceBetween = 20;
    }
    if (window.innerWidth <= 360) {
      num = 1;
      numSpaceBetween = 30;
    }
  }


  return (
    <>
      <div className={styles.similar_pro}>
        <div className={styles.title_pro}>
          <h3>
            منتجات مشابهة<span></span>
          </h3>
        </div>

        <div className={styles.products}>
          <Swiper
            slidesPerView={num}
            spaceBetween={numSpaceBetween}
            // loop={true}
            navigation={true}
            modules={[Navigation]}
            className={styles.mySwiperSimilar}
          >
            {
              data.map((product, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.pro}>
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
                          } className={styles.addCartResponsive}>
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
                          }>اضف الي العربة</button>

                      </div>
                    </div>

                    <div className={styles.pro_content}>
                      <div className={styles.div_price}>
                        <p>{product.price}ج.م</p>
                        <span>{product.discountedPrice}</span>
                      </div>

                      <div className={styles.proName_assess}>
                        <div className={styles.assess}>
                          <button className={styles.star}><AiTwotoneStar />
                          </button>
                          <button><AiTwotoneStar />
                          </button>
                          <button><AiTwotoneStar />
                          </button>
                          <button><AiTwotoneStar />
                          </button>
                          <button><AiTwotoneStar />
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
                </SwiperSlide>
              ))}
            <BtnSwiper />
          </Swiper>

        </div>
      </div>
    </>
  );
};

export default Similar_pro;
