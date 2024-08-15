import React, { useState, useEffect } from "react";
import styles from "./styles/filter_pro.module.css";
import { BiSolidLeftArrow } from "react-icons/bi";
import axios from "axios";
import { Link } from "react-router-dom";

const Filter_pro = ({
  setFilCategories,
  setTrademarks,
  setFilColor,
  setFilSize,
  filCategories,
  filSize,
  filColor,
  trademarks,
}) => {
  const [data, setData] = useState([]);
  // === active default === //
  const [active, setActive] = useState(true);


  const btnSetAllDefault = () => {
    setFilCategories("all");
    setFilSize("all");
    setFilColor("all");
    setTrademarks("all");
  };




  useEffect(() => {
    axios
      .get("http://localhost:8000/Product")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);

  const featuredItems = data.slice(0, 3)


  return (
    <>
      <section className={styles.filter_pro}>
        <div className={styles.noFilter}>
          <button className={active === true ? styles.active_defult : ''} onClick={() => {
            btnSetAllDefault()
            setActive(true)
          }}>بدون فيلتر</button>
        </div>

        {/*  === start of categories ===  */}
        <div className={styles.filter_pro_categories}>
          <h3>
            الفئات{" "}
            <span>
              <BiSolidLeftArrow />
            </span>
          </h3>
          <div className={styles.div_btn_filterCategories}>
            <button
              className={
                filCategories === "accessories" ? styles.active_Categories : ""
              }
              onClick={() => {
                setActive(false)
                setFilCategories("accessories")
              }}
            >
              <span>+</span>
              <span>الاكسسوارات</span>
            </button>

            <button
              className={
                filCategories === "clothes" ? styles.active_Categories : ""
              }
              onClick={() => {
                setActive(false)
                setFilCategories("clothes")
              }}
            >
              <span>+</span>
              <span>ملابس</span>
            </button>

            <button
              className={
                filCategories === "electronics" ? styles.active_Categories : ""
              }
              onClick={() => {
                setActive(false)
                setFilCategories("electronics")
              }}
            >
              <span>+</span>
              <span>الالكترونيات</span>
            </button>

            <button
              className={
                filCategories === "furniture" ? styles.active_Categories : ""
              }
              onClick={() => {
                setActive(false)
                setFilCategories("furniture")
              }}
            >
              <span>+</span>
              <span>الاثاث</span>
            </button>

            <button
              className={
                filCategories === "shoes" ? styles.active_Categories : ""
              }
              onClick={() => {
                setActive(false)
                setFilCategories("shoes")
              }}
            >
              <span> </span>
              <span>الاحزية</span>
            </button>

            <button
              className={
                filCategories === "jewelry" ? styles.active_Categories : ""
              }
              onClick={() => {
                setActive(false)
                setFilCategories("jewelry")
              }}
            >
              <span>+</span>
              <span>المجوهرات</span>
            </button>

            <button
              className={
                filCategories === "other" ? styles.active_Categories : ""
              }
              onClick={() => {
                setActive(false)
                setFilCategories("other")
              }}
            >
              <span>+</span>
              <span>اخري</span>
            </button>
          </div>
        </div>

        {/*  === start of price ===  */}
        <div className={styles.div_filter_price}>
          <h3>
            السعر{" "}
            <span>
              <BiSolidLeftArrow />
            </span>
          </h3>

          <form>
            <input type="range" name="filterPrice" id="price" />
          </form>
        </div>

        {/*  === start of sizes ===  */}
        <div className={styles.div_filter_size}>
          <h3>
            المقاس{" "}
            <span>
              <BiSolidLeftArrow />
            </span>
          </h3>

          <div className={styles.sizes}>
            <button
              className={filSize === "xl" ? styles.active_size : ""}
              onClick={() => {
                setActive(false)
                setFilSize("xl")
              }}
            >
              XL
            </button>
            <button
              className={filSize === "l" ? styles.active_size : ""}
              onClick={() => {
                setActive(false)
                setFilSize("l")
              }}
            >
              L
            </button>
            <button
              className={filSize === "m" ? styles.active_size : ""}
              onClick={() => {
                setActive(false)
                setFilSize("m")
              }}
            >
              M
            </button>
            <button
              className={filSize === "s" ? styles.active_size : ""}
              onClick={() => {
                setActive(false)
                setFilSize("s")
              }}
            >
              S
            </button>
          </div>
        </div>

        {/*  === start of color ===  */}
        <div className={styles.div_filter_color}>
          <h3>
            اللون{" "}
            <span>
              <BiSolidLeftArrow />
            </span>
          </h3>

          <div className={styles.div_color}>
            <button
              className={filColor === "green" ? styles.active_color : ""}
              onClick={() => {
                setActive(false)
                setFilColor("green")
              }}
            ></button>
            <button
              className={filColor === "black" ? styles.active_color : ""}
              onClick={() => {
                setActive(false)
                setFilColor("black")
              }}
            ></button>
            <button
              className={filColor === "blue" ? styles.active_color : ""}
              onClick={() => {
                setActive(false)
                setFilColor("blue")
              }}
            ></button>
            <button
              className={filColor === "yellow" ? styles.active_color : ""}
              onClick={() => {
                setActive(false)
                setFilColor("yellow")
              }}
            ></button>
            <button
              className={filColor === "red" ? styles.active_color : ""}
              onClick={() => {
                setActive(false)
                setFilColor("red")
              }}
            ></button>
            <button
              className={filColor === "white" ? styles.active_color : ""}
              onClick={() => {
                setActive(false)
                setFilColor("white")
              }}
            ></button>
          </div>
        </div>

        {/*  === start of trademarks ===  */}
        <div className={styles.div_filter_trademarks}>
          <h3>
            العلامات التجارية{" "}
            <span>
              <BiSolidLeftArrow />
            </span>
          </h3>

          <button
            className={trademarks === "Sony" ? styles.active_trademarks : ""}
            onClick={() => {
              setActive(false)
              setTrademarks("Sony")
            }}
          >
            سوني
          </button>

          <button
            className={trademarks === "Lenovo" ? styles.active_trademarks : ""}
            onClick={() => {
              setActive(false)
              setTrademarks("Lenovo")
            }}
          >
            لينوفو
          </button>

          <button
            className={
              trademarks === "Johnson & Handson" ? styles.active_trademarks : ""
            }
            onClick={() => {
              setActive(false)
              setTrademarks("Johnson & Handson")
            }}
          >
            جونسون & هاندسون
          </button>

          <button
            className={trademarks === "Apple" ? styles.active_trademarks : ""}
            onClick={() => {
              setActive(false)
              setTrademarks("Apple")
            }}
          >
            ابل
          </button>

          <button
            className={trademarks === "Google" ? styles.active_trademarks : ""}
            onClick={() => {
              setActive(false)
              setTrademarks("Google")
            }}
          >
            جوجل
          </button>

          <button
            className={trademarks === "samsung" ? styles.active_trademarks : ""}
            onClick={() => {
              setActive(false)
              setTrademarks("samsung")
            }}
          >
            سامسونج
          </button>
        </div>

        {/*  === start of featuredItems ===  */}
        <div className={styles.div_filter_featuredItems}>
          <h3>
            عناصر مميزة{" "}
            <span>
              <BiSolidLeftArrow />
            </span>
          </h3>

          {featuredItems.map((product, index) => (
            <div key={index} className={styles.div_featuredItems}>
              <div className={styles.name_price}>
                <Link to={`/SinglePro/${product.id}`}>
                  {product.productName}
                </Link>
                <p>{product.price}</p>
              </div>

              <div className={styles.div_img}>
                <img src={product.imageUrl} alt="" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Filter_pro;
