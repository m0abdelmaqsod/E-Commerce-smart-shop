import React, { useState, useEffect } from "react";
import styles from "./styles/products.module.css";
import { Link } from "react-router-dom";
import NavPro from "../../components/products/navPro/NavPro";
import Product from "../../components/products/product/Product";
import Filter_pro from "../../components/products/filter_pro/Filter_pro";
import Similar_pro from "../../components/products/similar_product/Similar_pro";
import { CgMenuRight } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products/apiPro";

const Products = () => {
    // === start title page === //
    document.title = "المنتجات";

    
    const dispatch = useDispatch()
    // fetch data all
    const { products } = useSelector(state => state.product)


    const data = [...products]
    // handler filter sortItem price navPro
    const [sortItem, setSortItem] = useState("recomended");
    // handler filter total watchPro navPro
    const [watchPro, setWatchPro] = useState("9");

    // === handler Active Big And Small === //
    const [isActive, setIsActive] = useState(true);

    // === handler all filter pro === //
    const [filColor, setFilColor] = useState("all");
    const [filSize, setFilSize] = useState("all");
    const [filCategories, setFilCategories] = useState("all");
    const [trademarks, setTrademarks] = useState("all");

    // === pagination === //
    const [currentPage, setCurrentPage] = useState(1);

    // handle Responsive
    // === handler is show Fil === //
    const [isShowFil, setIsShowFil] = useState(true);
    const handleShowFilClose = () => {
        setIsShowFil(true);
    };
    const handleShowFilOpen = () => {
        setIsShowFil(false);
    };

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchProducts())
    }, []);

    // === handle filter Product Number === //


    // === handle filter categories === //
    const filter_categories =
        filCategories === "all"
            ? data
            : data.filter((product) => product.categories === filCategories);


    // === handle filter color === //
    const filter_color = filColor === "all" ? filter_categories : filter_categories.filter((product) => product.color === filColor)

    // === handle filter categories === //
    const filter_size = filSize === "all" ? filter_color : filter_color.filter((product) => product.weight === filSize)



    // === handle filter trademarks === //
    const filter_trademarks =
        trademarks === "all" ? filter_size
            : filter_size.filter((product) => product.trademarks === trademarks);




    // === handler filter sortItem price navPro === //
    const sortedProductList =
        sortItem === "low"
            ? filter_trademarks.sort((a, b) => a.price - b.price)
            : sortItem === "high"
                ? filter_trademarks.sort((a, b) => b.price - a.price)
                : filter_trademarks.sort((a, b) => (a.price > b.price ? 1 : -1));







    // === pagination === //
    const PRODUCT_PER_PAGE = watchPro;
    const pages = Math.ceil(sortedProductList.length / PRODUCT_PER_PAGE);

    const startIndex = (currentPage - 1) * PRODUCT_PER_PAGE;
    const finishIndex = currentPage * PRODUCT_PER_PAGE;
    const orderedProducts = sortedProductList.slice(startIndex, finishIndex);


    return (
        <>
            <section className={styles.products}>

                {/* === start of header === */}
                <div className={styles.header}>
                    <div className={styles.img_header}>
                        <img
                            src="../.././../public/images/paner_pro.png"
                            alt=""
                        />
                    </div>

                    <div className={styles.title_header}>
                        <h2>تسوق احدث المنتجات العصرية</h2>

                        <div className={styles.name_and_link}>
                            <p>المنتجات</p>
                            <span>/</span>
                            <Link to={"/"}>الرئيسية</Link>
                        </div>
                    </div>
                </div>

                {/* start of product filter  */}
                <div className={styles.product_and_filter_and_navPro}>
                    <div className={styles.pro_and_nav}>
                        {/* === start of div_NavPro === */}
                        <div className={styles.div_NavPro}>
                            {
                                <NavPro
                                    watchPro={watchPro}
                                    setWatchPro={setWatchPro}
                                    sortItem={sortItem}
                                    setSortItem={setSortItem}
                                    isActive={isActive}
                                    setIsActive={setIsActive}
                                />
                            }

                            {/* === start of btn_open  === */}
                            <div className={styles.btn_open}>
                                <button onClick={handleShowFilOpen}>
                                    <CgMenuRight />
                                </button>
                            </div>
                        </div>

                        {/* === start of div_NavPro === */}
                        <div className={styles.div_product}>
                            {
                                <Product
                                    isActive={isActive}
                                    filter_categories={orderedProducts}
                                    pages={pages}
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                />
                            }
                        </div>
                    </div>

                    <div className={isShowFil == false ? styles.fil : styles.fil_responsive}>
                        {/* === start of btn_close === */}
                        <div className={styles.btn_close}>
                            <button onClick={handleShowFilClose}>X</button>
                        </div>
                        {
                            <Filter_pro
                                filCategories={filCategories}
                                setFilCategories={setFilCategories}
                                setTrademarks={setTrademarks}
                                setFilColor={setFilColor}
                                setFilSize={setFilSize}
                                filSize={filSize}
                                filColor={filColor}
                                trademarks={trademarks}
                            />
                        }
                    </div>
                </div>

                <Similar_pro />
            </section>
        </>
    );
};

export default Products;