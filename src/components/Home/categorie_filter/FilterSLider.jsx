import React, { useState, useEffect } from 'react';
import BtnSwiper from './BtnSwiber';
import styles from './styles/filterSlider.module.css';
import { AiTwotoneStar, AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';




// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// ===== Redux ===== //
import { fetchProducts } from '../../../redux/store/products/apiPro';
import { cartActions } from '../../../redux/store/shopping-cart/cartSlice';








const FilterSLider = () => {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.product)


    const [filter, setFilter] = useState('all');


    useEffect(() => {
        dispatch(fetchProducts())
    }, []);




    // === handel Responsive view === //
    let num = 3;

    if (window.innerWidth >= 1200) {
        num = 3;
    }
    else {
        if (window.innerWidth <= 1200) {
            num = 2;
        }
        if (window.innerWidth <= 1023) {
            num = 3;
        }
        if (window.innerWidth <= 860) {
            num = 2;
        }
        if (window.innerWidth <= 560) {
            num = 1;
        }
    }




    const filteredProducts = filter === 'all' ? products : products.filter(product => product.categories === filter)

    return (
        <>
            <div className={styles.filterSLider}>
                <Swiper
                    slidesPerView={num}
                    spaceBetween={30}
                    modules={[Pagination]}
                    className={styles.swiperSlide}
                >

                    {
                        filteredProducts.map((product, index) => (
                            <SwiperSlide key={index} >
                                <div className={styles.products}>
                                    <div className={styles.pro}>
                                        <div className={styles.div_img}>
                                            <Link to={`/SinglePro/${product.id}`}>
                                                <img src={product.imageUrl} alt="" />
                                            </Link>

                                            <div className={styles.dev_heart}>
                                                <button>
                                                    <AiFillHeart />
                                                </button>
                                                <button onClick={() => dispatch(cartActions.addItem(product))} className={styles.addCartResponsive}>
                                                    +<span>0</span>
                                                </button>
                                            </div>

                                            <div className={styles.btnCart}>
                                                <button onClick={() => dispatch(cartActions.addItem(product))}>اضف الي العربة</button>
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
                                </div>
                            </SwiperSlide>
                        ))
                    }
                    <BtnSwiper />
                </Swiper>

                <div className={styles.filter}>
                    <div className={styles.div_filter}>
                        <div className={styles.title}>
                            <h4>تسوق عبر الفئات</h4>
                        </div>

                        <div className={styles.div_button_filter}>
                            <button onClick={() => setFilter('all')} className={filter === 'all' ? styles.active : ""}>افتراضي</button>
                            <hr />
                            <button onClick={() => setFilter('clothes')} className={filter === 'clothes' ? styles.active : ""}>ملابس</button>
                            <hr />
                            <button onClick={() => setFilter('electronics')} className={filter === 'electronics' ? styles.active : ""}>الالكترونيات</button>
                            <hr />
                            <button onClick={() => setFilter('shoes')} className={filter === 'shoes' ? styles.active : ""}>الأحذية</button>
                            <hr />
                            <button onClick={() => setFilter('jewelry')} className={filter === 'jewelry' ? styles.active : ""}>المجوهرات</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default FilterSLider