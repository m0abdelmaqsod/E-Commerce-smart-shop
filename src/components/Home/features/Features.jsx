import React from 'react';
import styles from './styles/features.module.css';
import { CiDeliveryTruck } from 'react-icons/ci'
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2'
import { LuWallet } from 'react-icons/lu'
import { AiOutlineGift } from 'react-icons/ai'




const Features = () => {
    return (
        <>
            <div className={styles.features}>
                <div className={styles.all_feature}>

                    <div className={styles.feature}>
                        <div className={styles.desc}>
                            <h3>عروض حصريه</h3>
                            <p>خصومات كبيره علي منتجاتنا</p>
                        </div>
                        <div className={styles.icon}>
                            <span><AiOutlineGift /></span>
                        </div>
                    </div>


                    <div className={styles.feature}>
                        <div className={styles.desc}>
                            <h3>استرجع الأموال</h3>
                            <p>استرداد امن لاموالك او اللاستبدال</p>
                        </div>
                        <div className={styles.icon}>
                            <span><LuWallet /></span>
                        </div>
                    </div>


                    <div className={styles.feature}>
                        <div className={styles.desc}>
                            <h3>دعم فني</h3>
                            <p>دعم علي مدار الساعة</p>
                        </div>
                        <div className={styles.icon}>
                            <span><HiMiniDevicePhoneMobile /></span>
                        </div>
                    </div>


                    <div className={styles.feature}>
                        <div className={styles.desc}>
                            <h3>توصيل مجاني</h3>
                            <p>لطلبات اعلي من 200 جنيه</p>
                        </div>
                        <div className={styles.icon}>
                            <span><CiDeliveryTruck /></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features