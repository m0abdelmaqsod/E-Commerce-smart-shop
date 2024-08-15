import React, { useState, useEffect } from 'react';
import styles from './styles/brands.module.css';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
// import { Pagination } from 'swiper/modules';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Brands = () => {

  // === handel Responsive view === //
  let num = 7;

  if (window.innerWidth >= 860) {
    num = 7;
  } else {
    if (window.innerWidth <= 860) {
      num = 6;
    }
    if (window.innerWidth <= 768) {
      num = 5;
    }
    if (window.innerWidth <= 425) {
      num = 3;
    }
    if (window.innerWidth <= 321) {
      num = 1;
    }
  }



  return (
    <>
      <section className={styles.brands}>
        <div className={styles.title_pro}>
          <h3>البراندات<span></span></h3>
        </div>


        <Swiper
          slidesPerView={num}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          // pagination={{
          //     clickable: true,
          // }}
          navigation={true}

          modules={[Autoplay, Pagination, Navigation]}

          // className="mySwiper"
          className={styles.swiperSlide}
        >

          <div className={styles.div_brands}>
            <SwiperSlide>
              <img src="../../../../public/images/prands/brandlogo5.png " alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="../../../../public/images/prands/tablogo1.png" alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="../../../../public/images/prands/brandlogo4.png" alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="../../../../public/images/prands/brandlogo6.png" alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="../../../../public/images/prands/brandlogo2.png" alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="../../../../public/images/prands/brandlogo5.png" alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="../../../../public/images/prands/brandlogo4.png" alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="../../../../public/images/prands/brandlogo5.png" alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src="../../../../public/images/prands/brandlogo4.png" alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={'../../../../public/images/prands/brandlogo2.png'} alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={'../../../../public/images/prands/brandlogo4.png'} alt="" />
            </SwiperSlide>
          </div>
        </Swiper>
      </section>
    </>
  )
}

export default Brands