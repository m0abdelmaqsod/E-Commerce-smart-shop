import React from 'react';
import styles from './styles/time.module.css';
import { Link } from 'react-router-dom';

const Time = () => {


    return (
        <>
            <section className={styles.time}>
                <div className={styles.div_time}>
                    <div className={styles.desc}>
                        <p>أكبر خصم علي الاطلاق</p>
                        <h1>احدث ملابس اللاطفال</h1>
                    </div>

                    <div className={styles.remaining_time}>
                        <div className={styles.second}>
                            <p>00</p>
                            <p>ثانية</p>
                        </div>
                        <div>
                            <p>00</p>
                            <p>دقيقة</p>
                        </div>
                        <div>
                            <p>00</p>
                            <p>ساعة</p>
                        </div>
                        <div>
                            <p>00</p>
                            <p>يوم</p>
                        </div>
                    </div>

                    <div className={styles.btn_go_products}>
                        <Link to={'./Products'}>تسوق اللان</Link>

                    </div>

                    <div className={styles.img_left}>
                        <img src="../../../../public/images/c1 1.png" alt="" />
                    </div>
                    <div className={styles.img_right}>
                        <img src="../../../../public/images/c3.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Time