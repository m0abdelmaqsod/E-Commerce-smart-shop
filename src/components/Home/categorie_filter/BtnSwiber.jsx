import React from 'react'
import { useSwiper } from 'swiper/react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import styles from './styles/btnSwiber/btnSwiber.module.css'

const BtnSwiper = () => {
  const swiper = useSwiper()
  return (
    <>
      <div className={styles.swiPerButton}>
        <button onClick={() => swiper.slidePrev()}><FiArrowLeft /></button>
        <button onClick={() => swiper.slideNext()}><FiArrowRight /></button>
      </div>
    </>
  )
}

export default BtnSwiper