import React, { useState, useEffect } from 'react';
import BtnSwiper from './BtnSwiber';
import styles from './styles/filterSlider.module.css';
import { AiTwotoneStar, AiFillHeart } from 'react-icons/ai';
import { addCart } from '../../../api';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';




// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { fetchProducts } from '../../../store/products/apiPro';








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
                            <button onClick={() => setFilter('men')} className={filter === 'men' ? styles.active : ""}>رجالي</button>
                            <hr />
                            <button onClick={() => setFilter('women')} className={filter === 'women' ? styles.active : ""}>حريمي</button>
                            <hr />
                            <button onClick={() => setFilter('children')} className={filter === 'children' ? styles.active : ""}>اطفال</button>
                            <hr />
                            <button onClick={() => setFilter('accessories')} className={filter === 'accessories' ? styles.active : ""}>اكسسوارات</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default FilterSLider