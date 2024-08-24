import React, { useState, useEffect } from "react";
import styles from "./styles/singlePro.module.css";
import { Link, useParams } from "react-router-dom";
import Similar_pro from "../../components/products/similar_product/Similar_pro";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube, AiOutlineWhatsApp, AiOutlineTwitter, AiTwotoneStar, AiFillHeart } from "react-icons/ai";
import ProReviews from "./proInfo/proReviews/ProReviews";
import AdditionalInfo from "./proInfo/additionalInfo/AdditionalInfo";
import Description from "./proInfo/description/Description";

// ===== Redux ===== //
import { useDispatch, useSelector } from "react-redux";
import { singleProduct } from "../../redux/store/products/apiPro";
import { cartActions } from "../../redux/store/shopping-cart/cartSlice";




import imgPanner from "../../../public/images/paner_pro.png";
import img1 from "../../../public/images/singlePro/Ellipse 188.png";
import img2 from "../../../public/images/singlePro/Ellipse 187.png";
import img3 from "../../../public/images/singlePro/Ellipse 186.png";
import img4 from "../../../public/images/singlePro/Ellipse 189.png";




const SinglePro = () => {

    const { id } = useParams();

    const dispatch = useDispatch();
    const { singlePro } = useSelector(state => state.product);

    document.title = `${singlePro.productName}`;


    const [infoProduct, setInfoProduct] = useState("proReviews");

    // === handle swiper img === //
    const [swiperImg, setSwiperImg] = useState(singlePro.imageUrl);





    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(singleProduct(id))
    }, [id]);

    return (
        <section className={styles.singlePro}>
            {/* === start of header === */}
            <div className={styles.header}>
                <div className={styles.img_header}>
                    <img src={imgPanner} alt="" />
                </div>

                <div className={styles.title_header}>
                    <h2>تسوق احدث المنتجات العصرية</h2>

                    <div className={styles.name_and_link}>
                        <p>{singlePro.productName}</p>
                        <span>/</span>
                        <Link to={"/Products"}>المنتجات</Link>
                        <span>/</span>
                        <Link to={"/"}>الرئيسية</Link>
                    </div>
                </div>
            </div>

            {/* === start of wiper single product === */}
            <div className={styles.swiper_single_product}>

                {/* start of data_swiper*/}
                <div className={styles.data_swiper}>
                    {/* start of title_price_start*/}
                    <div className={styles.title_price_start}>
                        <h3>{singlePro.productName}</h3>

                        <div className={styles.price}>
                            <p className={styles.discounted}>
                                {singlePro.discountedPrice}ج.م
                            </p>
                            <span>-</span>
                            <p>{singlePro.price}ج.م</p>
                        </div>

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
                    </div>

                    {/* start of desc*/}
                    <div className={styles.desc}>
                        <p>{singlePro.desc}</p>
                    </div>

                    {/* start of colors*/}
                    <div className={styles.colors}>
                        <h3> : اللون</h3>

                        <div className={styles.divColorsImg}>
                            <button>
                                <img src={img1} alt="" />
                            </button>
                            <button>
                                <img src={img2} alt="" />
                            </button>
                            <button>
                                <img src={img3} alt="" />
                            </button>
                            <button>
                                <img src={img4} alt="" />
                            </button>
                        </div>
                    </div>

                    {/* start of div_btn_KG*/}
                    <div className={styles.div_btn_KG}>
                        <h3> : الوزن</h3>
                        <div className={styles.btn_kg}>
                            <button>5 كيلو</button>
                            <button>3 كيلو</button>
                            <button>2 كيلو</button>
                        </div>
                    </div>

                    {/* start of btn_add_and_numDecInc */}
                    <div className={styles.btn_add_and_numDecInc}>
                        <div className={styles.btn_addCart}>
                            <button onClick={() => dispatch(cartActions.addItem(singlePro))}>
                                اضف للسلة
                            </button>
                        </div>
                        <div className={styles.btnDecInc}>
                            <button>-</button>
                            <p>1</p>
                            <button>+</button>
                        </div>
                    </div>

                    {/* start of add heart*/}
                    <div className={styles.add_heart}>
                        <p>اضف للمفضلة</p>
                        <button>
                            <AiFillHeart />
                        </button>
                    </div>

                    {/* start of */}
                    <div className={styles.btn_buy_now}>
                        <Link to={"/Cart"}>
                            اشتري الان
                        </Link>
                    </div>

                    {/* start of media*/}
                    <div className={styles.media}>
                        <p>شارك عبر موقع التواصل</p>
                        <div className={styles.icons_media}>
                            <ul>
                                <li>
                                    <button className={styles.bg_w}>
                                        <AiOutlineWhatsApp />
                                    </button>
                                </li>
                                <li>
                                    <button className={styles.bg_y}>
                                        <AiFillYoutube />
                                    </button>
                                </li>
                                <li>
                                    <button className={styles.bg_f}>
                                        <FaFacebookF />
                                    </button>
                                </li>
                                <li>
                                    <button className={styles.bg_t}>
                                        <AiOutlineTwitter />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.div_imgPro}>

                    <div className={styles.mySwiper2}>
                        <img src={singlePro.imageUrl} />
                    </div>

                    <div className={styles.mySwiper1}>
                        <img onClick={() => setSwiperImg(singlePro.imageUrl)} className={singlePro.imageUr1 === "" ? styles.img_none : ''} src={singlePro.imageUrl} />
                        <img onClick={() => setSwiperImg(singlePro.imageUr2)} className={singlePro.imageUr2 === "" ? styles.img_none : ''} src={singlePro.imageUr2} />
                        <img onClick={() => setSwiperImg(singlePro.imageUr3)} className={singlePro.imageUr3 === "" ? styles.img_none : ''} src={singlePro.imageUr3} />
                        <img onClick={() => setSwiperImg(singlePro.imageUr4)} className={singlePro.imageUr4 === "" ? styles.img_none : ''} src={singlePro.imageUr4} />
                        <img onClick={() => setSwiperImg(singlePro.imageUr5)} className={singlePro.imageUr5 === "" ? styles.img_none : ''} src={singlePro.imageUr5} />
                    </div>
                </div>

                {/*=== start of infoPro ===*/}
                <div className={styles.infoPro}>
                    <div className={styles.navInfo}>
                        <div className={styles.title}>
                            <button onClick={() => setInfoProduct("proReviews")} className={infoProduct === "proReviews" ? styles.infoProduct : ""} >تقييمات المنتج</button>
                            <button onClick={() => setInfoProduct("additionalInfo")} className={infoProduct === "additionalInfo" ? styles.infoProduct : ""} >معلومات اضافيه</button>
                            <button onClick={() => setInfoProduct("description")} className={infoProduct === "description" ? styles.infoProduct : ""} >الوصف</button>
                        </div>
                    </div>
                    {
                        infoProduct === "proReviews" ? <ProReviews /> : infoProduct === "additionalInfo" ? <AdditionalInfo /> : infoProduct === "description" ? <Description /> : ''
                    }

                </div>
            </div>

            {/* === start of Similar_pro === */}
            <Similar_pro />
        </section>
    );
};

export default SinglePro;