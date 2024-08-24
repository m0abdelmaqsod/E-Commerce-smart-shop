import React, { useEffect } from 'react';
import SwiperButton from './SwiperButton';
import styles from './styles/slider.module.css';
import { Link } from 'react-router-dom';


// ===== Redux ===== //
import { useDispatch, useSelector } from 'react-redux';
import { sliderHome } from '../../../redux/store/products/apiPro';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Slider = () => {

    const dispatch = useDispatch();

    const { sliderHeadHome } = useSelector(state => state.product)


    useEffect(() => {
        dispatch(sliderHome());
    }, []);




    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    sliderHeadHome.map((pro, id) => (
                        <SwiperSlide key={id}>
                            <div className={styles.slider}>
                                <div className={styles.slid}>

                                    <div className={styles.div_slider}>
                                        <div className={styles.img_slider}>
                                            <img src={pro.imageUrl2} alt="error in img" />
                                            <img src={pro.imageUrl3} alt="error in img" />
                                            <img src={pro.imageUrl1} alt="error in img" />
                                        </div>


                                        <div className={styles.desc_slider}>
                                            <div className={styles.div_desc}>
                                                <p>{pro.text1}</p>
                                                <h3>{pro.text2}</h3>
                                                <p>{pro.text3}</p>
                                                <Link to={'/Products'}>أكتشف الأن</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

                <SwiperButton />
            </Swiper>


        </>
    )
}

export default Slider