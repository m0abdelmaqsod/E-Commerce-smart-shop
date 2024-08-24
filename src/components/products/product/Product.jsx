import React from "react";
import styles from "./styles/product.module.css";
import { AiTwotoneStar, AiFillHeart } from "react-icons/ai";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

// ===== Redux ===== //
import { cartActions } from "../../../redux/store/shopping-cart/cartSlice";
import { useDispatch } from "react-redux";





const Product = ({
  isActive,
  filter_categories,
  pages,
  currentPage,
  setCurrentPage,
}) => {


 const dispatch = useDispatch()
  const generatedPages = [];
  for (let i = 1; i <= pages; i++) {
    generatedPages.push(i);
  }

  return (
    <>
      <section className={styles.Product}>
        {/* === start of div_product and div_product_small === */}
        <div
          className={
            isActive == true ? styles.div_product : styles.div_product_small
          }
        >
          {filter_categories.map((product, index) => (
            <div className={styles.pro} key={index}>
              <div className={styles.div_img}>
                <Link to={`/SinglePro/${product.id}`}>
                  <img src={product.imageUrl} alt="" />
                </Link>
                <div className={styles.dev_heart}>
                  <button>
                    <AiFillHeart />
                  </button>
                  <button onClick={() => dispatch(cartActions.addItem(product))} className={styles.addCartResponsive}
                  >
                    +<span>0</span>
                  </button>
                </div>

                <div className={styles.btnCart}>
                  <button onClick={() => dispatch(cartActions.addItem(product))}>
                    اضف الي العربة
                  </button>
                </div>
              </div>

              <div className={styles.pro_content}>
                <div className={styles.div_price}>
                  <p>{product.price}ج.م</p>
                  <span>{product.discountedPrice}</span>
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
          ))}
        </div>

        {/* === start of pagination */}
        <div className={styles.pagination}>
          <div className={styles.btn_prev}>
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              <FiArrowLeft />
            </button>
          </div>
          {generatedPages.map((page) => (
            <div
              onClick={() => setCurrentPage(page)}
              key={page}
              className={currentPage === page ? styles.active : styles.btn_num}
            >
              {page}
            </div>
          ))}

          <div className={styles.btn_next}>
            <button
              disabled={currentPage === pages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              <FiArrowRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
