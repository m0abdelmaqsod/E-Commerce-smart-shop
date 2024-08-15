import React from 'react'
import { useSwiper } from 'swiper/react'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import styles from './styles/swiper/swiper.module.css'

const SwiperButton = () => {
  const swiper = useSwiper()
  return (
    <>
      <div className={styles.swiPerButton}>
        <button onClick={() => swiper.slidePrev()}><MdKeyboardArrowLeft /></button>
        <button onClick={() => swiper.slideNext()}><MdKeyboardArrowRight /></button>
      </div>
    </>
  )
}

export default SwiperButton